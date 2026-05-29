import Link from "next/link";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "The Pulse System™ — Flagship engagement",
  description:
    "Our full operating-system install for ambitious DTC and e-commerce brands. Fractional CMO + embedded squad + the cadence that turns reporting into decisions.",
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
    body: "Pillars → angles → hooks → iterations → winners. A production pipeline that ships 40–80 performance-ready assets per month and the testing rules that pick the keepers.",
  },
  {
    n: "03",
    title: "Channels",
    body: "Meta, TikTok, Google, Snap. Fully managed end-to-end — bidding, structure, creative rotations, audience strategy, attribution. Plus website CRO alignment.",
  },
  {
    n: "04",
    title: "Lifecycle",
    body: "Klaviyo / SMS flows, campaign calendars, segmentation, win-back, retention. The 20–35% of DTC revenue most brands leave on the table.",
  },
  {
    n: "05",
    title: "Reporting",
    body: "A scorecard you can read in 5 minutes. CAC by cohort, MER, contribution-margin guardrails, pacing rules — and a decision queue, not a screenshot deck.",
  },
];

const TEAM_ON_IT = [
  {
    role: "Founder & Principal",
    name: "Abdalrahman Madany",
    body: "Leads the engagement. Weekly strategy call, monthly business review, on Slack for the heavy decisions. The signature on the plan.",
  },
  {
    role: "Performance Lead",
    name: "Embedded specialist",
    body: "Lives in the ad accounts daily. Bidding, creative rotation, pacing checks, attribution sanity checks. Reports up to the founder, ships to your team.",
  },
  {
    role: "Creative Lead",
    name: "Embedded specialist",
    body: "Runs the content + video pipeline. Briefs, shoots, edits, posts. Owns the relationship with your creators and the integrity of the brand on every asset.",
  },
  {
    role: "Lifecycle & CRM",
    name: "Embedded specialist",
    body: "Klaviyo + SMS + retention. Flow architecture, segmentation, campaign calendar, win-back. The compounding revenue line most brands skip.",
  },
  {
    role: "Data & Analytics",
    name: "Embedded specialist",
    body: "Owns the scorecard math. Attribution sanity, MER, CAC by cohort, payback windows. Translates platform numbers into business decisions every Monday morning.",
  },
  {
    role: "Your team",
    name: "On the inside",
    body: "We don't replace your team — we operate alongside them. Same Slack, same plan, same scorecard. Knowledge transfers continuously so you build muscle, not dependency.",
  },
];

const CADENCE = [
  {
    n: "Daily",
    title: "Pulse check",
    body: "Spend, CAC, MER, anything that broke a guardrail. Five minutes. Posted to Slack.",
  },
  {
    n: "Weekly",
    title: "Decisions",
    body: "Creative review · what's testing · what's launching · what's killed · what we're pacing into next.",
  },
  {
    n: "Monthly",
    title: "P&L pass + pivot",
    body: "Contribution margin by channel and product. One paragraph of commentary. What we're changing.",
  },
  {
    n: "Quarterly",
    title: "Business review",
    body: "Plan vs actual. Next-quarter OKRs. Allowable CAC reset. Budget reallocation. Strategy room.",
  },
];

const TIMELINE = [
  {
    n: "Weeks 1–2",
    title: "Discovery",
    body: "Financial audit, channel audit, creative audit, team interviews. We sit with your P&L and your last 90 days of data.",
  },
  {
    n: "Weeks 3–4",
    title: "Install",
    body: "Plan written and signed off. Reporting built. Accounts restructured. Team onboarded to Slack + workflow. Calendar locked.",
  },
  {
    n: "Month 2+",
    title: "Operate",
    body: "Cadence runs. Decisions ship. Reporting compounds. We meet weekly, you ship daily, the numbers move quarterly.",
  },
];

const FOR_YOU_IF = [
  "You're doing $3M+ in revenue and want to scale without losing margin",
  "You have an internal team but no operating system around them",
  "You've outgrown agency retainers but aren't ready for a full in-house CMO",
  "You want clarity on the financial side of growth — not just the creative side",
];

const NOT_FOR_YOU_IF = [
  "You want hourly help or project-based work",
  "You need a set-and-forget agency to take it off your plate",
  "You're not ready to share the P&L or look hard at your unit economics",
  "You expect ROAS to be the only conversation",
];

