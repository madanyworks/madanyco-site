import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import EmailSignup from "@/components/EmailSignup";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import RotatingWord from "@/components/RotatingWord";
import { HERO_VIDEOS } from "@/lib/videos";
import { CASE_STUDIES } from "@/content/portfolio";

const ROTATING_VERBS = [
  "launch",
  "scale",
  "compound",
  "rebrand",
  "unstick",
  "turn around",
  "grow",
];

// ──────────────────────────────────────────── data
const HERO_PHRASES = [
  "Raise conversions without raising spend",
  "We steer by unit economics",
  "We fix broken funnels for a living",
  "Make your ads pay for themselves",
  "Repeatable systems for DTC growth",
];

const PAIN_POINTS = [
  "Chasing ROAS week to week",
  "Burning through creatives with no learnings",
  "Discounting to hit targets",
  "Guessing what's actually driving sales",
  "Spending time you don't have",
];

const PROMISE_FEATURES = [
  { n: "01", label: "Growth Plan", body: "A clear growth plan — what to do, in what order, and why." },
  { n: "02", label: "Creative Engine", body: "Pillars & angles → hooks → iterations → winners." },
  { n: "03", label: "Channels", body: "Meta / TikTok / Google / Snap — plus website alignment." },
  { n: "04", label: "Lifecycle", body: "Email & SMS flows + campaigns that lift LTV." },
  { n: "05", label: "Reporting", body: "CAC targets, MER, contribution-margin guardrails." },
];

const STATS = [
  { value: "10", label: "Brands shipped" },
  { value: "$100M+", label: "Revenue grown" },
  { value: "20yrs", label: "Operating, end-to-end" },
  { value: "4×", label: "Peak LTV:CAC delivered" },
];

const WE_DONT = [
  "Chase ROAS week to week",
  "Burn through creatives without learnings",
  "Discount to hit targets",
  "Sell retainers without guardrails",
  "Send reports nobody acts on",
];

const WE_DO = [
  "Install operating systems",
  "Steer by unit economics",
  "Protect margin and cash flow",
  "Make growth repeatable",
  "Answer our own emails",
];

const CLOSING_PHRASES = [
  "Drop us a line",
  "Let's build something",
  "Make your ads pay",
  "Start with margin",
  "Stop chasing ROAS",
  "The Pulse System™",
];

