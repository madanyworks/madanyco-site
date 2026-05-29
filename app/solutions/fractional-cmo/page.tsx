import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Fractional CMO",
  description:
    "Senior marketing leadership without the full-time hire. Strategy, team leadership, budget ownership and reporting — installed through The Pulse System™.",
};

const WHAT_YOU_GET = [
  "A clear growth strategy tied to your P&L, not vanity metrics",
  "Ownership of the marketing budget, channel mix, and forecasting",
  "Leadership of your in-house team and agency partners",
  "A weekly operating cadence: reviews, experiments, creative pipeline",
  "Board / investor-ready reporting with CAC, MER, and contribution-margin guardrails",
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Strategy & Leadership · Flagship Retainer"
        title="Your Fractional CMO."
        accent="Senior leadership, without the full-time hire."
        hook="Everything a full-time CMO handles — strategy, team leadership, budget ownership, forecasting, board-ready reporting — run by an operator who's owned multi-brand P&Ls and built ads enablement at scale. You get the seniority and the system, at a fraction of the cost and none of the hiring risk."
      />

      <div className="divider-line" />

      {/* What you get */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
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

      {/* How we do it */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 bg-ink-700/40 border-y hairline border-y-bone/10">
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
                Your financial plan and marketing plan, executed through a daily
                workflow. You don&apos;t get a deck that sits on a shelf — you
                get an operating system installed in your business.
              </p>
              <p>
                We sit with the P&amp;L, set the guardrails (allowable CAC, MER
                floor, contribution margin), and run the weekly cadence that
                turns reporting into decisions.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Proof */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
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
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 bg-ink-700/40 border-y hairline border-y-bone/10">
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
              marketing with revenue — without committing to a full-time
              executive.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Pricing */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Pricing
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            A fraction of a full-time CMO&apos;s salary —{" "}
            <span className="italic font-display-light text-blush">
              scoped to your needs
            </span>
            .
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-bone/75 leading-relaxed">
            Book a call. We&apos;ll assess your marketing, pinpoint
            what&apos;s missing, and map the plan. If we&apos;re not the right
            fit, we&apos;ll tell you and point you somewhere better.
          </p>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Book a strategy call."
        sub="20 minutes. We'll ask about your P&L, your team, and your timeline — and tell you honestly whether Fractional CMO is the right shape, or whether Pulse, a single discipline, or a different operator entirely would serve you better."
      />
    </>
  );
}
