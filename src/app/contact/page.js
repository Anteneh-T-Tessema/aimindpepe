"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("https://formspree.io/f/xwkzqgqv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: "AIMP Contact Form Submission",
        }),
      });
      if (res.ok) {
        setStatus("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Sorry, there was an error. Please try again later.");
      }
    } catch {
      setStatus("Sorry, there was an error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#059669] to-[#34d399] text-white px-4 py-12">
      <div className="glass-card p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold gradient-text mb-6">Contact Us</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={5}
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          />
          <button
            type="submit"
            className="modern-cta glass-cta font-bold py-3 rounded-lg mt-2"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </div>
    </div>
  );
}
