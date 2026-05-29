import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Link from "next/link";
import PricingCard, { PricingTier } from "@/components/PricingCard";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "TikTok Ads",
  description:
    "Stop sleeping on TikTok. 1.6B users worldwide. We craft campaigns that resonate — and deliver.",
};

const TIERS: PricingTier[] = [
  {
    name: "SPARK",
    price: "$900",
    cadence: "USD / mo",
    pitch: "For brands dipping their toes into TikTok Ads.",
    features: [
      "Up to 3 creatives per month",
      "Campaigns focused on awareness & consideration",
      "Minimum ad spend: $25/day",
      "Campaign setup, copy & monitoring",
    ],
  },
  {
    name: "LIFT",
    price: "$1,600",
    cadence: "USD / mo",
    featured: true,
    pitch: "For brands ready to scale with TikTok Ads.",
    features: [
      "Up to 10 creatives per month",
      "Full-funnel optimization",
      "Minimum ad spend: $25/day",
      "Weekly creative iteration",
      "Performance reporting & insights",
    ],
  },
  {
    name: "LEAD",
    price: "From $2,800",
    cadence: "USD / mo",
    pitch: "For brands serious about standing out — and scaling fast.",
    features: [
      "1 × 2-hour custom shoot included",
      "Daily monitoring & monthly reporting",
      "Minimum ad spend: $25/day",
      "Concept development + scripting",
      "Bilingual execution available",
    ],
  },
];

const STATS = [
  { n: "1.6B", l: "TikTok users worldwide (2025)" },
  { n: "95M", l: "MENA active users" },
  { n: "52min", l: "Average daily time spent" },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="TikTok Ads"
        title="Stop sleeping on"
        accent="TikTok."
        hook="If you're still not advertising on TikTok, you're missing the wave. TikTok isn't a trend — it's a global phenomenon. While most brands stay glued to Meta, TikTok offers a unique opportunity to engage with a vast and active user base. We've been at the forefront — crafting campaigns that resonate, and deliver."
        bgImage={IMAGES.tiktok1}
      />

      <section className="px-6 sm:px-10 lg:px-14 py-20">
        <Reveal>
          <div className="grid gap-8 sm:grid-cols-3 border-y hairline border-y-bone/10 py-12">
            {STATS.map((s) => (
              <div key={s.n}>
                <p className="font-display text-6xl sm:text-7xl tracking-tightest text-blush leading-none">
                  {s.n}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-bone/60">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Packages
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Ride the{" "}
            <span className="italic font-display-light text-blush">wave</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <PricingCard tier={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we do it — Pulse tie-in */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                How we do it
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                The Channels pillar of{" "}
                <Link
                  href="/pulse-system"
                  className="italic font-display-light text-blush link-underline"
                >
                  The Pulse System™
                </Link>
                .
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg text-bone/80 leading-relaxed max-w-2xl">
              TikTok is held to the same standard as every other channel:
              decision rules in advance, creative tested in iterations, and
              reporting that ends with a decision. We treat the platform&apos;s
              native grammar as a creative input — not an excuse to drop the
              guardrails — so spend stays tied to allowable CAC and MER.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="The wave is moving. Catch it."
        sub="20-minute call. We'll tell you whether TikTok is right for your category, and what spend it takes to actually see results."
      />
    </>
  );
}
