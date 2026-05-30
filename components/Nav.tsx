"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

// The Pulse System™, two destinations: read the method (free) vs hire us to install it (paid).
const PULSE_METHODOLOGY = {
  href: "/pulse-system",
  kicker: "Methodology · free to read",
  label: "The Pulse System™",
  desc: "How we think, the equation, the five pillars, the cadence.",
};
const PULSE_FLAGSHIP = {
  href: "/solutions/pulse-system",
  kicker: "Flagship engagement",
  label: "Get it installed",
  desc: "A founder-led squad installs & runs it with you. From $15K/mo.",
};

type PillarItem = {
  href: string;
  label: string;
  badge?: "new" | "featured";
};

type Pillar = {
  title: string;
  items: PillarItem[];
};

const PILLARS: Pillar[] = [
  {
    title: "Strategy & Leadership",
    items: [
      { href: "/solutions/fractional-cmo", label: "Fractional CMO & Coaching", badge: "new" },
      { href: "/solutions/launch", label: "Launch Strategy", badge: "new" },
    ],
  },
  {
    title: "Performance & Paid",
    items: [
      { href: "/solutions/snapchat-ads", label: "Snapchat Ads", badge: "featured" },
      { href: "/solutions/social-media-advertising", label: "Social Media Advertising" },
      { href: "/solutions/tiktok-ads", label: "TikTok Ads" },
      { href: "/solutions/google-ads", label: "Google Ads" },
    ],
  },
  {
    title: "Content & Social",
    items: [
      { href: "/solutions/social-media-management", label: "Social Media Management" },
      { href: "/solutions/video-production", label: "Video Production" },
      { href: "/solutions/content-creation", label: "Content Creation", badge: "new" },
    ],
  },
  {
    title: "Build & Systems",
    items: [
      { href: "/solutions/shopify-ecommerce", label: "Shopify e-Commerce" },
      { href: "/solutions/website-development", label: "Website Development" },
      { href: "/solutions/marketing-automation", label: "Marketing Automation", badge: "new" },
    ],
  },
  {
    title: "Talent & Experiential",
    items: [
      { href: "/solutions/recruitment", label: "Marketing Recruitment", badge: "new" },
      { href: "/solutions/events-sponsorship", label: "Events & Sponsorship", badge: "new" },
    ],
  },
];

