import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import PricingCard, { PricingTier } from "@/components/PricingCard";

export const metadata = {
  title: "Content Creation",
  description:
    "Content built to test, win, and scale. A creative engine, pillars → angles → hooks → iterations → winners, measured against revenue, not vanity.",
};

const WHAT_YOU_GET = [
  "A creative system: briefs, a hooks library, weekly iteration, fatigue controls",
  "UGC and short-form video production",
  "Paid-ready creative across Meta, TikTok, Snapchat",
  "Organic social content on a consistent calendar",
  "Performance feedback loops so winners scale and losers die fast",
];

const TIERS: PricingTier[] = [
  {
    name: "STARTER",
    price: "$1,200",
    cadence: "USD / mo",
    pitch: "A steady creative output to keep testing alive.",
    features: [
      "Up to 12 creatives per month",
      "Hooks library and angle planning",
      "Static, motion, and short-form mix",
      "Monthly performance read",
    ],
  },
  {
    name: "ENGINE",
    price: "$2,400",
    cadence: "USD / mo",
    featured: true,
    pitch: "The full creative engine on a weekly cadence.",
    features: [
      "Up to 30 creatives per month",
      "Weekly iteration on the winners",
      "UGC and short-form video production",
      "Paid-ready across Meta, TikTok, Snap",
      "Fatigue controls and reporting",
    ],
  },
  {
    name: "SCALE",
    price: "From $3,800",
    cadence: "USD / mo",
    pitch: "High volume plus shoots for brands scaling spend.",
    features: [
      "High-volume creative output",
      "Monthly content shoot included",
      "Dedicated creative strategist",
      "Concept-to-winner pipeline",
      "Cross-channel asset system",
    ],
  },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Content & Social"
        title="Built to test, win,"
        accent="and scale."
        hook="Most content is made to be posted. Ours is made to perform. We run a creative engine, pillars and angles → hooks → iterations → winners, so you're not guessing what works. UGC, short-form video, and paid-ready creative, produced on a cadence and measured against revenue."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            What you get
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            A creative engine,{" "}
            <span className="italic font-display-light text-blush">
              not a content order desk
            </span>
            .
          </h2>
        </Reveal>

        <ul className="mt-14 grid">
          {WHAT_YOU_GET.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <li className="group grid gap-6 lg:grid-cols-12 items-baseline border-t hairline border-t-bone/10 py-7 lg:py-9 hover:bg-ink-700/30 transition">
                <span className="lg:col-span-1 font-display text-blush text-sm tabular-nums">
                  0{i + 1}
                </span>
                <p className="lg:col-span-11 font-display text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-snug text-bone group-hover:text-blush transition">
                  {item}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Packages */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Packages
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Creative on a{" "}
            <span className="italic font-display-light text-blush">
              cadence
            </span>
            .
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

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 bg-ink-700/40 border-y hairline border-y-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                How we do it
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                The Creative Engine pillar of{" "}
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
              Creative treated as a testable, compounding asset, not a one-off
              deliverable. Winners scale, losers die fast, the library grows
              every week.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Proof
          </div>
          <p className="font-display text-big leading-[0.95] tracking-tighter max-w-4xl">
            Built creative-testing systems and content engines across a 3-brand
            DTC portfolio, plus{" "}
            <span className="italic font-display-light text-blush">
              high-production shoots across the UK, Dubai, Miami, and Slovenia
            </span>
            .
          </p>
        </Reveal>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 bg-ink-700/40 border-y hairline border-y-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                Who it&apos;s for
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                Brands whose creative has plateaued.
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
              DTC and e-commerce brands whose creative has plateaued or whose
              content has no measurable link to sales.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Build the engine."
        sub="Book a call for an ongoing creative engine, or scope a one-off shoot. Either way we start with the brief, not the kit."
      />
    </>
  );
}
