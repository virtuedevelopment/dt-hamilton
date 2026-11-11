"use client";
import { useId, useRef, useState } from "react";
import { Button, HoneypotField, InlineMessage } from "@/components/composer";
import configurations from "@/lib/config/site";

const feedbackTones = { success: "success", invalid: "danger", limited: "danger", error: "danger" };

export default function QuoteForm({ feedback }) {
  const fieldId = useId();
  const submissionId = useRef(null);
  const [status, setStatus] = useState("idle");
  const isLoading = status === "pending";

  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading) return;

    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));
    const payload = JSON.stringify(formData);
    if (submissionId.current?.payload !== payload) {
      submissionId.current = { payload, id: crypto.randomUUID() };
    }
    setStatus("pending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, submissionId: submissionId.current.id }),
      });

      if (response.ok) {
        form.reset();
        submissionId.current = null;
        setStatus("success");
      } else if (response.status === 429) {
        setStatus("limited");
      } else {
        setStatus(response.status === 400 ? "invalid" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" method="post" onSubmit={handleSubmit}>
      <HoneypotField />
      <div className="gridbox">
        <div className="inputbox">
          <label htmlFor={`${fieldId}-name`}>Full Name</label>
          <input
            id={`${fieldId}-name`}
            name="name"
            maxLength={120}
            type="text"
            autoComplete="name"
            disabled={isLoading}
            required
          />
        </div>

        <div className="inputbox">
          <label htmlFor={`${fieldId}-phone`}>Phone Number</label>
          <input
            id={`${fieldId}-phone`}
            name="phone"
            maxLength={60}
            type="tel"
            autoComplete="tel"
            disabled={isLoading}
            required
          />
        </div>

        <div className="inputbox">
          <label htmlFor={`${fieldId}-email`}>Email Address</label>
          <input
            id={`${fieldId}-email`}
            name="email"
            maxLength={254}
            type="email"
            autoComplete="email"
            disabled={isLoading}
            required
          />
        </div>

        <div className="inputbox" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor={`${fieldId}-service`}>Select Service</label>
          <select
            id={`${fieldId}-service`}
            name="service"
            disabled={isLoading}
          >
            {configurations.services.map((service) => (
              <option key={service.service_name} value={service.service_name}>
                {service.service_name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ gridColumn: "1 / -1" }} className="inputbox">
          <label htmlFor={`${fieldId}-date`}>Preferred Date (If Applicable)</label>
          <input
            id={`${fieldId}-date`}
            name="date"
            type="date"
            disabled={isLoading}
          />
        </div>

        <div style={{ gridColumn: "1 / -1" }} className="inputbox">
          <label htmlFor={`${fieldId}-message`}>Message</label>
          <textarea
            id={`${fieldId}-message`}
            name="message"
            maxLength={5000}
            disabled={isLoading}
          />
        </div>
      </div>

      <Button className="button-main" type="submit" disabled={isLoading}>
        {isLoading ? feedback.pending : feedback.submit}
      </Button>

      <InlineMessage className="quote-feedback" tone={feedbackTones[status]}>
        {feedback[status]}
      </InlineMessage>
    </form>
  );
}
