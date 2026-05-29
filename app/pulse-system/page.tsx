import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "The Pulse System™ — Our methodology",
  description:
    "MadanyCo's operating layer for profitable growth: a financial plan + a marketing plan × a daily workflow. How we deliver every service we run.",
};

const PILLARS = [
  {
    n: "01",
    title: "Growth Plan",
    body: "Quarterly OKRs, allowable CAC, payback windows, MER guardrails. Your financial plan and marketing plan written together so they argue less and pay each other off.",
  },
  {
    n: "02",
    title: "Creative Engine",
    body: "Pillars → angles → hooks → iterations → winners. A production pipeline and the testing rules that pick the keepers.",
  },
  {
    n: "03",
    title: "Channels",
    body: "Meta, TikTok, Google, Snap, plus website CRO alignment. Decision rules set in advance, reporting that ends with an action.",
  },
  {
    n: "04",
    title: "Lifecycle",
    body: "Email & SMS flows, segmentation, win-back, retention. The 20–35% of DTC revenue most brands leave on the table.",
  },
  {
    n: "05",
    title: "Reporting",
    body: "A scorecard you can read in five minutes. CAC by cohort, MER, contribution-margin guardrails — and a decision queue, not a screenshot deck.",
  },
];

const CADENCE = [
  { n: "Daily", body: "Pulse check on spend, CAC, MER, and anything that broke a guardrail." },
  { n: "Weekly", body: "Decisions. Creative review, what's testing, what's killed, what's scaling." },
  { n: "Monthly", body: "P&L pass + pivot. Contribution margin by channel and product. One paragraph of commentary." },
  { n: "Quarterly", body: "Business review. Plan vs actual, next-quarter OKRs, allowable CAC reset." },
];

const WORKBOOK_MONTHS = [
  { month: "Month 1", title: "Discovery + Plan" },
  { month: "Month 2", title: "Install" },
  { month: "Month 3", title: "First Pivot" },
  { month: "Month 4", title: "Scale Decisions" },
  { month: "Month 5", title: "Compound" },
];

