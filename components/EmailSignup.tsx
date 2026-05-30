"use client";

import { useState } from "react";

export default function EmailSignup({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("subscribe failed");
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="flex-1 bg-transparent border-b border-bone/30 focus:border-blush outline-none py-2 text-sm placeholder:text-bone/40"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="text-xs uppercase tracking-widest text-blush hover:text-bone transition disabled:opacity-50"
        >
          {status === "sent"
            ? "✓ Thanks"
            : status === "sending"
              ? "…"
              : "Sign up →"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex items-end gap-4 border-b border-bone/30 focus-within:border-blush transition pb-3">
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 bg-transparent outline-none text-lg sm:text-xl placeholder:text-bone/40 text-bone"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-blush hover:text-bone transition disabled:opacity-50"
        >
          {status === "sent"
            ? "Thanks ✓"
            : status === "sending"
              ? "Sending…"
              : "Sign up"}
          {status === "idle" || status === "error" ? (
            <span aria-hidden>→</span>
          ) : null}
        </button>
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-bone/40">
        We value and respect your privacy.
      </p>
      {status === "sent" && (
        <p className="mt-2 text-sm text-blush">
          Thanks! Enjoy the rest of your day, we&apos;ll stay in touch.
        </p>
      )}
      {status === "error" && (
        <p className="mt-2 text-sm text-bone/60">
          Something went wrong. Email hello@madanyco.com and we&apos;ll add you.
        </p>
      )}
    </form>
  );
}
