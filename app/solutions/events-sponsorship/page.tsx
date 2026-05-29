import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Events & Sponsorship",
  description:
    "Activations that convert attention into pipeline. Strategy, sponsorship, retail, and experiential — wired into lifecycle so the spend shows up in the P&L.",
};

const WHAT_YOU_GET = [
  "Event and activation strategy tied to commercial goals",
  "Sponsorship, partnership, and ambassador programs with KPI governance",
  "Retail pilots, pop-ups, and experiential builds",
  "On-site capture → lifecycle follow-up (email/SMS) so leads don't leak",
  "QR / promo-code attribution and geo-lift measurement",
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Talent & Experiential"
        title="Activations that convert"
        accent="attention into pipeline."
        hook="Events only pay off when they're wired into the rest of your marketing. We plan and run activations, sponsorships, retail pilots, and experiential moments — with capture, attribution, and follow-up built in, so the spend shows up in the P&L, not just the photos."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            What you get
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Spend that shows up{" "}
            <span className="italic font-display-light text-blush">
              in the P&L
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

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 bg-ink-700/40 border-y hairline border-y-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                How we do it
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                Plugged into the Channels + Lifecycle layers of{" "}
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
              Every activation has a capture mechanism and a measured
              follow-up. Never a dead end.
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
            Ran activations and sponsorships across Egypt and the Levant for
            energy and CPG brands, plus{" "}
            <span className="italic font-display-light text-blush">
              retail and gym partnerships across London and Dubai
            </span>{" "}
            for a DTC portfolio. Offline-to-online loops with measured
            follow-through.
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
                Brands investing in events.
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
              Brands investing in events, sponsorships, or retail who want
              measurable return — not just reach.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Plan the next activation."
        sub="Tell us the moment, the venue, the audience. We'll come back with a plan that includes how you measure success."
      />
    </>
  );
}
