import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { TEAM } from "@/content/team";

export const metadata = {
  title: "Meet the Team",
  description:
    "The people behind MadanyCo — founder, strategy, performance media, and brand. Small team, deep ownership.",
};

const ETHOS = [
  "We do the work ourselves.",
  "We answer the email.",
  "We own the number.",
  "We say what we see.",
];

export default function TeamPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Meet the team
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[15ch]">
              Small team.{" "}
              <span className="italic font-display-light text-blush">
                Deep ownership.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              No account-management layer. No junior hand-offs. The people who
              answer your email are the people doing the work — strategy,
              media, brand, and creative, by name.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={ETHOS}
        className="border-y hairline border-y-bone/10 py-6 sm:py-8"
        textClass="font-display text-3xl sm:text-5xl tracking-tightest"
        separator="✦"
      />

      {/* TEAM GRID */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          {TEAM.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 2) * 0.08}>
              <article
                id={m.slug}
                className="group relative overflow-hidden rounded-2xl border hairline border-bone/10 bg-ink-700/40 h-full flex flex-col"
              >
                {/* Portrait */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                  {/* Name + role overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-blush mb-3">
                      {m.role}
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tightest leading-[0.9] text-bone">
                      {m.name}
                    </h2>
                  </div>
                </div>

                {/* Bio */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-6 flex-1">
                  <p className="text-base sm:text-lg text-bone/80 leading-relaxed">
                    {m.bio}
                  </p>

                  {m.links && m.links.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-2">
                      {m.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            l.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-xs uppercase tracking-[0.25em] text-bone/70 hover:text-blush transition link-underline inline-flex items-center gap-1"
                        >
                          {l.label}
                          {l.href.startsWith("http") && (
                            <span aria-hidden>↗</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ETHOS BLOCK */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
                <span className="h-px w-12 bg-blush" />
                How we operate
              </div>
              <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
                Small by{" "}
                <span className="italic font-display-light text-blush">
                  design
                </span>
                .
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg text-bone/80 leading-relaxed max-w-2xl">
              <p>
                We onboard a small number of brands each quarter. That cap
                isn&apos;t a marketing line — it&apos;s the only way the
                weekly cadence holds, the reporting actually leads to action,
                and the team you&apos;re reading about above is the team
                doing the work.
              </p>
              <p>
                Each engagement is led by one of us, end-to-end. You&apos;ll
                know whose Slack to ping at 8am — and you&apos;ll get an
                answer.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
                Like the shape of the team?
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-bone/70 max-w-2xl">
                Let&apos;s see if your brand fits the calendar. Fractional CMO,
                growth audits, or end-to-end engagement — start with a 20-min
                scoping call.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/get-started"
                className="group inline-flex items-center gap-3 rounded-full bg-hot text-ink px-7 py-4 text-sm font-bold uppercase tracking-widest hover:bg-blush transition"
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