export default function PulseSystemPage() {
  return (
    <>
      {/* ═════════════════════════════════════════ HERO */}
      <section className="relative min-h-[60svh] flex items-end pt-28 pb-14 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative w-full">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
              <span className="h-px w-12 bg-blush" />
              <span className="bg-blush text-ink px-2 py-0.5 rounded-sm font-bold">
                Flagship
              </span>
              <span>Pulse System™ Engagement</span>
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
              Our full operating-system install. The fractional-CMO seat, the
              embedded squad, the financial plan, the marketing plan, and the
              weekly cadence that holds it all together. Not a retainer — an
              operating model.
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

      {/* ═════════════════════════════════════════ THE EQUATION */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
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
          <p className="mt-12 max-w-3xl text-lg sm:text-xl text-bone/75 leading-relaxed">
            Three things, multiplied. Most brands have one or two. Almost no
            one has all three — and because it&apos;s a multiplication, a zero
            in any term zeros the result. The Pulse System is how we make sure
            none of them are zero, week after week.
          </p>
        </Reveal>
      </section>

      <div className="divider-line" />

      {/* ═════════════════════════════════════════ PILLARS */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            (02) What gets installed
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Five pillars.{" "}
            <span className="italic font-display-light text-blush">
              One operating layer.
            </span>
          </h2>
        </Reveal>

        <ol className="mt-16 grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <li className="group grid gap-6 lg:grid-cols-12 items-baseline border-t hairline border-t-bone/10 py-9 lg:py-12 hover:bg-ink-600/30 transition">
                <span className="lg:col-span-1 font-display text-blush text-sm tabular-nums">
                  {p.n}
                </span>
                <h3 className="lg:col-span-4 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tightest leading-[0.95] group-hover:text-blush transition">
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

      {/* ═════════════════════════════════════════ WHO'S ON IT */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            (03) Who&apos;s on the engagement
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            A founder-led{" "}
            <span className="italic font-display-light text-blush">squad</span>
            , operating with yours.
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-bone/75 leading-relaxed">
            The founder leads every Pulse engagement. Specialists fill the
            seats around him. Your team sits in the same Slack — knowledge
            transfers continuously, so you finish the engagement stronger than
            you started it.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-3 border hairline">
          {TEAM_ON_IT.map((t, i) => (
            <Reveal key={t.role} delay={(i % 3) * 0.05} className="bg-ink">
              <div className="h-full p-7 sm:p-8 hover:bg-ink-600 transition">
                <p className="text-[10px] uppercase tracking-[0.3em] text-blush mb-6">
                  {t.role}
                </p>
                <h3 className="font-display text-2xl tracking-tighter leading-tight">
                  {t.name}
                </h3>
                <p className="mt-5 text-sm text-bone/75 leading-relaxed">
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════ CADENCE */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            (04) The cadence
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Daily checks. Weekly decisions.
            <br />
            <span className="italic font-display-light text-blush">
              Monthly pivots.
            </span>{" "}
            Quarterly resets.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4 border hairline">
          {CADENCE.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.06} className="bg-ink">
              <div className="h-full p-8 lg:p-10 hover:bg-ink-600 transition">
                <p className="font-display text-blush text-sm uppercase tracking-[0.3em]">
                  {c.n}
                </p>
                <h3 className="mt-8 font-display text-2xl sm:text-3xl tracking-tighter leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-bone/75 leading-relaxed text-sm">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════ TIMELINE */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            (05) Engagement timeline
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            From audit to operating, in a month.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.08}>
              <li className="h-full p-8 lg:p-10 rounded-2xl border hairline border-bone/10 bg-ink-600/40 hover:bg-blush hover:text-ink transition duration-500 group">
                <p className="font-display text-blush text-sm uppercase tracking-[0.3em] group-hover:text-ink/70">
                  {t.n}
                </p>
                <h3 className="mt-8 font-display text-3xl tracking-tighter">
                  {t.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed opacity-80">
                  {t.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.3}>
          <p className="mt-12 text-sm uppercase tracking-[0.25em] text-bone/60">
            Minimum 6-month engagement — that&apos;s when the compounding
            shows up in the P&amp;L.
          </p>
        </Reveal>
      </section>

      {/* ═════════════════════════════════════════ PRICING */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            (06) Investment
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          <Reveal className="lg:col-span-7" delay={0.1}>
            <article className="rounded-3xl p-10 sm:p-12 lg:p-14 border hairline border-bone/10 bg-ink">
              <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">
                The Pulse System™ · Flagship engagement
              </p>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-tightest text-bone whitespace-nowrap">
                  From $15K
                </span>
                <span className="text-bone/60 text-base sm:text-lg">
                  USD / month
                </span>
              </div>
              <p className="mt-6 text-base text-bone/70 max-w-xl leading-relaxed">
                Scoped per brand based on revenue stage, channel mix, and team
                size. Setup fee covers the discovery + install phase (weeks
                1–4).
              </p>

              <ul className="mt-10 grid gap-3.5 text-sm">
                {[
                  "Founder-led strategy + monthly business reviews",
                  "Embedded Performance, Creative, and Lifecycle specialists",
                  "Full daily / weekly / monthly / quarterly cadence",
                  "Financial plan + marketing plan + reporting scorecard",
                  "Shared Slack, shared calendar, shared scorecard",
                  "Knowledge transfer to your in-house team continuously",
                ].map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-blush" />
                    <span className="text-bone/85">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-hot text-ink px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blush transition"
              >
                Apply for an engagement
                <span aria-hidden>→</span>
              </Link>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5 space-y-10" delay={0.2}>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blush mb-5">
                For you if
              </p>
              <ul className="grid gap-3">
                {FOR_YOU_IF.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 text-sm sm:text-base text-bone/80 leading-relaxed"
                  >
                    <span className="shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-blush" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-bone/40 mb-5">
                Not for you if
              </p>
              <ul className="grid gap-3">
                {NOT_FOR_YOU_IF.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 text-sm sm:text-base text-bone/55 leading-relaxed"
                  >
                    <span className="shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-bone/30" />
                    <span className="line-through decoration-bone/30">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs uppercase tracking-[0.25em] text-bone/50 pt-4 border-t hairline border-t-bone/10">
              Looking for a single discipline?{" "}
              <Link
                href="/services"
                className="text-blush link-underline normal-case tracking-wide text-sm"
              >
                See sub-services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceCTA
        headline="Ready to install the system?"
        sub="20-minute scoping call. We'll ask about your P&L, your team, and your timeline — and tell you honestly whether Pulse is the right fit, or whether a single discipline would serve you better."
      />
    </>
  );
}
