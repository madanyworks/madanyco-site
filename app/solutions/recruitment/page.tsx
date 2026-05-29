import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Marketing Recruitment",
  description:
    "Build the marketing team that runs the system. Outcome-based role design, skills-based screening, and a vetted specialist network.",
};

const WHAT_YOU_GET = [
  "Role scoping and clear, outcome-based job briefs",
  "Sourcing from a vetted network of paid, creative, lifecycle, and analytics specialists",
  "Skills-based screening and structured interviews",
  "Onboarding into a working operating system (not a vague mandate)",
  "Org-design guidance: channel owners, RACI, KPIs, incentives",
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Talent & Experiential"
        title="Build the team that"
        accent="runs the system."
        hook="Hiring marketers is hard when you don't know exactly what 'good' looks like. We've built and led marketing teams from zero — so we write the briefs, screen for real skill, and place the people who can actually execute. Whether you need one specialist or a full in-house function, we help you hire right the first time."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            What you get
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Hire right the{" "}
            <span className="italic font-display-light text-blush">
              first time
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
                We hire against{" "}
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
              So new people step into a defined cadence with clear ownership.
              They ramp in weeks, not quarters — because the job is mapped to
              outputs, not job titles.
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
            Built an in-house marketing team{" "}
            <span className="italic font-display-light text-blush">
              from 0 to 12 across EMEA + AMER
            </span>
            , and scaled an ads-enablement org from 15 to 75 inside a global
            platform.
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
                Founders and operators building (or rebuilding) marketing.
              </h2>
            </div>
            <p className="lg:col-span-7 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
              Anyone who can&apos;t afford a bad marketing hire — and would
              rather invest a few weeks getting the brief right than spend six
              months managing out the wrong person.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Scope the hire."
        sub="Tell us the role, the stage, and the team it lands in. We'll come back with the brief and a sourcing plan."
      />
    </>
  );
}
