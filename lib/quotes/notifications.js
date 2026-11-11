import nodemailer from "nodemailer";
import { recordDelivery } from "./storage.js";

const htmlEntities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => htmlEntities[character]);
}

async function sendAndRecord(transporter, recordPath, recipient, message) {
  let status = "sent";
  try {
    await transporter.sendMail(message);
  } catch {
    status = "failed";
    console.error(`Quote email to ${recipient} failed.`, { recordPath });
  }

  try {
    await recordDelivery(recordPath, recipient, status);
  } catch {
    console.error("Could not save quote email status.", { recordPath, recipient, status });
  }
}

export async function notifyQuote(recordPath, quote) {
  // Preview submissions are used to verify private storage without notifying customers.
  if (process.env.VERCEL_ENV === "preview") return;

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

  const business = {
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
  };

  const customer = {
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
  };

  await Promise.all([
    sendAndRecord(transporter, recordPath, "business", business),
    sendAndRecord(transporter, recordPath, "customer", customer),
  ]);
}