// ──────────────────────────────────────────── page
export default function HomePage() {
  return (
    <>
      {/* ═════════════════════════════════════════ HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-8">
        <div className="px-6 sm:px-10 lg:px-14 relative">
          {/* Status indicator */}
          <div className="flex items-center justify-between gap-6 mb-12 sm:mb-16">
            <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-bone/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blush opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blush" />
              </span>
              Online · Bahrain → Globally
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-bone/40">
              <span>The Pulse System™</span>
            </div>
          </div>

          {/* Massive headline */}
          <h1 className="font-display leading-[0.82] tracking-tightest text-bone">
            <span className="block text-mega">
              Market for{" "}
              <span className="italic font-display-light text-blush">people</span>
              ,
            </span>
            <span className="block text-mega">
              not{" "}
              <span className="line-through decoration-blush decoration-[6px] sm:decoration-[10px] underline-offset-[12px]">
                at
              </span>{" "}
              people.
            </span>
          </h1>

          {/* Sub + CTA */}
          <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-12 items-end">
            <p className="lg:col-span-6 text-lg sm:text-xl text-bone/70 max-w-xl leading-snug">
              A profit-first growth partner for DTC and e-commerce brands. We
              install <span className="text-bone">The Pulse System™</span> — a
              financial plan, a marketing plan, and the daily workflow that
              holds them together.
            </p>
            <div className="lg:col-span-6 flex flex-wrap items-center gap-5 lg:justify-end">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-3 rounded-full bg-hot text-ink px-8 py-5 text-sm font-bold uppercase tracking-widest transition hover:bg-blush"
              >
                Get Started
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/about"
                className="text-sm uppercase tracking-widest text-bone/70 link-underline"
              >
                Read the manifesto
              </Link>
            </div>
          </div>
        </div>

        {/* Hero marquee */}
        <Marquee
          items={HERO_PHRASES}
          className="mt-20 border-y hairline border-y-bone/10 py-6 sm:py-8 bg-ink"
          textClass="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tightest"
          separator="✦"
        />
      </section>

      {/* ═════════════════════════════════════════ ROTATING MISSION */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40 border-b hairline border-b-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            What we do
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-huge sm:text-mega leading-[0.95] tracking-tightest text-bone max-w-[20ch]">
            We help ambitious businesses{" "}
            <RotatingWord
              words={ROTATING_VERBS}
              className="italic font-display-light text-blush"
            />
            .
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-12 max-w-2xl text-lg sm:text-xl text-bone/70 leading-relaxed">
            With one operating system, built for profitable growth — a
            financial plan, a marketing plan, and the daily workflow that
            holds them together. We onboard a small number of brands each
            quarter; that&apos;s the only way the cadence actually compounds.
          </p>
        </Reveal>
      </section>

      {/* ═════════════════════════════════════════ CLIENT LOGO MARQUEE */}
      <section className="py-16 sm:py-20 border-b hairline border-b-bone/10">
        <div className="px-6 sm:px-10 lg:px-14 mb-10 flex items-end justify-between flex-wrap gap-4">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush">
              <span className="h-px w-12 bg-blush" />
              Brands we&apos;ve shipped for
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="text-sm uppercase tracking-widest text-bone/70 link-underline"
            >
              See the full portfolio →
            </Link>
          </Reveal>
        </div>

        {/* Auto-scrolling logos */}
        <div className="overflow-hidden w-full select-none" aria-hidden="true">
          <div className="flex gap-14 sm:gap-20 lg:gap-24 animate-marquee-slow w-max items-center">
            {[...CASE_STUDIES, ...CASE_STUDIES].map((c, i) => (
              <div
                key={i}
                className="relative shrink-0 h-14 sm:h-16 lg:h-20 w-32 sm:w-40 lg:w-48 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-500"
              >
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════ THE PROBLEM */}
      <section
        id="problem"
        className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40 relative"
      >
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush">
            <span className="h-px w-12 bg-blush" />
            (01) The Problem
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-huge leading-[0.88] tracking-tighter max-w-5xl">
            Growth gets messy when there&apos;s{" "}
            <span className="italic font-display-light text-blush">
              no system
            </span>
            .
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="space-y-6 text-lg sm:text-xl text-bone/75 max-w-xl leading-relaxed">
              <p>
                You&apos;re doing &ldquo;marketing&rdquo; every day: posting,
                boosting, testing ads, sending emails. Results still feel
                random, and at some point they stop. Growth atrophies.
              </p>
              <p>
                You haven&apos;t stopped being creative. You just need a system
                that&apos;s{" "}
                <span className="text-bone">repeatable</span> and brings{" "}
                <span className="text-bone">predictable growth</span>.
              </p>
              <p className="font-display text-2xl sm:text-3xl tracking-tighter text-bone leading-tight pt-2">
                Growth lives in the doing — in the volume of actions taken per
                unit of time.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.25}>
            <ul className="grid">
              {PAIN_POINTS.map((pp, i) => (
                <li
                  key={pp}
                  className="group flex items-baseline gap-6 sm:gap-8 border-t hairline border-t-bone/10 py-5 sm:py-7"
                >
                  <span className="font-display text-blush/70 text-xs sm:text-sm tabular-nums shrink-0">
                    0{i + 1}
                  </span>
                  <span className="font-display text-2xl sm:text-4xl lg:text-5xl tracking-tightest leading-[1.05] text-bone group-hover:text-blush transition">
                    {pp}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-24 flex flex-wrap items-baseline gap-x-4 gap-y-2 max-w-4xl">
            <span className="text-bone/50 text-xs sm:text-sm uppercase tracking-[0.3em]">
              The fix →
            </span>
            <p className="font-display text-2xl sm:text-4xl lg:text-5xl tracking-tighter leading-tight">
              We install{" "}
              <span className="text-blush italic font-display-light">
                The Pulse System™
              </span>
              .
            </p>
          </div>
        </Reveal>
      </section>

      <div className="divider-line" />

      {/* ═════════════════════════════════════════ THE PROMISE */}
      <section
        id="promise"
        className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40 bg-ink-700/40"
      >
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush">
            <span className="h-px w-12 bg-blush" />
            (02) The Promise
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 items-end">
          <Reveal className="lg:col-span-8" delay={0.1}>
            <h2 className="font-display text-huge leading-[0.88] tracking-tighter">
              Stop guessing.
              <br />
              Start scaling with{" "}
              <span className="text-blush italic font-display-light">
                The Pulse System™
              </span>
              .
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4" delay={0.2}>
            <p className="text-base sm:text-lg text-bone/70 leading-relaxed">
              Your custom operating system, designed for profitable growth.
            </p>
            <p className="mt-5 font-display text-xl tracking-tight text-bone">
              (Financial Plan + Marketing Plan) × Daily Workflow
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-5 border hairline">
          {PROMISE_FEATURES.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.05} className="bg-ink">
              <div className="h-full p-7 sm:p-8 lg:p-9 group hover:bg-ink-600 transition">
                <div className="flex items-center justify-between">
                  <span className="font-display text-blush text-sm">{f.n}</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-bone/40">
                    {f.label}
                  </span>
                </div>
                <p className="mt-12 font-display text-xl leading-snug tracking-tight text-bone group-hover:text-blush transition">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════ STATS */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            (03) Numbers we steer by
          </div>
          <h2 className="font-display text-huge leading-[0.88] tracking-tighter max-w-4xl">
            ROAS is a thermometer.
            <br />
            <span className="italic font-display-light text-blush">
              These are the levers.
            </span>
          </h2>
        </Reveal>

        <ul className="mt-20 grid grid-cols-2 xl:grid-cols-4 gap-px bg-bone/10 border hairline">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-ink">
              <li className="h-full p-8 sm:p-10 lg:p-12 hover:bg-ink-600 transition">
                <p className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1] tracking-tighter text-blush whitespace-nowrap">
                  {s.value}
                </p>
                <p className="mt-6 text-xs sm:text-sm uppercase tracking-[0.25em] text-bone/70 max-w-[20ch]">
                  {s.label}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ═════════════════════════════════════════ PROMOTIONAL VIDEOS */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 border-t hairline border-t-bone/10">
        <div className="grid gap-10 lg:grid-cols-12 items-end mb-12">
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-6">
              <span className="h-px w-12 bg-blush" />
              (04) Press play
            </div>
            <h2 className="font-display text-huge leading-[0.88] tracking-tighter">
              The brand,{" "}
              <span className="italic font-display-light text-blush">
                in motion
              </span>
              .
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.15}>
            <p className="text-base sm:text-lg text-bone/70 leading-relaxed max-w-md">
              Promotional pieces from recent brand work. Concept through final
              cut — the kind of films we ship for clients across hospitality,
              wellness, and DTC.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <VideoPlayer video={HERO_VIDEOS.reel} className="w-full" />
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-12 items-center">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <VideoPlayer video={HERO_VIDEOS.loop} className="w-full" />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.15}>
            <p className="font-display text-2xl sm:text-3xl tracking-tighter leading-tight max-w-xl">
              Two pieces. One philosophy:{" "}
              <span className="text-blush italic font-display-light">
                every frame earns the next one
              </span>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-bone link-underline"
              >
                See more work →
              </Link>
              <Link
                href="/services/video-production"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-bone/70 link-underline"
              >
                About the video service →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════════════════════════════════════ MANIFESTO */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40 bg-ink-700/40 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-10">
            <span className="h-px w-12 bg-blush" />
            (05) Manifesto
          </div>
        </Reveal>

        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2">
          {/* We don't */}
          <div>
            <Reveal>
              <h3 className="font-display text-big leading-[0.95] tracking-tightest text-bone/70">
                We{" "}
                <span className="line-through decoration-blush decoration-[6px] sm:decoration-[10px] underline-offset-[12px]">
                  don&apos;t
                </span>
              </h3>
            </Reveal>
            <ul className="mt-10 grid">
              {WE_DONT.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <li className="group flex items-baseline gap-5 border-t hairline border-t-bone/10 py-5 sm:py-6">
                    <span className="font-display text-blush/60 text-xs tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-snug text-bone/55 group-hover:text-bone transition">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* We do */}
          <div>
            <Reveal>
              <h3 className="font-display text-big leading-[0.95] tracking-tightest text-blush">
                We{" "}
                <span className="italic font-display-light">do</span>
              </h3>
            </Reveal>
            <ul className="mt-10 grid">
              {WE_DO.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <li className="group flex items-baseline gap-5 border-t hairline border-t-blush/20 py-5 sm:py-6">
                    <span className="font-display text-blush text-xs tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl sm:text-2xl lg:text-3xl tracking-tighter leading-snug text-bone group-hover:text-blush transition">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════ CLOSING MEGAMARQUEE */}
      <div className="border-y hairline border-y-bone/10 py-12 sm:py-16 lg:py-20 bg-ink overflow-hidden">
        <Marquee
          items={CLOSING_PHRASES}
          textClass="font-display text-[clamp(3rem,12vw,11rem)] leading-[0.9] tracking-tightest"
          separator="✦"
          speed="slow"
        />
      </div>

      {/* ═════════════════════════════════════════ EMAIL */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 items-end">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-big leading-[0.95] tracking-tighter">
              We don&apos;t spam,
              <br />
              <span className="text-blush italic font-display-light">
                promise.
              </span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-bone/70 max-w-md">
              Marketing is changing, and so are we. Be first to know
              what&apos;s next — no spam, no noise, just insights worth your
              busy time.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.15}>
            <EmailSignup />
          </Reveal>
        </div>
      </section>
    </>
  );
}
