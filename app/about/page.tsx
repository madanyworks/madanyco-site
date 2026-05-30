import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "About",
  description:
    "MadanyCo is a founder-led, full-service growth agency for DTC and e-commerce brands. Strategy, performance, content, build, and talent, installed through The Pulse System™.",
};

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "We lead with unit economics",
    body: "We start with contribution margin, allowable CAC, MER, and payback windows. ROAS is a diagnostic. Profitability is the goal.",
  },
  {
    n: "02",
    title: "We operate with a cadence",
    body: "Daily checks. Weekly decisions. Monthly pivots. You will always know what is working, what is not, what we are changing, and why.",
  },
  {
    n: "03",
    title: "You get the system, not a black box",
    body: "Scorecards, marketing & financial plans, pacing rules, and reporting formats you can own.",
  },
];

const PRINCIPLES = [
  "Clarity beats complexity.",
  "Cash flow is a KPI.",
  "Guardrails create freedom.",
  "Pacing protects profit.",
  "Reporting should lead to action.",
  "Consistency compounds.",
];

const PULSE = [
  {
    letter: "P",
    title: "Perspective",
    body: "Great marketing earns attention with clarity, taste, and a point of view.",
  },
  {
    letter: "U",
    title: "Unit Economics",
    body: "We build from unit economics. Every campaign has a target, a decision rule, and a next action.",
  },
  {
    letter: "L+S",
    title: "Loops & Systems",
    body: "The Pulse System keeps teams aligned to a weekly cadence.",
  },
  {
    letter: "E",
    title: "Ethics",
    body: "Marketing should create momentum that compounds.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14 overflow-hidden">
        <Image
          src={IMAGES.aboutHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            About MadanyCo.™
          </div>
          <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[18ch]">
            Built for profitable{" "}
            <span className="italic font-display-light text-blush">growth</span>
            , not louder marketing.
          </h1>
        </div>
      </section>

      <div className="divider-line" />

      {/* WHO / WHY */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 grid gap-20 lg:gap-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="lg:col-span-4 font-display text-big leading-[0.95] tracking-tighter">
              Who are we?
            </h2>
            <p className="lg:col-span-8 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-3xl">
              MadanyCo is a founder-led growth agency for DTC and e-commerce
              brands. We run the full stack, strategy, performance, content,
              build, and talent, and install{" "}
              <Link href="/pulse-system" className="text-blush link-underline">
                The Pulse System™
              </Link>
              : a financial plan, a marketing plan, and the daily workflow that
              holds them together. We don&apos;t chase vanity metrics. We steer
              from unit economics, protect margin and cash flow, and make growth
              repeatable.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="lg:col-span-4 font-display text-big leading-[0.95] tracking-tighter">
              Why we exist?
            </h2>
            <p className="lg:col-span-8 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-3xl">
              Most brands do not fail because they lack ideas. They stall
              because the operating system is missing. Budgets move without
              guardrails. Reporting gets shared but nothing changes. Teams
              react to platform noise instead of controlling the levers that
              drive business profit. MadanyCo exists to fix this. We turn your
              numbers into a system: clear targets, clear pacing, clear
              accountability. Then we run it with you.
            </p>
          </div>
        </Reveal>
      </section>

      {/* THE FOUNDER */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Founder-led
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 className="lg:col-span-5 font-display text-big leading-[0.95] tracking-tighter">
              One operator,{" "}
              <span className="italic font-display-light text-blush">
                a vetted bench
              </span>
              .
            </h2>
            <div className="lg:col-span-7 space-y-6 text-lg text-bone/80 leading-relaxed max-w-2xl">
              <p>
                MadanyCo is led by its founder, Abdalrahman Madany, an operator
                who spent years inside Snapchat&apos;s regional ad business
                across EMEA and North Africa, then brand-side running campaigns
                for energy, hospitality, and DTC companies. Platform side and
                brand side, end to end.
              </p>
              <p>
                That vantage point is the whole point. Most agencies sell you a
                layer, a channel, a deliverable, a retainer. MadanyCo was built
                to install the layer underneath all of them: the plan, the
                cadence, and the reporting that make every channel accountable
                to the same numbers.
              </p>
              <p className="text-bone">
                Engagements are founder-led and staffed from a vetted bench of
                specialists, paid, creative, lifecycle, build, and talent,
                brought in by discipline and scaled to the work. No bloated org
                chart to pay for, no junior team learning on your budget. Just
                the right people on the right problem, run through one operating
                system.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Marquee
        items={[
          "Clarity over complexity",
          "Cash flow is a KPI",
          "Pacing protects profit",
          "Consistency compounds",
        ]}
        className="border-y hairline border-y-bone/10 py-6 sm:py-8"
        textClass="font-display text-3xl sm:text-5xl tracking-tightest"
        separator="✦"
      />

      {/* DIFFERENTIATORS */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            What makes us different
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Three things, on repeat.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.1}>
              <article className="group h-full p-8 lg:p-10 rounded-2xl border hairline border-bone/10 bg-ink-600/40 hover:bg-blush hover:text-ink transition duration-500">
                <span className="font-display text-sm text-blush group-hover:text-ink/70">
                  {d.n}
                </span>
                <h3 className="mt-8 font-display text-2xl sm:text-3xl tracking-tighter leading-tight">
                  {d.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed opacity-80 group-hover:opacity-90">
                  {d.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider-line" />

      {/* PRINCIPLES, large text list */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            Our Principles
          </div>
        </Reveal>

        <ol className="grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <li className="group flex items-baseline gap-8 border-t hairline border-t-bone/10 py-7 sm:py-9">
                <span className="font-display text-xs sm:text-sm text-blush/70 tabular-nums">
                  0{i + 1}
                </span>
                <span className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tightest leading-[1] text-bone group-hover:text-blush transition">
                  {p}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* OUR PULSE */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Our Pulse™
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            P · U · L+S · E
          </h2>
          <p className="mt-6 text-bone/70 max-w-xl text-lg">
            Four letters. One operating principle.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4 border hairline">
          {PULSE.map((p, i) => (
            <Reveal key={p.letter} delay={i * 0.08} className="bg-ink">
              <div className="h-full p-8 lg:p-10 hover:bg-ink-600 transition">
                <span className="font-display text-blush text-7xl sm:text-8xl tracking-tightest leading-none">
                  {p.letter}
                </span>
                <h3 className="mt-10 font-display text-2xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-bone/70 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHO WE WORK BEST WITH */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                Who we work best with
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                Brands that care about margin and cash flow.
              </h2>
              <p className="mt-8 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
                Teams that want structure and pace. People who prefer clear
                communication, clean reporting, and direct accountability.
              </p>
            </div>
            <div className="lg:col-span-5 flex lg:justify-end">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-3 rounded-full bg-hot text-ink px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blush transition"
              >
                Start the conversation
                <span className="group-hover:translate-x-1 transition">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
