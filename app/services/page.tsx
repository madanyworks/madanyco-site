import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Services",
  description:
    "Eight ways we partner with growing brands — social, paid acquisition, video, web, and fractional CMO leadership.",
};

const FLAGSHIP = {
  href: "/services/pulse-system",
  name: "The Pulse System™",
  blurb:
    "Our flagship engagement: the full operating-system install. Fractional CMO + embedded squad + the cadence that turns reporting into decisions. The financial plan, the marketing plan, and the daily workflow that holds them together.",
};

const SERVICES = [
  {
    href: "/services/social-media-management",
    name: "Social Media Management",
    blurb:
      "Smart content, community management that listens, and analytics that tell the truth.",
  },
  {
    href: "/services/social-media-advertising",
    name: "Social Media Advertising",
    blurb:
      "Stop boosting, start targeting. Paid social that builds awareness and converts.",
  },
  {
    href: "/services/video-production",
    name: "Video Production",
    blurb:
      "Strategic video content that captures attention — and converts. Native to your platforms.",
  },
  {
    href: "/services/tiktok-ads",
    name: "TikTok Ads",
    blurb:
      "Stop sleeping on TikTok. Campaigns that resonate, on the platform that's reshaping reach.",
  },
  {
    href: "/services/coaching-training",
    name: "Coaching & Training",
    blurb:
      "Fractional CMO and team training. Stop chasing tactics. Start building traction.",
  },
  {
    href: "/services/shopify-ecommerce",
    name: "Shopify e-Commerce",
    blurb:
      "Built to sell. Designed to scale. Shopify storefronts that turn product into income.",
  },
  {
    href: "/services/website-development",
    name: "Website Development",
    blurb:
      "Digital storefronts that earn trust, capture attention, and drive results.",
  },
  {
    href: "/services/google-ads",
    name: "Google Ads",
    blurb:
      "If you don't show up when people search, you don't exist. Campaigns built by specialists.",
  },
];

export default function ServicesIndex() {
  return (
    <>
      <section className="relative min-h-[55svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Services
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[15ch]">
              Eight ways we{" "}
              <span className="italic font-display-light text-blush">
                partner
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              Pick a discipline, or pick all of them. Most engagements start
              with a Pulse audit and grow from there.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider-line" />

      {/* FLAGSHIP */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <Link
            href={FLAGSHIP.href}
            className="group block relative rounded-3xl border hairline border-blush/30 bg-gradient-to-br from-blush/10 via-ink-700/40 to-ink-700/40 p-10 sm:p-14 lg:p-16 hover:border-blush transition duration-500 overflow-hidden"
          >
            <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] bg-hot text-ink px-3 py-1.5 rounded-sm font-bold">
              Flagship
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">
              The main thing
            </p>
            <h2 className="font-display text-huge sm:text-mega leading-[0.88] tracking-tightest max-w-[14ch]">
              {FLAGSHIP.name}
            </h2>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-bone/80 leading-relaxed">
              {FLAGSHIP.blurb}
            </p>
            <span className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-blush group-hover:text-bone transition">
              Read the engagement{" "}
              <span className="group-hover:translate-x-1 transition">→</span>
            </span>
          </Link>
        </Reveal>
      </section>

      {/* Sub-services */}
      <section className="px-6 sm:px-10 lg:px-14 pb-20 sm:pb-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            Or pick a single discipline
          </div>
        </Reveal>
        <ul className="grid gap-px bg-bone/10 sm:grid-cols-2 border hairline">
          {SERVICES.map((s, i) => (
            <Reveal key={s.href} delay={i * 0.04} className="bg-ink">
              <li>
                <Link
                  href={s.href}
                  className="group block h-full p-8 sm:p-10 lg:p-12 hover:bg-blush hover:text-ink transition duration-500"
                >
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] opacity-70">
                    <span>0{i + 1}</span>
                    <span className="font-display">↗</span>
                  </div>
                  <h3 className="mt-10 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tightest leading-[0.95]">
                    {s.name}
                  </h3>
                  <p className="mt-6 max-w-md leading-relaxed opacity-80">
                    {s.blurb}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
