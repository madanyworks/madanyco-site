"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const SERVICES = [
  { href: "/services/social-media-management", label: "Social Media Management" },
  { href: "/services/social-media-advertising", label: "Social Media Advertising" },
  { href: "/services/video-production", label: "Video Production" },
  { href: "/services/tiktok-ads", label: "TikTok Ads" },
  { href: "/services/coaching-training", label: "Coaching & Training" },
  { href: "/services/shopify-ecommerce", label: "Shopify e-Commerce" },
  { href: "/services/website-development", label: "Website Development" },
  { href: "/services/google-ads", label: "Google Ads" },
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
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
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
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="text-sm uppercase tracking-[0.2em] text-bone/85 hover:text-blush flex items-center gap-1.5"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <span
                  className={cn(
                    "transition-transform",
                    servicesOpen && "rotate-180"
                  )}
                >
                  ↓
                </span>
              </button>
              {servicesOpen && (
                <div
                  role="menu"
                  className="absolute top-full right-0 mt-3 min-w-[300px] rounded-2xl border hairline border-bone/10 bg-ink-700/95 backdrop-blur-md p-3 shadow-xl"
                >
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      role="menuitem"
                      className={cn(
                        "block px-4 py-2.5 rounded-lg text-sm text-bone/80 hover:bg-blush hover:text-ink transition",
                        pathname === s.href && "bg-bone/5 text-bone"
                      )}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
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
              className="ml-3 rounded-full bg-bone text-ink px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-blush transition"
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
          <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">
            Services
          </p>
          <ul className="grid gap-1 mb-10">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="block py-2 font-display text-2xl tracking-tight text-bone/90 hover:text-blush"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>

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
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-bone text-ink px-6 py-3.5 text-sm font-semibold uppercase tracking-widest"
          >
            Get Started <span>→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
