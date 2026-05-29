import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Website Development",
  description:
    "Your website should work — turning visitors into leads, and leads into loyal customers. International design + modern SEO + local insight.",
};

const CLIENTS = [
  "CoForm Bahrain",
  "Rawan Pre-School",
  "Multi-National School Dhahran",
  "David Parker Personal Brand",
  "The Foundry Wellington",
  "Quest School Bahrain",
  "Volonte Wellness Centre",
  "Victoria Dance Bahrain",
  "Edamah Bahrain Real Estate",
];

const PILLARS = [
  {
    n: "01",
    title: "International standards",
    body: "Design systems and layout craft that hold up against the best agencies anywhere.",
  },
  {
    n: "02",
    title: "Modern SEO foundations",
    body: "Core Web Vitals, semantic markup, schema, and metadata built into the build — not bolted on.",
  },
  {
    n: "03",
    title: "Local insight",
    body: "Bilingual readiness, regional brand cues, and an understanding of what converts in your market.",
  },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Website Development"
        title="You don't need a website."
        accent="You need a digital storefront."
        hook="Let's be honest — a pretty design won't cut it anymore. Your website should work: turning visitors into leads, and leads into loyal customers. We combine international design standards, modern SEO, and local insight to craft sites that speak to your audience — and to Google."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <div className="grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <article className="group h-full p-8 lg:p-10 rounded-2xl border hairline border-bone/10 bg-ink-600/40 hover:bg-blush hover:text-ink transition duration-500">
                <span className="font-display text-blush text-sm group-hover:text-ink/70">
                  {p.n}
                </span>
                <h3 className="mt-8 font-display text-2xl sm:text-3xl tracking-tighter leading-tight">
                  {p.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed opacity-80">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Websites we&apos;ve shipped
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Built for brands across{" "}
            <span className="italic font-display-light text-blush">
              the region
            </span>
            .
          </h2>
        </Reveal>

        <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10 border hairline">
          {CLIENTS.map((c) => (
            <li
              key={c}
              className="bg-ink p-8 lg:p-10 hover:bg-ink-600 transition group"
            >
              <p className="font-display text-2xl lg:text-3xl tracking-tighter leading-tight text-bone group-hover:text-blush transition">
                {c}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <ServiceCTA
        headline="Let's build something that matters."
        sub="Whether you're starting from scratch or refreshing an outdated platform, we'll help you build a web presence that feels global but speaks to your niche."
      />
    </>
  );
}
