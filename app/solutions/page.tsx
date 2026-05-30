import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Solutions",
  description:
    "Everything you need to grow, scale, and launch. Strategy, performance, content, build, and talent, installed through The Pulse System™.",
};

const FLAGSHIP = {
  href: "/solutions/pulse-system",
  name: "The Pulse System™ Engagement",
  blurb:
    "Our flagship: the full operating-system install. Founder-led + embedded squad + the weekly cadence that turns reporting into decisions. The financial plan, the marketing plan, and the daily workflow that holds them together.",
};

type PillarItem = {
  href: string;
  label: string;
  blurb: string;
  badge?: "new" | "featured";
};

type Pillar = {
  n: string;
  title: string;
  intro: string;
  items: PillarItem[];
};

const PILLARS: Pillar[] = [
  {
    n: "01",
    title: "Strategy & Leadership",
    intro: "The CMO seat, the plan, and the teaching, without the headcount cost.",
    items: [
      {
        href: "/solutions/fractional-cmo",
        label: "Fractional CMO & Coaching",
        blurb:
          "Senior marketing leadership, or coaching to build it in-house. For founders ready to scale.",
        badge: "new",
      },
      {
        href: "/solutions/launch",
        label: "Launch Strategy",
        blurb: "New brand, new SKU, new market, same disciplined playbook.",
        badge: "new",
      },
    ],
  },
  {
    n: "02",
    title: "Performance & Paid",
    intro: "Channels run end-to-end against allowable CAC and MER guardrails.",
    items: [
      {
        href: "/solutions/snapchat-ads",
        label: "Snapchat Ads",
        blurb: "A specialty most agencies don't own. MENA + GCC + global.",
        badge: "featured",
      },
      {
        href: "/solutions/social-media-advertising",
        label: "Social Media Advertising",
        blurb: "Stop boosting, start targeting. Paid social that builds awareness and converts.",
      },
      {
        href: "/solutions/tiktok-ads",
        label: "TikTok Ads",
        blurb: "Stop sleeping on TikTok. Campaigns that resonate on the platform reshaping reach.",
      },
      {
        href: "/solutions/google-ads",
        label: "Google Ads",
        blurb: "If you don't show up when people search, you don't exist.",
      },
    ],
  },
  {
    n: "03",
    title: "Content & Social",
    intro: "Creative treated as a testable, compounding asset.",
    items: [
      {
        href: "/solutions/social-media-management",
        label: "Social Media Management",
        blurb: "Smart content, real community management, analytics that tell the truth.",
      },
      {
        href: "/solutions/video-production",
        label: "Video Production",
        blurb: "Strategic video content that captures attention, and converts.",
      },
      {
        href: "/solutions/content-creation",
        label: "Content Creation",
        blurb: "Pillars → angles → hooks → iterations → winners. A creative engine.",
        badge: "new",
      },
    ],
  },
  {
    n: "04",
    title: "Build & Systems",
    intro: "Storefronts, sites, and the automation that makes the team smaller and faster.",
    items: [
      {
        href: "/solutions/shopify-ecommerce",
        label: "Shopify e-Commerce",
        blurb: "Built to sell. Designed to scale. Shopify storefronts that turn product into income.",
      },
      {
        href: "/solutions/website-development",
        label: "Website Development",
        blurb: "Digital storefronts that earn trust, capture attention, and drive results.",
      },
      {
        href: "/solutions/marketing-automation",
        label: "Marketing Automation",
        blurb: "Lifecycle, CRM, reporting, and AI workflows that compound.",
        badge: "new",
      },
    ],
  },
  {
    n: "05",
    title: "Talent & Experiential",
    intro: "The people you hire and the moments you stage, built to last and to convert.",
    items: [
      {
        href: "/solutions/recruitment",
        label: "Marketing Recruitment",
        blurb: "Hire right the first time. Outcome-based briefs and a vetted bench.",
        badge: "new",
      },
      {
        href: "/solutions/events-sponsorship",
        label: "Events & Sponsorship",
        blurb: "Activations that show up in the P&L, not just the photos.",
        badge: "new",
      },
    ],
  },
];

