import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "Coaching & Training",
  description:
    "Stop chasing tactics. Start building traction. Fractional CMO / marketing coaching for founders ready to scale without the guesswork.",
};

const COACHING_BENEFITS = [
  "They help you define your audience with precision, not guesswork.",
  "They help you build a strategy that aligns with your strengths and your market.",
  "They guide you through the tools and systems that scale, not overwhelm.",
  "They help you ship work that resonates and drives results.",
];

const NEED_COACHING_IF = [
  {
    n: "01",
    headline: "You're committing random acts of marketing",
    body: "Let's call it what it is: shiny object syndrome. A trending tactic here. A viral sound there. You're doing stuff… but not moving forward. The problem? No strategy. No system. No compass pointing to ROI. At MadanyCo we don't chase trends — we build intentional marketing systems. We zoom out, see the whole board, and align every action to your real goals.",
    closer: "Let's build you a marketing roadmap that actually leads somewhere.",
  },
  {
    n: "02",
    headline: "You're running the business AND the marketing",
    body: "Let's be honest — it's too much. Great marketing doesn't happen in a one-off campaign or flashy launch. It's a long game built on clarity, repetition, and momentum. Momentum needs consistency. Consistency needs time. Time you don't have. That's where we come in. We don't just run your ads — we build internal marketing muscles, so your team can think, move, and create like pros.",
    closer:
      "Marketing systems that scale. Teams that ship new ideas to the world. Brands that grow.",
  },
  {
    n: "03",
    headline: "Your business isn't growing",
    body: "You've taken it far — on grit, instinct, and sleepless nights. But now? Growth has slowed. Momentum feels scattered. You don't need another course. You need a partner: someone who sees your blind spots, holds you accountable, and builds real systems around your marketing. No fluff. No endless retainers. Just measurable growth, month after month.",
    closer: "Let's get your business unstuck — and growing again.",
  },
  {
    n: "04",
    headline: "Your business has blind spots",
    body: "You're in it every day — so close to the work it's hard to zoom out. Pricing, positioning, people: every piece matters. But which lever should you pull first? When was the last time you rethought your business model? Are you charging what you're worth? That's where a marketing coach steps in — surfacing what's missing, what's underutilized, and what's ready to scale.",
    closer: "Clarity isn't a luxury. It's a growth multiplier.",
  },
  {
    n: "05",
    headline: "You need freedom, not just revenue",
    body: "If stepping away from your business for eight weeks sounds impossible… if your family gets your leftovers… if sleep is a luxury, not a habit… then let's be honest: growth isn't what you need right now. You need a marketing coach. Someone to bring structure to your strategy, margin to your time, and clarity to your chaos.",
    closer: "Building a brand shouldn't cost you your life.",
  },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Coaching & Training — Fractional CMO"
        title="Stop chasing tactics."
        accent="Start building traction."
        hook="You're not just running a business — you're shaping a brand. But if you're stuck inside the chaos, juggling posts, tweaking campaigns, second-guessing every move, you're not building. You're reacting. That's where a marketing coach steps in."
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
                all alone — guessing your strategy, testing in circles, hoping
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
              A coach helps you
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

      {/* You need coaching if... */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            You need coaching if…
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

      {/* Closing */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            This isn&apos;t about doing more.
            <br />
            <span className="italic font-display-light text-blush">
              It&apos;s about doing what matters.
            </span>
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-bone/75 max-w-2xl leading-relaxed">
            Most clients stay with us for a year or more — not because they
            have to, but because the ROI is clear, every single month.
          </p>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Ready to step out of the noise?"
        sub="Apply for a fractional CMO discovery call. We're selective on fit — we'll come back fast either way."
      />
    </>
  );
}
