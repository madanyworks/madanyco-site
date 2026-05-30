import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import PricingCard, { PricingTier } from "@/components/PricingCard";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Fractional CMO & Coaching",
  description:
    "Senior marketing leadership, plus the coaching to build it in-house. Strategy, budget ownership, and a weekly operating cadence, installed through The Pulse System™.",
};

const COACHING_BENEFITS = [
  "We help you define your audience with precision, not guesswork.",
  "We help you build a strategy that aligns with your strengths and your market.",
  "We guide you through the tools and systems that scale, not overwhelm.",
  "We help you ship work that resonates and drives results.",
];

const WHAT_YOU_GET = [
  "A clear growth strategy tied to your P&L, not vanity metrics",
  "Ownership of the marketing budget, channel mix, and forecasting",
  "Leadership of your in-house team and agency partners",
  "A weekly operating cadence: reviews, experiments, creative pipeline",
  "Board / investor-ready reporting with CAC, MER, and contribution-margin guardrails",
];

const NEED_COACHING_IF = [
  {
    n: "01",
    headline: "You're committing random acts of marketing",
    body: "Let's call it what it is: shiny object syndrome. A trending tactic here. A viral sound there. You're doing stuff, but not moving forward. The problem? No strategy. No system. No compass pointing to ROI. At MadanyCo we don't chase trends, we build intentional marketing systems. We zoom out, see the whole board, and align every action to your real goals.",
    closer: "Let's build you a marketing roadmap that actually leads somewhere.",
  },
  {
    n: "02",
    headline: "You're running the business AND the marketing",
    body: "Let's be honest, it's too much. Great marketing doesn't happen in a one-off campaign or flashy launch. It's a long game built on clarity, repetition, and momentum. Momentum needs consistency. Consistency needs time. Time you don't have. That's where we come in. We don't just run your ads, we build internal marketing muscles, so your team can think, move, and create like pros.",
    closer:
      "Marketing systems that scale. Teams that ship new ideas to the world. Brands that grow.",
  },
  {
    n: "03",
    headline: "Your business isn't growing",
    body: "You've taken it far, on grit, instinct, and sleepless nights. But now? Growth has slowed. Momentum feels scattered. You don't need another course. You need a partner: someone who sees your blind spots, holds you accountable, and builds real systems around your marketing. No fluff. No endless retainers. Just measurable growth, month after month.",
    closer: "Let's get your business unstuck, and growing again.",
  },
  {
    n: "04",
    headline: "Your business has blind spots",
    body: "You're in it every day, so close to the work it's hard to zoom out. Pricing, positioning, people: every piece matters. But which lever should you pull first? When was the last time you rethought your business model? Are you charging what you're worth? That's where a marketing coach steps in, surfacing what's missing, what's underutilized, and what's ready to scale.",
    closer: "Clarity isn't a luxury. It's a growth multiplier.",
  },
  {
    n: "05",
    headline: "You need freedom, not just revenue",
    body: "If stepping away from your business for eight weeks sounds impossible… if your family gets your leftovers… if sleep is a luxury, not a habit… then let's be honest: growth isn't what you need right now. You need a marketing coach. Someone to bring structure to your strategy, margin to your time, and clarity to your chaos.",
    closer: "Building a brand shouldn't cost you your life.",
  },
];