export default function SolutionsIndex() {
  return (
    <>
      <section className="relative min-h-[55svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Solutions
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[18ch]">
              Everything you need to grow, scale,{" "}
              <span className="italic font-display-light text-blush">
                and launch
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              Five pillars. Sixteen disciplines. One operating layer,{" "}
              <Link
                href="/pulse-system"
                className="text-blush link-underline"
              >
                The Pulse System™
              </Link>{" "}
              that makes profitable growth repeatable across all of them.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider-line" />

      {/* FLAGSHIP */}
      <section className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
        <Reveal>
          <Link
            href={FLAGSHIP.href}
            className="group block relative rounded-3xl border hairline border-blush/30 bg-gradient-to-br from-blush/10 via-ink-700/40 to-ink-700/40 p-10 sm:p-14 lg:p-16 hover:border-blush transition duration-500 overflow-hidden"
          >
            <div className="absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] bg-hot text-ink px-3 py-1.5 rounded-sm font-bold">
              Flagship
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">
              The full install
            </p>
            <h2 className="font-display text-huge sm:text-mega leading-[0.88] tracking-tightest max-w-[16ch]">
              {FLAGSHIP.name}
            </h2>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-bone/80 leading-relaxed">
              {FLAGSHIP.blurb}
            </p>
            <span className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-blush group-hover:text-bone transition">
              Read the engagement{" "}
              <span className="group-hover:translate-x-1 transition">→</span>
            </span>
          </Link>
        </Reveal>
      </section>

      {/* PILLARS */}
      {PILLARS.map((pillar) => (
        <section
          key={pillar.n}
          className="px-6 sm:px-10 lg:px-14 py-16 sm:py-20 border-t hairline border-t-bone/10"
        >
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-12 items-end mb-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-4">
                  <span className="h-px w-12 bg-blush" />
                  Pillar {pillar.n}
                </div>
                <h2 className="font-display text-big leading-[0.95] tracking-tighter">
                  {pillar.title}
                </h2>
              </div>
              <p className="lg:col-span-5 text-base sm:text-lg text-bone/70 leading-relaxed">
                {pillar.intro}
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillar.items.map((item, i) => (
              <Reveal key={item.href} delay={(i % 3) * 0.05}>
                <li className="h-full">
                  <Link
                    href={item.href}
                    className="group flex flex-col h-full rounded-2xl p-7 lg:p-9 border hairline border-bone/10 bg-ink-600/40 hover:bg-blush hover:text-ink hover:border-blush transition duration-500"
                  >
                    <div className="flex items-center justify-between mb-10 text-[10px] uppercase tracking-[0.3em] opacity-70">
                      <div className="flex items-center gap-2">
                        {item.badge === "new" && (
                          <span className="text-[9px] uppercase tracking-[0.2em] bg-blush/20 text-blush px-1.5 py-0.5 rounded-sm font-bold group-hover:bg-ink group-hover:text-blush">
                            New
                          </span>
                        )}
                        {item.badge === "featured" && (
                          <span className="text-[9px] uppercase tracking-[0.2em] bg-hot/20 text-hot px-1.5 py-0.5 rounded-sm font-bold group-hover:bg-ink group-hover:text-hot">
                            Featured
                          </span>
                        )}
                      </div>
                      <span className="font-display">↗</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tightest leading-[0.95]">
                      {item.label}
                    </h3>
                    <p className="mt-5 text-sm leading-relaxed opacity-80">
                      {item.blurb}
                    </p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </section>
      ))}

      {/* CTA */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
                Not sure which one is right?
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-bone/70 max-w-2xl">
                That&apos;s what the scoping call is for. Tell us the shape of
                the problem and we&apos;ll come back with the right fit, or
                tell you we&apos;re not it.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-3 rounded-full bg-hot text-ink px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blush transition"
              >
                Book a strategy call
                <span className="group-hover:translate-x-1 transition">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
