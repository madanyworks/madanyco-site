import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import {
  CASE_STUDIES,
  getAllSlugs,
  getCaseStudy,
} from "@/content/portfolio";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.name} · Corporate Experience`,
    description: study.summary,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const idx = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {study.gallery[0] && (
          <>
            <Image
              src={study.gallery[0]}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50 pointer-events-none" />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative w-full">
          <Reveal>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blush mb-10 hover:text-bone transition"
            >
              <span aria-hidden>←</span> All case studies
            </Link>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-6">
                  <span className="h-px w-12 bg-blush" />
                  Case study
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-display text-huge sm:text-mega leading-[0.85] tracking-tightest">
                  {study.name}
                </h1>
              </Reveal>
              {study.role && (
                <Reveal delay={0.15}>
                  <p className="mt-6 font-display text-lg sm:text-xl text-blush tracking-tight">
                    {study.role}
                  </p>
                </Reveal>
              )}
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-2xl text-lg sm:text-xl text-bone/80 leading-snug">
                  {study.summary}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.25} className="lg:col-span-4 flex lg:justify-end">
              <div className="relative w-32 sm:w-40 lg:w-48 aspect-square bg-bone/[0.04] rounded-2xl border hairline border-bone/10 overflow-hidden">
                <Image
                  src={study.logo}
                  alt={`${study.name} logo`}
                  fill
                  sizes="200px"
                  className="object-contain p-5"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider-line" />

      {/* CONTRIBUTIONS */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Contributions
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            What I built, scaled, or owned.
          </h2>
        </Reveal>

        <ol className="mt-14 grid">
          {study.contributions.map((c, i) => (
            <Reveal key={c.title} delay={Math.min(i * 0.04, 0.4)}>
              <li className="group grid gap-6 lg:grid-cols-12 items-baseline border-t hairline border-t-bone/10 py-9 lg:py-11 hover:bg-ink-700/30 transition">
                <div className="lg:col-span-1">
                  <span className="font-display text-blush text-sm tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="lg:col-span-4 font-display text-2xl sm:text-3xl tracking-tighter leading-tight group-hover:text-blush transition">
                  {c.title}
                </h3>
                <p className="lg:col-span-7 text-bone/80 leading-relaxed">
                  {c.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* GALLERY */}
      {study.gallery.length > 0 && (
        <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 bg-ink-700/40 border-t hairline border-t-bone/10">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              From the work
            </div>
            <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
              A look at the output.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.gallery.map((src, i) => (
              <Reveal key={src} delay={Math.min((i % 6) * 0.05, 0.3)}>
                <div className="group relative aspect-square rounded-2xl overflow-hidden border hairline border-bone/10 bg-ink-600/40">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* NEXT CASE STUDY */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-blush mb-4">
                Next case study
              </p>
              <Link
                href={`/portfolio/${next.slug}`}
                className="group block"
              >
                <h2 className="font-display text-huge leading-[0.9] tracking-tighter group-hover:text-blush transition">
                  {next.name} <span className="inline-block">→</span>
                </h2>
              </Link>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-end">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-bone/30 text-bone px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-bone/5 transition"
              >
                ← All case studies
              </Link>
              <Link
                href="/get-started"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-hot text-ink px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-blush transition"
              >
                Work with us →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