const TIERS: PricingTier[] = [
  {
    name: "COACHING",
    price: "From $2,500",
    cadence: "USD / mo",
    pitch: "For founders who want to build the marketing muscle in-house.",
    features: [
      "Fortnightly coaching with a senior operator",
      "The Growth Plan installed: OKRs, allowable CAC, guardrails",
      "Your team trained to run the weekly cadence",
      "Async support between sessions",
      "You keep the system when the engagement ends",
    ],
  },
  {
    name: "FRACTIONAL CMO",
    price: "From $6,000",
    cadence: "USD / mo",
    featured: true,
    pitch: "For brands that want senior leadership in the seat.",
    features: [
      "A CMO owning strategy, budget, and forecasting",
      "Leadership of your team and agency partners",
      "The full weekly operating cadence, run for you",
      "Board and investor-ready reporting",
      "Channel and creative direction across the mix",
    ],
  },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Strategy & Leadership · Fractional CMO & Coaching"
        title="Stop chasing tactics."
        accent="Start building traction."
        hook="You're not just running a business, you're shaping a brand. But if you're stuck inside the chaos, juggling posts, tweaking campaigns, second-guessing every move, you're not building. You're reacting. That's where a fractional CMO who has sat in the seat steps in: to lead the marketing, or to coach you and your team to run it yourselves."
        bgImage={IMAGES.coachingHero}
      />

      <div className="divider-line" />

      {/* Intro */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-big leading-[0.95] tracking-tighter">
              You&apos;re probably thinking:{" "}
              <span className="italic font-display-light text-blush">
                I&apos;ve got this.
              </span>
            </h2>
            <div className="mt-8 space-y-6 text-lg text-bone/80 leading-relaxed max-w-2xl">
              <p>
                And maybe you can. But should you? You&apos;re already wearing
                the founder hat, the operator hat, the everything-else hat.
                That&apos;s real. What&apos;s also real is the cost of doing it
                all alone: guessing your strategy, testing in circles, hoping
                something sticks.
              </p>
              <p className="text-bone">
                It&apos;s time to work on your business, not in it. Let&apos;s
                build the kind of brand people remember.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">
              What this seat gives you
            </p>
            <ul className="grid gap-4">
              {COACHING_BENEFITS.map((b, i) => (
                <li
                  key={b}
                  className="flex items-baseline gap-5 border-t hairline border-t-bone/10 pt-4"
                >
                  <span className="font-display text-blush/70 text-sm tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="font-display text-lg sm:text-xl tracking-tight leading-snug text-bone">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "Clarity over noise",
          "Systems over hustle",
          "Decisions over reactions",
          "Compounding over campaigns",
        ]}
        className="border-y hairline border-y-bone/10 py-6 sm:py-8 bg-ink-700/40"
        textClass="font-display text-3xl sm:text-5xl tracking-tightest"
        separator="✦"
      />

      {/* What you get, the CMO seat */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            What you get
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            A CMO seat,{" "}
            <span className="italic font-display-light text-blush">
              installed
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

      {/* You need this if... (preserved coaching content) */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40 border-y hairline border-y-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            You need this seat if…
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Five signs it&apos;s time.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-1 border hairline">
          {NEED_COACHING_IF.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} className="bg-ink">
              <div className="grid gap-8 lg:grid-cols-12 p-8 sm:p-10 lg:p-14 group hover:bg-ink-600 transition">
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <span className="font-display text-blush text-sm tabular-nums">
                    {s.n}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tightest leading-[0.95] text-bone group-hover:text-blush transition">
                    {s.headline}
                  </h3>
                </div>
                <div className="lg:col-span-8 space-y-5 text-bone/80 leading-relaxed max-w-2xl">
                  <p>{s.body}</p>
                  <p className="font-display text-lg sm:text-xl tracking-tight text-blush">
                    {s.closer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How we do it */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                How we do it
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                Every engagement runs on{" "}
                <Link
                  href="/pulse-system"
                  className="italic font-display-light text-blush link-underline"
                >
                  The Pulse System™
                </Link>
                .
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg text-bone/80 leading-relaxed max-w-2xl">
              <p>
                Whether we lead the marketing or coach your team to lead it, the
                method is the same. We install the Growth Plan: quarterly
                objectives, allowable CAC, and the guardrails that keep spend
                honest. Then we run the weekly cadence that turns reporting into
                decisions.
              </p>
              <p>
                Coaching isn&apos;t a course you finish and forget. You keep the
                system long after the engagement ends, because the job is mapped
                to outputs, not to one person in a seat.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Proof */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40 border-y hairline border-y-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Proof
          </div>
          <p className="font-display text-big leading-[0.95] tracking-tighter max-w-4xl">
            Group-level marketing leadership across a 3-brand DTC portfolio:{" "}
            <span className="italic font-display-light text-blush">
              EBITDA swung from heavy negative to near-break-even in twelve
              months
            </span>
            , revenue more than doubled, MER lifted from a low-2× into a
            mid-3× range.
          </p>
          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-bone/70 link-underline"
          >
            See the case studies →
          </Link>
        </Reveal>
      </section>

      {/* Who it's for */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                Who it&apos;s for
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                DTC, e-commerce, and consumer brands.
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
              Scaling fast, lacking strategic direction, or needing to align
              marketing with revenue, without committing to a full-time
              executive.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40 border-y hairline border-y-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Two ways in
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Coach the team, or take{" "}
            <span className="italic font-display-light text-blush">
              the seat
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 max-w-4xl">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <PricingCard tier={t} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-bone/70 leading-relaxed">
            Want the whole operating model installed and run for you, not just
            led from a CMO seat? That&apos;s{" "}
            <Link
              href="/solutions/pulse-system"
              className="text-blush link-underline"
            >
              The Pulse System™ Engagement
            </Link>
            , our flagship, from $15K per month.
          </p>
        </Reveal>
      </section>

      {/* Closing */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            This isn&apos;t about doing more.
            <br />
            <span className="italic font-display-light text-blush">
              It&apos;s about doing what matters.
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-bone/75 max-w-2xl leading-relaxed">
            Most clients stay with us for a year or more. Not because they have
            to, but because the ROI is clear, every single month.
          </p>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Ready to step out of the noise?"
        sub="Apply for a discovery call. We'll ask about your P&L, your team, and your timeline, then tell you honestly whether coaching, a fractional CMO seat, or the full Pulse install is the right shape for you."
      />
    </>
  );
}
