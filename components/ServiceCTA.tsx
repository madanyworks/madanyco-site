import Link from "next/link";
import Reveal from "./Reveal";

export default function ServiceCTA({
  headline = "Ready to move?",
  sub,
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 border-t hairline border-t-bone/10">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
              {headline}
            </h2>
            {sub && (
              <p className="mt-6 text-lg sm:text-xl text-bone/70 max-w-2xl leading-relaxed">
                {sub}
              </p>
            )}
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-3 rounded-full bg-hot text-ink px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blush transition"
            >
              Get Started
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
