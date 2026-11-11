import { createHash, randomUUID } from "node:crypto";

// Vercel Blob's versioned upload API. The project's OIDC identity grants
// access to the private store, and never reaches the browser.
const blobApi = "https://vercel.com/api/blob";

function blobCredentials() {
  const context = globalThis[Symbol.for("@vercel/request-context")]?.get();
  const token = context?.headers?.["x-vercel-oidc-token"] ?? process.env.VERCEL_OIDC_TOKEN;
  const store = process.env.BLOB_STORE_ID?.replace(/^store_/, "");
  if (!store || !token) throw new Error("Quote storage is not configured.");
  return { store, token };
}

function blobRequest(credentials, query, options = {}) {
  const { store, token } = credentials;
  return fetch(`${blobApi}?${new URLSearchParams(query)}`, {
    ...options,
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(8000),
    headers: {
      authorization: `Bearer ${token}`,
      "x-vercel-blob-store-id": store,
      "x-api-version": "13",
      "x-api-blob-request-id": `${store}:${randomUUID()}`,
      ...options.headers,
    },
  });
}

function writeRecord(credentials, pathname, record, { expires = false } = {}) {
  return blobRequest(credentials, { pathname }, {
    method: "PUT",
    body: JSON.stringify(record),
    headers: {
      "content-type": "application/json",
      "x-content-type": "application/json",
      "x-vercel-blob-access": "private",
      "x-add-random-suffix": "0",
      "x-allow-overwrite": "0",
      ...((expires || process.env.VERCEL_ENV === "preview") && { "x-ttl-days": "1" }),
    },
  });
}

export async function saveQuote(id, quote) {
  const credentials = blobCredentials();
  const prefix = process.env.VERCEL_ENV === "preview" ? "preview-quotes" : "quotes";
  const fingerprint = createHash("sha256").update(JSON.stringify(quote)).digest("hex").slice(0, 24);
  const recordPath = `${prefix}/${id}-${fingerprint}`;
  const pathname = `${recordPath}.json`;
  const record = { id, receivedAt: new Date().toISOString(), quote, notifications: "pending" };
  const response = await writeRecord(credentials, pathname, record);

  if (response.ok) return { recordPath, created: true };

  // A previous request may have saved the quote before its response was lost.
  // Only an exact match on the private record path can count as a saved retry.
  if ([400, 409, 412].includes(response.status)) {
    const existing = await blobRequest(credentials, { url: pathname });
    if (existing.ok && (await existing.json()).pathname === pathname) {
      return { recordPath, created: false };
    }
  }

  throw new Error(`Quote storage returned HTTP ${response.status}.`);
}

export async function recordDelivery(recordPath, recipient, status) {
  const response = await writeRecord(blobCredentials(), `${recordPath}/${recipient}.json`, {
    recipient,
    status,
    recordedAt: new Date().toISOString(),
  });
  if (!response.ok) throw new Error(`Quote delivery record returned HTTP ${response.status}.`);
}

// Each slot can be claimed only once across all server instances. Short-lived
// keys contain hashes, so the throttle never saves an IP address or email.
const windowSeconds = 600;

export async function reserveQuoteSlot(scope, identity, limit) {
  const credentials = blobCredentials();
  const now = Math.floor(Date.now() / 1000);
  const window = Math.floor(now / windowSeconds);
  const hash = createHash("sha256").update(`${credentials.store}:${identity}`).digest("hex");
  const prefix = process.env.VERCEL_ENV === "preview" ? "preview-limits" : "quote-limits";
  const key = `${prefix}/${window}/${scope}/${hash}`;

  // Read the occupied slots together. Conditional writes handle any concurrent
  // request that claims a slot after this read.
  const response = await blobRequest(credentials, { prefix: `${key}/`, limit: String(limit) });
  if (!response.ok) throw new Error(`Quote limit lookup returned HTTP ${response.status}.`);
  const { blobs } = await response.json();
  const used = new Set(blobs.map(({ pathname }) => pathname));
  for (let slot = 1; slot <= limit; slot += 1) {
    const pathname = `${key}/${slot}.json`;
    if (used.has(pathname)) continue;
    const claim = await writeRecord(credentials, pathname, {}, { expires: true });
    if (claim.ok) return 0;
    if ([400, 409, 412].includes(claim.status)) {
      const existing = await blobRequest(credentials, { url: pathname });
      if (existing.ok && (await existing.json()).pathname === pathname) continue;
    }
    throw new Error(`Quote limit reservation returned HTTP ${claim.status}.`);
  }

  return windowSeconds - now % windowSeconds;
}
