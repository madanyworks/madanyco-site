import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Link from "next/link";
import PricingCard, { PricingTier } from "@/components/PricingCard";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Social Media Management",
  description:
    "Stop chasing attention. Start earning it. Smart content, real community management, and analytics that tell the truth.",
};

const TIERS: PricingTier[] = [
  {
    name: "Kick-Start",
    price: "$1,700",
    cadence: "/ month",
    pitch:
      "Built for small brands ready to start growing smarter. Plant your brand flag in the digital world.",
    features: [
      "8 Custom Feed Posts",
      "2 Instagram Story Designs",
      "Up to 2 Social Media Channels",
      "Captions (English) + Hashtag Strategy",
      "Community Management (DMs/comments)",
      "Use of Client-Provided Images and Video",
      "Instagram Post Boosting (ad budget separate)",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Growth",
    price: "$2,500",
    cadence: "/ month",
    featured: true,
    pitch:
      "For brands ready to scale with serious momentum. Fresh visuals. Short-form storytelling. Bilingual content.",
    features: [
      "12 Custom Feed Posts",
      "2 Short-Form Video Productions",
      "4 Instagram Story Designs",
      "Up to 3 Social Media Channels",
      "Captions in English & Arabic + Hashtag Strategy",
      "Daily Community Management",
      "1 × 4-Hour Monthly Photo & Video Shoot",
      "Instagram Post Boosting (ad budget separate)",
      "Monthly Report + Strategic Recommendations",
    ],
  },
  {
    name: "Momentum",
    price: "$3,500",
    cadence: "/ month",
    pitch:
      "For brands that aren't just playing the social media game — they're rewriting the rules.",
    features: [
      "Up to 20 Custom Feed Posts",
      "4 Short-Form Video Productions",
      "8 Instagram Story Designs",
      "Up to 5 Social Channels",
      "Captions in English & Arabic + Hashtag Strategy",
      "Daily Community Management + Proactive Engagement",
      "2 × 4-Hour Monthly Photo & Video Shoots",
      "Instagram Post Boosting (ad budget separate)",
      "Full Monthly Report + Strategic Recommendations",
      "Tailored Social Media Strategy",
    ],
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Planning",
    body: "Strategy first, always. Every piece of content is mapped against your marketing funnel: awareness to action. Each month we build a roadmap that balances promotion, education, and engagement.",
  },
  {
    n: "02",
    title: "Included Posts",
    body: "Built for attention. Designed for action. A mix of custom feed posts, story designs, and resharing UGC that fits your voice. Higher tiers add monthly photo & video shoots — concept to casting to post-production.",
  },
  {
    n: "03",
    title: "Content Scheduling & Posting",
    body: "Right content. Right platform. Right time. We schedule across Facebook, Instagram, LinkedIn, GBP, X, TikTok, and YouTube Shorts so your brand stays consistent and always in motion.",
  },
  {
    n: "04",
    title: "Community Management",
    body: "Brands aren't built by broadcasting — they're built by conversations. We monitor and respond across every platform, in your voice, drawn from your values.",
  },
  {
    n: "05",
    title: "Reporting",
    body: "Monthly reports across every active channel: key metrics, trends, and what's next. Growth isn't about doing more — it's about knowing better.",
  },
];

const FAQS = [
  {
    q: "How long does it take to prepare content?",
    a: "After onboarding, we deliver a draft content calendar within 2 weeks. If a photo/video shoot is part of your package, timing adjusts to the shoot schedule. Momentum clients get an extra week for strategy development.",
  },
  {
    q: "How much of my time is needed?",
    a: "About 2 hours for the initial onboarding call. After that, as involved as you want — we work with hands-on collaborators and hands-off clients alike.",
  },
  {
    q: "How do you schedule the content?",
    a: "We use Planable for scheduling and approvals. If you prefer another platform, let us know. Instagram Stories are posted manually, so we may request direct access.",
  },
  {
    q: "Can I see content before it's posted?",
    a: "Absolutely. We prepare a visual calendar in Google Docs — each post on its own slide — for fast, simple feedback and approvals.",
  },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Social Media Management"
        title="Stop chasing attention."
        accent="Start earning it."
        hook="You're focused on building a real business. Social media demands a second full-time job: content, engagement, strategy, platform changes. We get it — we craft media strategies that don't just post into the void; they connect, convert, and build real momentum."
        bgImage={IMAGES.smmHero}
      />

      <div className="divider-line" />

      {/* Overview */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-big leading-[0.95] tracking-tighter">
              No templates. No noise.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="space-y-6 text-lg text-bone/80 leading-relaxed max-w-2xl">
              <p>
                At MadanyCo, we craft media strategies that don&apos;t just post
                into the void — they connect, convert, and build real momentum.
              </p>
              <ul className="grid gap-3 pl-0">
                {[
                  "Smart content creation",
                  "Community management that listens and responds",
                  "Analytics that tell the real story, not just vanity metrics",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-blush shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Everything is tailored to your growth, your audience, your
                brand&apos;s voice. You stay focused on leading. We&apos;ll stay
                focused on making sure the right people are paying attention.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Packages
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Pick your{" "}
            <span className="italic font-display-light text-blush">tempo</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <PricingCard tier={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Our Process
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
            How it works.
          </h2>
        </Reveal>

        <ol className="mt-14 grid">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <li className="grid gap-6 lg:grid-cols-12 items-baseline border-t hairline border-t-bone/10 py-8 lg:py-10 group hover:bg-ink-700/30 transition">
                <span className="lg:col-span-1 font-display text-blush text-sm tabular-nums">
                  {p.n}
                </span>
                <h3 className="lg:col-span-4 font-display text-3xl sm:text-4xl tracking-tighter leading-tight group-hover:text-blush transition">
                  {p.title}
                </h3>
                <p className="lg:col-span-7 text-bone/75 leading-relaxed">
                  {p.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* FAQs */}
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
            <Reveal key={f.q} delay={i * 0.06} className="bg-ink">
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

      {/* How we do it — Pulse tie-in */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                How we do it
              </div>
              <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                The Creative Engine pillar of{" "}
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
              Content is treated as a testable, compounding asset — not a
              posting quota. Pillars become angles, angles become hooks, and
              what resonates gets iterated into more of itself. Community
              management and honest analytics feed straight back into the plan,
              so social earns attention on purpose.
            </p>
          </div>
        </Reveal>
      </section>

      <ServiceCTA
        headline="Build a brand that moves people."
        sub="Start with a 20-minute scoping call. We'll tell you the truth about your social presence — what's working, what isn't, and what to do first."
      />
    </>
  );
}