const PRIMARY = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled || open
            ? "bg-ink/85 backdrop-blur-md border-b hairline border-b-bone/10"
            : "bg-transparent"
        )}
      >
        <div className="px-6 sm:px-10 lg:px-14 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl sm:text-2xl tracking-tighter text-bone hover:text-blush transition"
            aria-label="MadanyCo home"
          >
            MadanyCo.<span className="text-blush text-xs align-top">™</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            <div
              className="relative h-20 flex items-center"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className={cn(
                  "text-sm uppercase tracking-[0.2em] hover:text-blush flex items-center gap-1.5 transition",
                  solutionsOpen || pathname.startsWith("/solutions") || pathname === "/pulse-system"
                    ? "text-blush"
                    : "text-bone/85"
                )}
                aria-haspopup="menu"
                aria-expanded={solutionsOpen}
                onClick={() => setSolutionsOpen((v) => !v)}
              >
                Solutions
                <span
                  className={cn(
                    "inline-block transition-transform duration-200",
                    solutionsOpen && "rotate-180"
                  )}
                >
                  ↓
                </span>
              </button>

              {/* Mega-menu, fixed + viewport-centered so the wide panel never crops on either edge */}
              <div
                role="menu"
                className={cn(
                  "fixed top-20 left-1/2 -translate-x-1/2 w-[min(95vw,1100px)] pt-3 z-50 transition-all duration-150",
                  solutionsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none"
                )}
              >
                <div className="w-full rounded-2xl border hairline border-bone/10 bg-ink-700/95 backdrop-blur-md p-6 shadow-2xl">
                  {/* Pulse top strip */}
                  <div className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b hairline border-b-bone/10">
                    <PulseLink
                      data={PULSE_METHODOLOGY}
                      active={pathname === PULSE_METHODOLOGY.href}
                    />
                    <PulseLink
                      data={PULSE_FLAGSHIP}
                      active={pathname === PULSE_FLAGSHIP.href}
                      flagship
                    />
                  </div>

                  {/* 5 pillars */}
                  <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-6">
                    {PILLARS.map((p) => (
                      <div key={p.title}>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-blush mb-3 font-bold">
                          {p.title}
                        </p>
                        <ul className="grid gap-1">
                          {p.items.map((it) => (
                            <li key={it.href}>
                              <Link
                                href={it.href}
                                role="menuitem"
                                className={cn(
                                  "block px-2 py-1.5 rounded-md text-sm text-bone/85 hover:bg-blush/15 hover:text-blush transition",
                                  pathname === it.href && "bg-bone/5 text-bone"
                                )}
                              >
                                <span className="flex items-center gap-2">
                                  {it.label}
                                  {it.badge === "new" && (
                                    <span className="text-[8px] uppercase tracking-[0.2em] bg-blush/20 text-blush px-1.5 py-0.5 rounded-sm font-bold">
                                      New
                                    </span>
                                  )}
                                  {it.badge === "featured" && (
                                    <span className="text-[8px] uppercase tracking-[0.2em] bg-hot/20 text-hot px-1.5 py-0.5 rounded-sm font-bold">
                                      Featured
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="mt-6 pt-5 border-t hairline border-t-bone/10 flex items-center justify-between">
                    <Link
                      href="/solutions"
                      className="text-xs uppercase tracking-[0.25em] text-bone/70 hover:text-blush link-underline"
                    >
                      View all solutions →
                    </Link>
                    <Link
                      href="/get-started"
                      className="text-xs uppercase tracking-[0.25em] text-hot hover:text-blush link-underline"
                    >
                      Book a strategy call →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {PRIMARY.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm uppercase tracking-[0.2em] hover:text-blush transition",
                  pathname === l.href ? "text-blush" : "text-bone/85"
                )}
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/get-started"
              className="ml-3 rounded-full bg-hot text-ink px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-blush transition"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-bone p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={cn(
                  "h-px bg-bone transition-transform",
                  open && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px bg-bone transition-opacity",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-px bg-bone transition-transform",
                  open && "-translate-y-[7px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink lg:hidden transition-all duration-500",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="pt-28 px-6 sm:px-10 h-full overflow-y-auto pb-12">
          {/* Pulse pinned at top, read the method vs hire us to install it */}
          <div className="mb-6 grid gap-3">
            <Link
              href={PULSE_METHODOLOGY.href}
              className="block p-4 rounded-xl border hairline border-bone/10 bg-bone/[0.03] hover:bg-bone/[0.06] transition"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-[10px] uppercase tracking-[0.25em] text-bone/50">
                  {PULSE_METHODOLOGY.kicker}
                </p>
                <span className="text-[9px] uppercase tracking-[0.2em] border border-bone/20 text-bone/60 px-1.5 py-0.5 rounded-sm font-bold">
                  Read
                </span>
              </div>
              <p className="font-display text-xl tracking-tighter text-bone">
                {PULSE_METHODOLOGY.label}
              </p>
              <p className="mt-1 text-xs text-bone/55 leading-snug">
                {PULSE_METHODOLOGY.desc}
              </p>
            </Link>
            <Link
              href={PULSE_FLAGSHIP.href}
              className="block p-4 rounded-xl border hairline border-blush/40 bg-blush/10 hover:bg-blush/15 transition"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-[10px] uppercase tracking-[0.25em] text-blush">
                  {PULSE_FLAGSHIP.kicker}
                </p>
                <span className="text-[9px] uppercase tracking-[0.2em] bg-hot text-ink px-1.5 py-0.5 rounded-sm font-bold">
                  Hire us
                </span>
              </div>
              <p className="font-display text-xl tracking-tighter text-bone">
                {PULSE_FLAGSHIP.label}
              </p>
              <p className="mt-1 text-xs text-bone/70 leading-snug">
                {PULSE_FLAGSHIP.desc}
              </p>
            </Link>
          </div>

          {PILLARS.map((p) => (
            <div key={p.title} className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-blush mb-3 font-bold">
                {p.title}
              </p>
              <ul className="grid gap-1">
                {p.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="flex items-center justify-between py-1.5 font-display text-lg tracking-tight text-bone/90 hover:text-blush"
                    >
                      <span>{it.label}</span>
                      {it.badge === "new" && (
                        <span className="text-[8px] uppercase tracking-[0.2em] bg-blush/20 text-blush px-1.5 py-0.5 rounded-sm font-bold">
                          New
                        </span>
                      )}
                      {it.badge === "featured" && (
                        <span className="text-[8px] uppercase tracking-[0.2em] bg-hot/20 text-hot px-1.5 py-0.5 rounded-sm font-bold">
                          Featured
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="divider-line my-6" />

          <ul className="grid gap-2">
            {PRIMARY.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2 font-display text-3xl tracking-tighter text-bone hover:text-blush"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/get-started"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-hot text-ink px-6 py-3.5 text-sm font-bold uppercase tracking-widest"
          >
            Get Started <span>→</span>
          </Link>
        </div>
      </div>
    </>
  );
}

function PulseLink({
  data,
  active,
  flagship,
}: {
  data: { href: string; kicker: string; label: string; desc: string };
  active: boolean;
  flagship?: boolean;
}) {
  return (
    <Link
      href={data.href}
      role="menuitem"
      className={cn(
        "group block p-4 rounded-xl border hairline transition",
        flagship
          ? "border-blush/40 bg-blush/10 hover:bg-blush hover:text-ink"
          : "border-bone/10 bg-bone/[0.02] hover:bg-bone/5 hover:border-bone/20",
        active && "ring-1 ring-blush"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p
          className={cn(
            "text-[10px] uppercase tracking-[0.25em]",
            flagship ? "text-blush group-hover:text-ink/70" : "text-bone/50"
          )}
        >
          {data.kicker}
        </p>
        <span
          className={cn(
            "shrink-0 text-[8px] uppercase tracking-[0.2em] px-1.5 py-0.5 rounded-sm font-bold",
            flagship
              ? "bg-hot text-ink"
              : "border border-bone/20 text-bone/55 group-hover:text-bone"
          )}
        >
          {flagship ? "Hire us" : "Read"}
        </span>
      </div>
      <p className="mt-1.5 font-display text-base lg:text-lg tracking-tighter leading-tight">
        {data.label}
      </p>
      <p
        className={cn(
          "mt-1.5 text-xs leading-snug",
          flagship ? "text-bone/70 group-hover:text-ink/80" : "text-bone/55"
        )}
      >
        {data.desc}
      </p>
    </Link>
  );
}
