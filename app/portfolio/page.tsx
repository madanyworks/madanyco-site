import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Portfolio · Corporate Experience",
  description:
    "Two decades of marketing leadership across schools, real estate, wellness, DTC, and enterprise brands across the GCC and beyond.",
};

type Experience = {
  year: string;
  org: string;
  role: string;
  body: string;
};

const EXPERIENCE: Experience[] = [
  {
    year: "2024 — Today",
    org: "MadanyCo.™",
    role: "Founder & Fractional CMO",
    body: "Profit-first growth partnerships with DTC and e-commerce brands across the GCC. Building The Pulse System™ for teams that want clarity, pace, and accountability.",
  },
  {
    year: "2021 — 2024",
    org: "Group Marketing Leadership (GCC)",
    role: "Director, Marketing & Brand",
    body: "Led multi-brand portfolios across schools, hospitality, and wellness. Built media planning frameworks, in-house creative pods, and reporting cadences adopted across the group.",
  },
  {
    year: "2018 — 2021",
    org: "Education Group",
    role: "Head of Marketing",
    body: "Owned enrolment growth, brand positioning, and digital transformation across multi-campus operations. Cut cost-per-lead while doubling intake-season funnel volume.",
  },
  {
    year: "2014 — 2018",
    org: "Real Estate & Property",
    role: "Marketing Manager",
    body: "Marketing leadership across residential and commercial portfolios. Brand identity, sales enablement, and digital channel build-outs from the ground up.",
  },
  {
    year: "2010 — 2014",
    org: "Agency & Brand Side",
    role: "Strategist & Account Lead",
    body: "Account leadership for FMCG, telco, and lifestyle brands. Foundational years in media planning, creative development, and integrated campaigns.",
  },
];

const CAPABILITIES = [
  "Fractional CMO leadership",
  "Marketing operating systems",
  "Performance media (Meta / TikTok / Google)",
  "Brand positioning & messaging",
  "Content & creative direction",
  "Lifecycle marketing & CRM",
  "Reporting & decision frameworks",
  "Team building & training",
];

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Corporate Experience
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[16ch]">
              Two decades of{" "}
              <span className="italic font-display-light text-blush">
                building
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              Founder-led, but corporate-trained. Marketing leadership across
              education, real estate, wellness, hospitality, and DTC — built on
              the same operating principles we now run for MadanyCo clients.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider-line" />

      {/* TIMELINE */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-12">
            <span className="h-px w-12 bg-blush" />
            Timeline
          </div>
        </Reveal>

        <ol className="grid">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.year + e.org} delay={i * 0.06}>
              <li className="group grid gap-6 lg:grid-cols-12 items-start border-t hairline border-t-bone/10 py-10 hover:bg-ink-700/30 transition">
                <div className="lg:col-span-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-blush">
                    {e.year}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-display text-3xl sm:text-4xl tracking-tighter leading-tight group-hover:text-blush transition">
                    {e.org}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-bone/60">
                    {e.role}
                  </p>
                </div>
                <p className="lg:col-span-4 text-bone/75 leading-relaxed">
                  {e.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* CAPABILITIES */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Capabilities
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            What I bring to the table.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4 border hairline">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c} delay={i * 0.04} className="bg-ink">
              <li className="h-full p-7 hover:bg-ink-600 transition">
                <p className="font-display text-xl tracking-tighter leading-tight">
                  {c}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
                Want to put this to work?
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-bone/70 max-w-2xl">
                Fractional CMO engagements, growth audits, or team training —
                tell us the shape of the problem and we&apos;ll come back with
                a fit.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-3 rounded-full bg-blush text-ink px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-bone transition"
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
