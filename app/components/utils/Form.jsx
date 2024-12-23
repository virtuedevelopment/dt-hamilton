"use client";
import React, { useState, useEffect } from "react";
import configurations from "@/_data/config";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(configurations.services[0]);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  //utils
  const [isLoading, setIsLoading] = useState(false); //for submit button when it's clicked
  const [submitted, setSubmitted] = useState(false); //triggered when form is successfully submitted

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const formData = { name, phone, email, service, date, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted and emails sent successfully.");
        setSubmitted(true); // Show success message

        // Hide the message after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        console.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="gridbox">
        <div className="inputbox">
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="inputbox">
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="inputbox">
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="inputbox">
          <label htmlFor="service">Select Service</label>
          <select
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            {configurations.services.map((service, index) => (
              <option key={index} value={service.service_name}>
                {service.service_name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ gridColumn: "1 / -1" }} className="inputbox">
          <label htmlFor="date">Preferred Date (If Applicable)</label>
          <input
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div style={{ gridColumn: "1 / -1" }} className="inputbox">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <button className="button-main" type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit"}
      </button>

      {submitted && (
        <div className="submitted-message">
          Form submitted successfully! Please check your email.
        </div>
      )}
    </form>
  );
}
