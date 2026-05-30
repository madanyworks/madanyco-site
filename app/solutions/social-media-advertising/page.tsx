import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Link from "next/link";
import PricingCard, { PricingTier } from "@/components/PricingCard";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "Social Media Advertising",
  description:
    "Real success needs the right platforms, the right creative, and the right strategy behind every move. Paid social that builds awareness, drives traffic, and turns attention into real growth.",
};

const TIERS: PricingTier[] = [
  {
    name: "SPARK",
    price: "$1,500",
    cadence: "USD / mo",
    pitch: "Single campaign. One platform. Built to ignite.",
    features: [
      "Single Campaign (focused objective)",
      "1 Platform (Meta, TikTok, or Snapchat)",
      "Brand Awareness or Traffic Objective",
      "Client-Provided Creative Assets",
      "Ad Copywriting Included",
      "Campaign Monitoring & Performance Reporting",
      "Covers up to $1,500/mo ad spend",
    ],
    note: "+ $280 USD one-time setup fee",
  },
  {
    name: "LIFT",
    price: "$2,100",
    cadence: "USD / mo",
    featured: true,
    pitch: "Performance-focused, multi-platform, conversion-tuned.",
    features: [
      "Single Campaign (performance-focused)",
      "Up to 2 Platforms",
      "Lead Generation or Website Conversion",
      "Client-Provided Creative Assets",
      "Platform-Specific Placement Adaptations",
      "Ad Copywriting Included",
      "Campaign Monitoring & Performance Reporting",
    ],
    note: "+ $280 USD one-time setup fee",
  },
  {
    name: "LEAD",
    price: "$3,900",
    cadence: "USD / mo",
    pitch: "Strategic, multi-channel, bilingual, for brands ready to scale.",
    features: [
      "Strategic Campaign Planning",
      "Multiple Campaigns (awareness, traffic, conversions)",
      "Up to 3 Platforms",
      "Multiple Ad Copy Variations",
      "Bilingual Execution (Arabic & English)",
      "Daily Monitoring & Monthly Reporting",
      "Covers up to $5,000/mo ad spend",
    ],
    note: "+ $280 USD one-time setup fee",
  },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Social Media Advertising"
        title="Looking for ads that actually"
        accent="drive results?"
        hook="Getting seen online isn't as easy as hitting 'boost.' Real success needs the right platforms, the right creative, and the right strategy behind every move. We craft paid social that gets your brand in front of the right people, on the right platforms, at the right time."
      />

      <Marquee
        items={[
          "Build awareness",
          "Drive traffic",
          "Turn attention into growth",
          "Stop boosting, start targeting",
        ]}
        className="border-y hairline border-y-bone/10 py-6 sm:py-8"
        textClass="font-display text-3xl sm:text-5xl tracking-tightest"
        separator="✦"
      />

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            SMA Packages
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Three tiers.{" "}
            <span className="italic font-display-light text-blush">
              One philosophy.
            </span>
          </h2>
          <p className="mt-6 text-bone/70 max-w-xl text-lg">
            Every plan focuses on what matters: building awareness, driving
            traffic, and turning attention into measurable growth.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <PricingCard tier={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="lg:col-span-5 font-display text-big leading-[0.95] tracking-tighter">
              What you get, on every plan.
            </h2>
            <div className="lg:col-span-7 space-y-6 text-lg text-bone/80 leading-relaxed max-w-2xl">
              <p>
                We focus on what matters: building awareness, driving traffic,
                and turning attention into real growth. Every campaign is
                shaped by a clear objective, decision rules, and reporting you
                can actually read.
              </p>
              <p>
                You bring the creative assets and brand. We bring the targeting,
                creative testing framework, copy, and reporting cadence.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* How we do it, Pulse tie-in */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40 border-t hairline border-t-bone/10">
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
              Paid social is run end-to-end against your allowable CAC and MER
              guardrails. Decision rules are set before launch, creative is
              tested in iterations, and every report ends with an action,
              scale, hold, or kill. The channel answers to the plan, not to
              last week&apos;s ROAS.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Stop boosting. Start targeting."
        sub="Tell us the goal, the timeline, and where you've been spending. We'll come back with a campaign blueprint."
      />
    </>
  );
}
