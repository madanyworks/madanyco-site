import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Launch Strategy",
  description:
    "Launch like you've done it before — because we have. Market sizing, positioning, channel strategy, and a day-by-day rollout. New brand, new SKU, new market.",
};

const WHAT_YOU_GET = [
  "Market sizing (TAM/SAM/SOM) and competitive landscape",
  "Positioning, ICP, and offer strategy",
  "Channel and budget plan with forecasted unit economics",
  "Pre-launch → launch → post-launch sequence with milestones",
  "A measurement plan so you know what worked by week one",
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Strategy & Leadership"
        title="Launch like you've"
        accent="done it before."
        hook="A launch is the riskiest, highest-leverage moment a brand has. We de-risk it: market sizing, positioning, channel strategy, a creative plan, and a day-by-day rollout — so you go to market with a system, not a hope. New brand, new SKU, new market: same disciplined playbook."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            What you get
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            A go-to-market{" "}
            <span className="italic font-display-light text-blush">system</span>
            , not a hope.
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

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 bg-ink-700/40 border-y hairline border-y-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                How we do it
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                <Link
                  href="/pulse-system"
                  className="italic font-display-light text-blush link-underline"
                >
                  The Pulse System™
                </Link>{" "}
                compressed into its highest-stakes window.
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg text-bone/80 leading-relaxed max-w-2xl">
              Financial plan, marketing plan, and daily workflow aligned to a
              single go-live date. Every output ladders up to launch day.
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
            Led GTM for new SKUs at energy-drink and QSR brands across MENA,
            and ran pre-launch-to-live sequences for{" "}
            <span className="italic font-display-light text-blush">
              wellness, athleisure, and hospitality clients across the UK and
              GCC
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
                Founders launching new.
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
              Founders launching a new brand, product line, or market entry —
              especially into MENA/GCC, where local nuance makes or breaks the
              launch.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Tell us about the launch."
        sub="Stage, market, timeline, budget. We'll come back with how we'd shape the first 90 days — and whether it's the kind of moment we're the right partner for."
      />
    </>
  );
}
