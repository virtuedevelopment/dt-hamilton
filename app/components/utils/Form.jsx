"use client";
import React, { useState } from "react";

const services = []; //list of services

export default function Form() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState();
  const [message, setMessage] = useState();

  return <div></div>;
}
