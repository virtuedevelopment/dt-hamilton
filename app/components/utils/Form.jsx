"use client";
import React, { useState } from "react";

const services = ["Service 1", "Service 2", "Service 3"]; // list of services

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, phone, email, service, date, message };
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
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

      <button className="button-main" type="submit">
        Submit
      </button>
    </form>
  );
}
