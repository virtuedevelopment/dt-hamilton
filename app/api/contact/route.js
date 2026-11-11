import nodemailer from "nodemailer";
import configurations from "@/lib/config/site";

const fieldLimits = { name: 120, phone: 60, email: 254, service: 120, date: 10, message: 5000 };
const serviceNames = new Set(configurations.services.map(({ service_name }) => service_name));
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const htmlEntities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => htmlEntities[character]);
}

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

export async function POST(request) {
  const quote = readQuote(await request.json().catch(() => null));
  if (!quote) {
    return Response.json({ error: "Invalid quote request." }, { status: 400 });
  }

  const { name, phone, email, service, date, message } = quote;
  const from = { name: "DT Hamilton Mechanical", address: process.env.FROM_EMAIL };
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
  const preferredDate = date || "Not specified";

  try {
    await transporter.sendMail({
      from,
      to: process.env.BUSINESS_EMAIL,
      replyTo: email,
      subject: `New Service Request from ${name.replace(/[\r\n]/g, " ")}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(preferredDate)}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #ddd; padding-left: 10px; color: #555;">
          ${escapeHtml(message || "No additional message provided.").replace(/\r?\n/g, "<br>")}
        </blockquote>
        <hr />
        <p>This message was sent from your website’s contact form.</p>
      `,
    });
  } catch {
    console.error("Quote delivery to DT Hamilton failed.");
    return Response.json({ error: "Failed to deliver the quote request." }, { status: 500 });
  }

  try {
    await transporter.sendMail({
      from,
      to: email,
      subject: "Your Service Request has been Received",
      html: `
        <h2>Hi ${escapeHtml(name)},</h2>
        <p>Thank you for reaching out to <strong>DT Hamilton Mechanical</strong>. We’ve received your request for:</p>
        <ul>
          <li><strong>Service:</strong> ${escapeHtml(service)}</li>
          <li><strong>Preferred Date:</strong> ${escapeHtml(preferredDate)}</li>
        </ul>
        <p>Our team will be in touch to confirm the details. You can also reach us at service@dt-hamilton.ca or 613-293-5790.</p>
        <p>Best regards,<br>The DT Hamilton Mechanical Team</p>
      `,
    });
  } catch {
    console.error("Quote confirmation to the customer failed after the business received the request.");
  }

  return Response.json({ message: "Quote request received." });
}
