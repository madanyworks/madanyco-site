import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import PricingCard, { PricingTier } from "@/components/PricingCard";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Shopify e-Commerce Website Development",
  description:
    "Shopify isn't just a platform. It's your launchpad. We help founders go from idea to income with sleek storefronts, seamless checkout, and revenue-ready eCommerce.",
};

const TIERS: PricingTier[] = [
  {
    name: "STARTER",
    price: "$1,399",
    cadence: "USD",
    pitch: "Perfect for bold beginnings.",
    features: [
      "Up to 10 products",
      "Theme customization",
      "Custom domain setup",
      "Basic store configuration",
      "Social channel integration",
      "Mobile app setup",
      "2 hours of training",
    ],
  },
  {
    name: "GROWTH",
    price: "$2,900",
    cadence: "USD",
    featured: true,
    pitch: "For businesses ready to scale.",
    features: [
      "Up to 20 products",
      "Premium templates",
      "Advanced app installs (reviews, upsells, etc.)",
      "On-page SEO foundations",
      "Pixel & tracking setup",
      "Email + lifecycle integrations",
      "Up to 4 hours of training",
    ],
  },
  {
    name: "CUSTOM",
    price: "TBC",
    cadence: "scoped",
    pitch: "For businesses with unique requirements.",
    features: [
      "Unlimited products",
      "Fully custom theme & sections",
      "Multi-currency / multi-language",
      "Marketplace & ERP integrations",
      "Headless or hybrid architecture",
      "Migration from other platforms",
    ],
  },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Attention Business Owner"
        title="Got a product to sell?"
        accent="Let's get it online — fast."
        hook="Shopify isn't just a platform. It's your launchpad. With MadanyCo.™ as your Shopify Partner, you're not just building an eCommerce store — you're building a brand that converts. Sleek storefronts, seamless checkout, and the backend tech that keeps your store running while you sleep."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="lg:col-span-5 font-display text-big leading-[0.95] tracking-tighter">
              Built to sell.
              <br />
              Designed to scale.
            </h2>
            <div className="lg:col-span-7 space-y-6 text-lg text-bone/80 leading-relaxed max-w-2xl">
              <p>
                We help founders and fast-growing businesses go from idea to
                income. Whether you&apos;re launching your first product or
                migrating from a clunky system, we handle the setup, design,
                and marketing integrations — so you can focus on selling.
              </p>
              <p className="text-bone">
                No fluff. Just beautiful, scalable, revenue-ready eCommerce.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Shopify eCommerce Packages
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Pick the{" "}
            <span className="italic font-display-light text-blush">
              launchpad
            </span>
            .
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

      <ServiceCTA
        headline="Turn your product into a powerhouse."
        sub="Book a free consultation. Bring product, ambition, and timeline — we'll bring the build plan."
      />
    </>
  );
}
