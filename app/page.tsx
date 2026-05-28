import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import EmailSignup from "@/components/EmailSignup";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/images";

const HERO_PHRASES = [
  "Raise conversions without raising spend.",
  "We steer by unit economics.",
  "We fix broken funnels for a living.",
  "Make your Ads pay for themselves.",
  "Repeatable systems for DTC growth.",
];

const PAIN_POINTS = [
  "Chasing ROAS week to week",
  "Burning through creatives with no learnings",
  "Discounting to hit targets",
  "Guessing what's actually driving sales",
  "Spending time you don't have",
];

const PROMISE_FEATURES = [
  {
    n: "01",
    label: "Growth Plan",
    body: "A clear growth plan — what to do, in what order, and why.",
  },
  {
    n: "02",
    label: "Creative Engine",
    body: "A creative testing engine: pillars & angles → hooks → iterations → winners.",
  },
  {
    n: "03",
    label: "Channels",
    body: "Channels execution — Meta / TikTok / Google / Snap, plus website alignment.",
  },
  {
    n: "04",
    label: "Lifecycle",
    body: "Lifecycle revenue — email & SMS flows + campaigns that lift LTV.",
  },
  {
    n: "05",
    label: "Reporting",
    body: "Reporting you can trust — CAC targets, MER, contribution-margin guardrails.",
  },
];

const SOCIAL_CARDS = [
  {
    img: IMAGES.social1,
    tag: "From the feed",
    caption: "The feed rewards rhythm. Discipline compounds.",
  },
  {
    img: IMAGES.social2,
    tag: "From the feed",
    caption: "ROAS is a diagnostic. Margin is the conversation.",
  },
  {
    img: IMAGES.social3,
    tag: "From the feed",
    caption: "Growth lives in the doing — actions per unit of time.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────────── HERO */}
      <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 lg:pt-40 pb-10">
        <div className="px-6 sm:px-10 lg:px-14">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bone/60">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blush animate-pulse" />
            Profit-first growth · DTC & e-commerce
          </div>

          <h1 className="mt-10 font-display text-mega leading-[0.85] tracking-tightest text-bone">
            Market for{" "}
            <span className="italic font-display-light text-blush">people</span>
            ,<br />
            not <span className="line-through decoration-blush/60">at</span>{" "}
            people.
          </h1>

          <div className="mt-14 grid gap-10 lg:grid-cols-12 items-end">
            <p className="lg:col-span-5 text-lg sm:text-xl text-bone/70 max-w-xl leading-snug">
              Your custom-built operating system for profitable GROWTH —
              installed, run, and refined with you. Welcome to{" "}
              <span className="text-bone">The Pulse System™</span>.
            </p>
            <div className="lg:col-span-7 flex flex-wrap items-center gap-5 lg:justify-end">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-3 rounded-full bg-bone text-ink px-7 py-4 text-sm font-semibold uppercase tracking-widest transition hover:bg-blush hover:text-ink"
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

        <Marquee
          items={HERO_PHRASES}
          className="mt-20 border-y hairline border-y-bone/10 py-6 sm:py-8 bg-ink"
          textClass="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tightest"
          separator="✦"
        />
      </section>

      {/* ───────────────────────────── PROBLEM */}
      <section
        id="problem"
        className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40"
      >
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush">
            <span className="h-px w-12 bg-blush" />
            The Problem
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-huge leading-[0.9] tracking-tighter max-w-5xl">
            Growth gets messy when there&apos;s no system.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="space-y-6 text-lg sm:text-xl text-bone/70 max-w-2xl leading-relaxed">
              <p>
                You&apos;re doing &ldquo;marketing&rdquo; every day: posting,
                boosting, testing ads, sending emails — yet results still feel
                random, and at some point they stop. Growth gets atrophied. You
                haven&apos;t stopped being creative; you just need a consistent
                system that&apos;s repeatable and brings predictable growth.
              </p>
              <p className="text-bone">
                At MadanyCo, we believe growth lives in the doing — in the
                volume of actions taken per unit of time.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.25}>
            <ul className="grid gap-3 lg:mt-2">
              {PAIN_POINTS.map((pp, i) => (
                <li
                  key={pp}
                  className="group flex items-baseline gap-5 border-t hairline border-t-bone/10 pt-4"
                >
                  <span className="font-display text-blush/70 text-sm tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl tracking-tighter leading-tight text-bone group-hover:text-blush transition">
                    {pp}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-20 flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <span className="text-bone/50 text-sm uppercase tracking-[0.3em]">
              The fix →
            </span>
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tighter">
              We install{" "}
              <span className="text-blush">The Pulse System™</span>.
            </p>
          </div>
        </Reveal>
      </section>

      <div className="divider-line" />

      {/* ───────────────────────────── PROMISE */}
      <section
        id="promise"
        className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 lg:py-40 bg-ink-700/40"
      >
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush">
            <span className="h-px w-12 bg-blush" />
            The Promise
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 items-end">
          <Reveal className="lg:col-span-8" delay={0.1}>
            <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
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
              Your custom-built operating system, designed for profitable
              GROWTH. The heartbeat of your growth: daily action driven by a
              clear financial plan.
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
                  <span className="font-display text-blush text-sm">
                    {f.n}
                  </span>
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

      {/* ───────────────────────────── SOCIAL PROOF */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <Reveal>
            <div>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush">
                <span className="h-px w-12 bg-blush" />
                From the feed
              </div>
              <h2 className="mt-6 font-display text-big leading-tight tracking-tighter max-w-2xl">
                Daily action, in the open.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="https://instagram.com/madanyco"
              target="_blank"
              rel="noopener"
              className="text-sm uppercase tracking-widest text-bone/70 link-underline"
            >
              @madanyco on Instagram
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SOCIAL_CARDS.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <a
                href="https://instagram.com/madanyco"
                target="_blank"
                rel="noopener"
                className="group block relative aspect-square rounded-2xl overflow-hidden border hairline border-bone/10 bg-ink-700/40"
              >
                <Image
                  src={c.img}
                  alt={c.caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between text-bone">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] opacity-80">
                    <span>{c.tag}</span>
                    <span className="font-display">↗</span>
                  </div>
                  <p className="font-display text-xl sm:text-2xl leading-tight tracking-tight max-w-[24ch]">
                    {c.caption}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────────────── CLOSING MARQUEE */}
      <Marquee
        items={[
          "The feed rewards rhythm.",
          "The P&L rewards discipline.",
          "The Pulse System™ builds both.",
        ]}
        className="border-y hairline border-y-bone/10 py-8 sm:py-10"
        textClass="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tightest"
        reverse
        separator="·"
      />

      {/* ───────────────────────────── EMAIL */}
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
              Marketing is changing, and so are we. Be first to know what&apos;s
              next — no spam, no noise, just insights worth your busy time.
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
