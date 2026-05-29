"use client";

import { useState } from "react";

const SERVICES = [
  "The Pulse System™ (Flagship)",
  "Fractional CMO",
  "Launch Strategy",
  "Coaching & Training",
  "Snapchat Ads",
  "Social Media Advertising",
  "TikTok Ads",
  "Google Ads",
  "Social Media Management",
  "Video Production",
  "Content Creation",
  "Shopify e-Commerce",
  "Website Development",
  "Marketing Automation",
  "Marketing Recruitment",
  "Events & Sponsorship",
  "Something else / not sure",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const action = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : "mailto:hello@madanyco.com";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!formspreeId) return; // let mailto: fire naturally
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Form submission failed");
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "ok") {
    return (
      <div className="border hairline border-blush/40 bg-blush/10 rounded-2xl p-10">
        <p className="font-display text-3xl tracking-tighter text-blush">
          Got it. Expect a reply within 1–2 business days.
        </p>
        <p className="mt-4 text-bone/70">
          We read every message ourselves — no auto-responders, no funnels. We
          appreciate your time.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Company" name="company" />

      <div>
        <label
          htmlFor="service"
          className="block text-xs uppercase tracking-[0.25em] text-blush mb-3"
        >
          Service interested in
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-transparent border-b border-bone/30 focus:border-blush outline-none py-3 text-lg text-bone appearance-none transition"
        >
          <option value="" className="bg-ink">
            Choose one…
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-ink">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.25em] text-blush mb-3"
        >
          Tell us a bit about your business
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-bone/30 focus:border-blush outline-none py-3 text-lg text-bone resize-none placeholder:text-bone/40 transition"
          placeholder="What stage are you at? What's getting in the way?"
        />
      </div>

      <div className="pt-2 flex items-center justify-between gap-6 flex-wrap">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-3 rounded-full bg-hot text-ink px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blush transition disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          <span className="group-hover:translate-x-1 transition">→</span>
        </button>
        <p className="text-xs uppercase tracking-[0.2em] text-bone/50">
          We reply within 1–2 business days.
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          {errorMsg || "Something went wrong. Try again or email us directly."}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.25em] text-blush mb-3"
      >
        {label}
        {required && <span className="ml-1 opacity-70">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-bone/30 focus:border-blush outline-none py-3 text-lg text-bone placeholder:text-bone/40 transition"
      />
    </div>
  );
}
