import { randomUUID } from "node:crypto";
import { after } from "next/server";
import configurations from "@/lib/config/site";
import { notifyQuote } from "@/lib/quotes/notifications";
import { reserveQuoteSlot, saveQuote } from "@/lib/quotes/storage";

export const maxDuration = 60;

const maxBodyBytes = 48 * 1024;
const submissionId = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const fieldLimits = { name: 120, phone: 60, email: 254, service: 120, date: 10, message: 5000 };
const serviceNames = new Set(configurations.services.map(({ service_name }) => service_name));
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function readQuote(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;

  const quote = {};
  for (const [field, limit] of Object.entries(fieldLimits)) {
    const value = payload[field] ?? "";
    if (typeof value !== "string" || value.length > limit) return null;
    quote[field] = value.trim();
  }

  if (
    !quote.name ||
    !/\d/.test(quote.phone) ||
    !emailPattern.test(quote.email) ||
    !serviceNames.has(quote.service) ||
    (quote.date && !/^\d{4}-\d{2}-\d{2}$/.test(quote.date))
  ) {
    return null;
  }
  return quote;
}

async function readPayload(request) {
  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json" || !request.body) return null;

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let body = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) return JSON.parse(body + decoder.decode());
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      body += decoder.decode(value, { stream: true });
    }
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

export async function POST(request) {
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return Response.json({ error: "Invalid quote request." }, { status: 403 });
  }

  const payload = await readPayload(request);
  if (payload?.website) {
    // Reply normally to bots that fill the hidden field.
    return Response.json({ message: "Quote request received." });
  }

  const quote = readQuote(payload);
  const id = payload?.submissionId ?? randomUUID();
  if (!quote || typeof id !== "string" || !submissionId.test(id)) {
    return Response.json({ error: "Invalid quote request." }, { status: 400 });
  }

  try {
    const ip = request.headers.get("x-vercel-forwarded-for") ?? "unknown";
    const ipWait = await reserveQuoteSlot("ip", ip, 8);
    const retryAfter = ipWait || await reserveQuoteSlot("email", quote.email.toLowerCase(), 3);
    if (retryAfter) {
      return Response.json({ error: "Too many quote requests." }, {
        status: 429,
        headers: { "Retry-After": String(retryAfter) },
      });
    }

    const { recordPath, created } = await saveQuote(id.toLowerCase(), quote);
    if (created) after(() => notifyQuote(recordPath, quote));
  } catch (error) {
    console.error("Quote could not be saved.", { id, reason: error.message });
    return Response.json({ error: "Failed to save the quote request." }, { status: 503 });
  }

  return Response.json({ message: "Quote request received." });
}
