import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "Snapchat Ads",
  description:
    "A specialty most agencies don't own. Snapchat-native creative, MENA + GCC audience strategy, and the testing system that makes the channel pay.",
};

const WHAT_YOU_GET = [
  "Audience strategy built for Snap's interest-graph (not Meta lookalikes)",
  "Snapchat-native creative — vertical, sound-on, story-first",
  "Full-funnel campaign architecture: awareness → consideration → conversion",
  "Bilingual execution (Arabic + English) where the market needs it",
  "Daily monitoring, weekly creative iteration, monthly reporting",
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Performance & Paid · Specialty"
        title="Snapchat Ads."
        accent="A channel most agencies don't own."
        hook="Snap doesn't behave like Meta. Different audience, different creative grammar, different bidding logic. We've spent years operating inside Snap — building MENA SMB ads, training the regional ecosystem, and running campaigns end-to-end. Bring us the channel most of your competitors are sleeping on."
      />

      <Marquee
        items={[
          "Vertical-native creative",
          "Interest-graph targeting",
          "MENA + GCC audience expertise",
          "Bilingual execution",
        ]}
        className="border-y hairline border-y-bone/10 py-6 sm:py-8"
        textClass="font-display text-3xl sm:text-5xl tracking-tightest"
        separator="✦"
      />

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            What you get
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            A campaign{" "}
            <span className="italic font-display-light text-blush">
              built for Snap
            </span>
            , not adapted to it.
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
              Decision rules set in advance. Creative tested in iterations.
              Reporting that ends with a decision, not a screenshot. Snap is
              treated like every other channel — held to the same allowable CAC
              and MER guardrails.
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
            Spent years operating inside Snapchat&apos;s SMB business across
            EMEA and North Africa —{" "}
            <span className="italic font-display-light text-blush">
              managing a portfolio of tens of thousands of advertisers
            </span>{" "}
            and running campaigns for energy, hospitality, and DTC brands
            directly.
          </p>
          <Link
            href="/portfolio/snap-inc"
            className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-bone/70 link-underline"
          >
            See the Snap case study →
          </Link>
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
                DTC, F&B, and consumer brands.
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
              Especially brands selling to under-35s in MENA, GCC, or Tier-1
              English markets — where Snap reach is high and competition is
              thin.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Run a Snap campaign that actually works."
        sub="Tell us the product, the market, and the budget. We'll tell you whether Snap is right for your category — and if it is, how we'd structure the first 90 days."
      />
    </>
  );
}
