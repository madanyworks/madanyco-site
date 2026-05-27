import Link from "next/link";
import { cn } from "@/lib/cn";

export type PricingTier = {
  name: string;
  price: string;
  cadence?: string;
  pitch: string;
  features: string[];
  note?: string;
  featured?: boolean;
};

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article
      className={cn(
        "group relative flex flex-col h-full rounded-3xl p-8 sm:p-10 border hairline transition duration-500",
        tier.featured
          ? "bg-blush text-ink border-blush"
          : "bg-ink-600/40 border-bone/10 hover:border-blush/40"
      )}
    >
      {tier.featured && (
        <span className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.3em] bg-ink text-bone px-3 py-1.5 rounded-full">
          Most popular
        </span>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-3xl sm:text-4xl tracking-tighter">
          {tier.name}
        </h3>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-5xl sm:text-6xl tracking-tightest">
          {tier.price}
        </span>
        {tier.cadence && (
          <span className="text-sm opacity-70">{tier.cadence}</span>
        )}
      </div>

      <p
        className={cn(
          "mt-4 text-sm leading-relaxed max-w-[28ch]",
          tier.featured ? "text-ink/80" : "text-bone/70"
        )}
      >
        {tier.pitch}
      </p>

      <ul className="mt-8 space-y-3.5 text-sm">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-3">
            <span
              className={cn(
                "shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full",
                tier.featured ? "bg-ink" : "bg-blush"
              )}
            />
            <span className={tier.featured ? "text-ink/85" : "text-bone/85"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      {tier.note && (
        <p
          className={cn(
            "mt-6 text-xs uppercase tracking-[0.2em]",
            tier.featured ? "text-ink/60" : "text-bone/50"
          )}
        >
          {tier.note}
        </p>
      )}

      <Link
        href="/get-started"
        className={cn(
          "mt-auto pt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] font-semibold",
          tier.featured
            ? "text-ink hover:opacity-70"
            : "text-blush hover:text-bone"
        )}
      >
        Get Started <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
