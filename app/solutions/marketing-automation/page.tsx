import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Marketing Automation",
  description:
    "Turn chaos into precision. Lifecycle, CRM, reporting, and AI-assisted workflows that compound — built so your team focuses on growth, not manual work.",
};

const WHAT_YOU_GET = [
  "Lifecycle / CRM build-out (Klaviyo): welcome, abandonment, post-purchase, winback, segmentation",
  "Automated reporting dashboards (GA4, Looker) with the metrics that predict profit",
  "Lead and customer-data flows wired across your stack",
  "AI-assisted creative and ops workflows where they actually save time",
  "Documentation and team training so the system outlives any one person",
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Build & Systems"
        title="Turn chaos into precision."
        accent="Automation that compounds."
        hook="Your team is your greatest asset — so stop burning it on manual work. We build the systems, flows, and automations that turn scattered effort into a repeatable, revenue-generating machine: lifecycle that lifts LTV, reporting that runs itself, and AI-assisted workflows that free your team to focus on growth."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            What you get
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Systems that run{" "}
            <span className="italic font-display-light text-blush">on rails</span>
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
                The Lifecycle + Reporting layers of{" "}
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
              Built so your daily workflow runs on rails, not heroics. The
              numbers come to you. The flows run themselves. Your team gets
              their week back.
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
            Lifecycle and reporting systems built across a 3-brand portfolio —{" "}
            <span className="italic font-display-light text-blush">
              turned a disconnected channel mix into one accountable,
              MER-governed operation
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
                Brands losing revenue to manual work.
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
              DTC and e-commerce brands losing revenue to manual processes, weak
              email/SMS, or reporting they can&apos;t trust.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Stop burning your team on manual work."
        sub="Book a call to scope a build, or tell us where the friction is and we'll come back with a phased plan."
      />
    </>
  );
}
