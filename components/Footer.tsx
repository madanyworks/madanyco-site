import Link from "next/link";
import EmailSignup from "./EmailSignup";

const LEARN = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Services" },
  { href: "/pulse-system", label: "The Pulse System™" },
  { href: "/blog", label: "Daily Blog" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const CONNECT = [
  { href: "https://linkedin.com/company/madanyco", label: "LinkedIn" },
  { href: "https://instagram.com/madanyco", label: "Instagram" },
  { href: "https://x.com/madanyco", label: "X (Twitter)" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 border-t hairline border-t-bone/10">
      <div className="px-6 sm:px-10 lg:px-14 pt-20 pb-10">
        {/* Wordmark */}
        <div className="border-b hairline border-b-bone/10 pb-12">
          <p className="font-display leading-[0.85] tracking-tightest text-[clamp(3.5rem,14vw,12rem)] text-bone">
            MadanyCo.
            <span className="text-blush text-2xl align-top ml-1">™</span>
          </p>
          <p className="mt-4 max-w-md text-bone/60 text-sm sm:text-base">
            Profit-first growth partner for DTC and e-commerce brands. We
            install The Pulse System™.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-5">
              Learn
            </p>
            <ul className="grid gap-3">
              {LEARN.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-bone/80 hover:text-blush transition link-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-5">
              Connect
            </p>
            <ul className="grid gap-3">
              {CONNECT.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bone/80 hover:text-blush transition link-underline inline-flex items-center gap-2"
                  >
                    {l.label}
                    <span className="text-xs">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-5">
              Newsletter
            </p>
            <p className="text-bone/70 max-w-md mb-5">
              We don&apos;t spam, promise. Marketing is changing, be first to
              know what&apos;s next.
            </p>
            <EmailSignup />
          </div>
        </div>

        <div className="mt-16 pt-6 border-t hairline border-t-bone/10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-bone/40">
          <span>© {year} MadanyCo.™ All rights reserved.</span>
          <Link href="/get-started" className="hover:text-blush transition">
            Drop us a line →
          </Link>
        </div>
      </div>
    </footer>
  );
}
