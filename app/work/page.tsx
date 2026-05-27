import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export const metadata = {
  title: "Work",
  description:
    "Selected work across social media, video, paid acquisition, and website development.",
};

type Project = {
  title: string;
  category: string;
  blurb: string;
  metric?: { label: string; value: string };
};

const PROJECTS: Project[] = [
  {
    title: "CoForm Bahrain",
    category: "Website Development",
    blurb:
      "End-to-end brand storefront for a regional fitness destination — design system, CMS, and SEO foundations.",
    metric: { value: "3.2×", label: "Inbound enquiries" },
  },
  {
    title: "Rawan Pre-School",
    category: "Website + Brand",
    blurb:
      "Warm, bilingual parent experience with an enrolment funnel built around the school's real intake calendar.",
    metric: { value: "+62%", label: "Enrolment leads" },
  },
  {
    title: "The Foundry Wellington",
    category: "Social Media Management",
    blurb:
      "Channel rebuild and weekly content engine — content pillars, UGC pipeline, and reporting cadence.",
    metric: { value: "+184%", label: "Engaged followers" },
  },
  {
    title: "Quest School Bahrain",
    category: "Performance + Web",
    blurb:
      "Paid acquisition + landing-page rebuild aimed at the open day calendar.",
    metric: { value: "4.7×", label: "ROAS on Meta" },
  },
  {
    title: "Volonte Wellness Centre",
    category: "Video Production",
    blurb:
      "Founder-led brand film + a library of short-form cuts for ongoing channel use.",
    metric: { value: "210k", label: "Organic reach" },
  },
  {
    title: "Victoria Dance Bahrain",
    category: "Social Media Advertising",
    blurb:
      "Termly enrolment campaigns built around a clear cost-per-lead target and creative testing framework.",
    metric: { value: "$3.40", label: "Cost per lead" },
  },
  {
    title: "Edamah Bahrain Real Estate",
    category: "Corporate Web Platform",
    blurb:
      "Multi-stakeholder real-estate platform built for clarity, governance, and scale.",
  },
  {
    title: "David Parker Personal Brand",
    category: "Website + Positioning",
    blurb:
      "A personal brand site designed to do the trust-building work before the first call.",
  },
  {
    title: "Multi-National School Dhahran",
    category: "Website Development",
    blurb:
      "Editor-friendly site with parent-portal integration and a fast, accessible enrolment journey.",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Selected Work
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[16ch]">
              Work we&apos;re{" "}
              <span className="italic font-display-light text-blush">
                proud of
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              A selection of brands we&apos;ve built systems for — across
              social, paid acquisition, video, and websites. Detailed case
              studies coming soon.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "DTC growth",
          "Schools & enrolment",
          "Wellness & fitness",
          "Real estate",
          "Founder-led brands",
        ]}
        className="border-y hairline border-y-bone/10 py-6 sm:py-8"
        textClass="font-display text-3xl sm:text-5xl tracking-tightest"
        separator="✦"
      />

      {/* GRID */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group relative h-full p-7 sm:p-8 rounded-2xl border hairline border-bone/10 bg-ink-600/40 hover:bg-blush hover:text-ink transition duration-500 flex flex-col gap-6">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] opacity-70">
                  <span>{p.category}</span>
                  <span className="font-display">↗</span>
                </div>
                <h3 className="mt-2 font-display text-3xl tracking-tighter leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">{p.blurb}</p>
                <div className="mt-auto pt-6 border-t border-bone/10 group-hover:border-ink/20 flex items-end justify-between">
                  {p.metric ? (
                    <div>
                      <p className="font-display text-3xl tracking-tightest">
                        {p.metric.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mt-1">
                        {p.metric.label}
                      </p>
                    </div>
                  ) : (
                    <span className="text-xs uppercase tracking-[0.25em] opacity-60">
                      Case study coming soon
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
                Your brand, next.
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-bone/70 max-w-2xl">
                We onboard a small number of brands each quarter. Bring the
                business, we&apos;ll bring the system.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-3 rounded-full bg-bone text-ink px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-blush transition"
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