export default function PulseSystemMethodologyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70svh] flex items-end pt-28 pb-14 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative w-full">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              The methodology
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.82] tracking-tightest max-w-[14ch]">
              The{" "}
              <span className="italic font-display-light text-blush">
                Pulse System
              </span>
              ™
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/75 leading-snug">
              Our operating layer for profitable growth. The financial plan,
              the marketing plan, and the daily workflow that holds them
              together. This is how we deliver every service we run — and the
              reason MadanyCo doesn&apos;t read like another agency.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "Financial Plan",
          "+",
          "Marketing Plan",
          "×",
          "Daily Workflow",
          "=",
          "Profitable Growth",
        ]}
        className="border-y hairline border-y-bone/10 py-6 sm:py-8 bg-ink"
        textClass="font-display text-3xl sm:text-5xl tracking-tightest"
        separator="·"
      />

      {/* THE EQUATION */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            (01) The equation
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-tightest text-bone max-w-[18ch]">
            <span className="text-blush">(</span>Financial Plan{" "}
            <span className="text-blush">+</span> Marketing Plan
            <span className="text-blush">)</span>{" "}
            <span className="text-blush italic font-display-light">×</span>{" "}
            Daily Workflow
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-10 max-w-3xl text-lg sm:text-xl text-bone/75 leading-relaxed">
            Three things, multiplied. Most brands have one or two. Almost no
            one has all three — and because it&apos;s a multiplication, a zero
            in any term zeros the result. The Pulse System is how we make sure
            none of them are zero, week after week.
          </p>
        </Reveal>
      </section>

      <div className="divider-line" />

      {/* THE FIVE PILLARS */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            (02) The five pillars
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Five pillars.{" "}
            <span className="italic font-display-light text-blush">
              One operating layer.
            </span>
          </h2>
        </Reveal>

        <ol className="mt-14 grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <li className="group grid gap-6 lg:grid-cols-12 items-baseline border-t hairline border-t-bone/10 py-8 lg:py-10 hover:bg-ink-600/30 transition">
                <span className="lg:col-span-1 font-display text-blush text-sm tabular-nums">
                  {p.n}
                </span>
                <h3 className="lg:col-span-4 font-display text-2xl sm:text-3xl lg:text-4xl tracking-tightest leading-[0.95] group-hover:text-blush transition">
                  {p.title}
                </h3>
                <p className="lg:col-span-7 text-base sm:text-lg text-bone/80 leading-relaxed">
                  {p.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* CADENCE */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            (03) The cadence
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Daily checks. Weekly decisions.
            <br />
            <span className="italic font-display-light text-blush">
              Monthly pivots.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4 border hairline">
          {CADENCE.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.05} className="bg-ink">
              <div className="h-full p-7 lg:p-9 hover:bg-ink-600 transition">
                <p className="font-display text-blush text-sm uppercase tracking-[0.3em]">
                  {c.n}
                </p>
                <p className="mt-8 text-bone/80 leading-relaxed text-sm">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROVEN — workbook placeholders */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24 bg-ink-700/40 border-y hairline border-y-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            (04) Proven — the workbooks
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            The system,{" "}
            <span className="italic font-display-light text-blush">
              run for real
            </span>
            .
          </h2>
          <p className="mt-6 text-base sm:text-lg text-bone/75 max-w-2xl leading-relaxed">
            Redacted screenshots from a recent 5-month installation. Workbook
            screenshots coming soon — drop your file at the matching path under
            <code className="text-blush text-sm mx-1">/public/pulse/</code>
            to replace each placeholder.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WORKBOOK_MONTHS.map((m, i) => (
            <Reveal key={m.month} delay={i * 0.05}>
              <div className="aspect-[3/4] rounded-2xl border-2 border-dashed border-bone/15 bg-ink-600/40 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-blush mb-4">
                  {m.month}
                </p>
                <p className="font-display text-xl tracking-tighter text-bone">
                  {m.title}
                </p>
                <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-bone/40">
                  Workbook screenshot
                  <br />
                  to be added
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PULSE vs Flagship CTA */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            (05) Want it installed?
          </div>
          <div className="grid gap-6 lg:grid-cols-12 items-stretch">
            <Link
              href="/solutions/pulse-system"
              className="lg:col-span-7 group block relative rounded-3xl p-10 lg:p-14 border hairline border-blush/30 bg-gradient-to-br from-blush/10 via-ink-700/40 to-ink-700/40 hover:border-blush transition overflow-hidden"
            >
              <span className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] bg-hot text-ink px-3 py-1.5 rounded-sm font-bold">
                Flagship
              </span>
              <p className="text-xs uppercase tracking-[0.3em] text-blush mb-5">
                The full install
              </p>
              <h3 className="font-display text-big leading-[0.95] tracking-tightest max-w-[14ch]">
                The Pulse System™ Engagement
              </h3>
              <p className="mt-6 max-w-xl text-base sm:text-lg text-bone/80 leading-relaxed">
                Founder-led + embedded specialists + cadence + reporting. The
                full operating model installed, run, and refined with your
                team. From $15K USD / month.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-blush group-hover:text-bone transition">
                Read the engagement →
              </span>
            </Link>

            <Link
              href="/solutions/fractional-cmo"
              className="lg:col-span-5 group block rounded-3xl p-10 lg:p-12 border hairline border-bone/10 bg-ink-700/40 hover:border-blush/40 transition"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-blush mb-5">
                Or a CMO seat
              </p>
              <h3 className="font-display text-big leading-[0.95] tracking-tightest max-w-[12ch]">
                Fractional CMO
              </h3>
              <p className="mt-6 text-base text-bone/75 leading-relaxed">
                Senior marketing leadership without the full-time hire — the
                Pulse System framing, run from a CMO seat at a fraction of the
                cost.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-bone group-hover:text-blush transition">
                Read the offer →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
