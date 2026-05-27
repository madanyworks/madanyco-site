import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import PricingCard, { PricingTier } from "@/components/PricingCard";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Google Ads",
  description:
    "If your business doesn't show up when people search, it might as well not exist. Campaigns built by specialists, backed by performance.",
};

const TIERS: PricingTier[] = [
  {
    name: "Up On Google",
    price: "From $1,000",
    cadence: "USD / campaign type / mo",
    featured: true,
    pitch:
      "A single, focused campaign type — built and managed end-to-end. Ad spend not included.",
    features: [
      "Google Search Ads (text-based)",
      "Display Ads",
      "Google Shopping Campaigns",
      "App Promotion Ads",
      "YouTube Video Ads",
      "Targeted keyword research",
      "Ad copywriting & campaign setup",
      "Daily performance monitoring & optimization",
    ],
    note: "Minimum ad spend: $5–10 USD / day",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Onboarding",
    body: "Full Google Ads audit and an initial strategy call. We map out the campaign types worth building.",
  },
  {
    n: "02",
    title: "Campaign Setup",
    body: "Full campaign structure, ad groups, creative, and tracking — built to clear conversion definitions.",
  },
  {
    n: "03",
    title: "Management & Optimization",
    body: "Continuous monitoring and data-backed adjustments. Bids, creatives, keywords, audiences — refined every week.",
  },
];

const FAQS = [
  {
    q: "What's the difference between SEM and SEO?",
    a: "SEM (Search Engine Marketing) is paid — you bid for placements and pay per click. SEO is earned — you optimize for organic visibility. Best results come from running both in parallel.",
  },
  {
    q: "What's the minimum ad spend you'd recommend?",
    a: "$5–10 USD per day is a workable starting point for most local Search campaigns. For Shopping or YouTube, we typically scope higher to give the algorithm enough signal.",
  },
  {
    q: "Can you guarantee a #1 ranking?",
    a: "No reputable agency can — and any that does is selling fiction. We can guarantee that we'll structure campaigns to give you the best chance, and report honestly on what's actually moving.",
  },
  {
    q: "Do you support Arabic and English campaigns?",
    a: "Yes — fully bilingual setup, copywriting, and reporting.",
  },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Google Ads · Pay-Per-Click"
        title="If you don't show up,"
        accent="you don't exist."
        hook="Attention business owners — if your business doesn't show up when people search, it might as well not exist. We build Google Ads for businesses at every stage of growth, by specialists, backed by performance."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Package
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Built by specialists.{" "}
            <span className="italic font-display-light text-blush">
              Backed by performance.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Reveal>
              <PricingCard tier={TIERS[0]} />
            </Reveal>
          </div>
          <div className="lg:col-span-2 self-stretch flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="h-full p-8 lg:p-10 rounded-3xl border hairline border-bone/10 bg-ink-600/40">
                <h3 className="font-display text-3xl tracking-tighter">
                  The real secret to high-converting Google Ads?
                </h3>
                <p className="mt-6 text-lg text-bone/80 leading-relaxed">
                  It&apos;s not just the ad. It&apos;s where you send people
                  <span className="text-blush"> after the click</span>. Landing
                  page intent, message match, and load speed make the
                  difference between a $1 click and a $1 sale.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Our Process
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
            How we run your account.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px bg-bone/10 sm:grid-cols-3 border hairline">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06} className="bg-ink">
              <li className="h-full p-8 lg:p-10 hover:bg-ink-600 transition">
                <span className="font-display text-blush text-sm">{p.n}</span>
                <h3 className="mt-8 font-display text-2xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-bone/75 leading-relaxed text-sm">
                  {p.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            FAQs
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
            Quick answers.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-bone/10 sm:grid-cols-2 border hairline">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05} className="bg-ink">
              <div className="h-full p-8 lg:p-10">
                <h3 className="font-display text-xl sm:text-2xl tracking-tight text-blush">
                  {f.q}
                </h3>
                <p className="mt-4 text-bone/80 leading-relaxed">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ServiceCTA
        headline="Ready to be found?"
        sub="20-minute call to audit your account, your keywords, and your spend. We'll tell you what to fix first."
      />
    </>
  );
}
