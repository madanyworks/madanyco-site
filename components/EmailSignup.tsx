"use client";

import { useState } from "react";

export default function EmailSignup({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // No backend wired up — handle off-platform (Formspree / Mailchimp etc.).
    // For now, fake-confirm so the UI feels alive.
    try {
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
          className="text-xs uppercase tracking-widest text-blush hover:text-bone transition"
        >
          {status === "sent" ? "✓ Thanks" : "Sign up →"}
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
          className="shrink-0 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-blush hover:text-bone transition"
        >
          {status === "sent" ? "Thanks ✓" : "Sign up"}
          {status !== "sent" && <span aria-hidden>→</span>}
        </button>
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-bone/40">
        We value and respect your privacy.
      </p>
      {status === "sent" && (
        <p className="mt-2 text-sm text-blush">
          Thanks! Enjoy the rest of your day — we&apos;ll stay in touch.
        </p>
      )}
    </form>
  );
}
