import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";
import { BRAND_FILMS, REELS, HERO_VIDEOS } from "@/lib/videos";
import Link from "next/link";

export const metadata = {
  title: "Video Production",
  description:
    "Strategic video content that captures attention — and converts. From concept to final cut, tailored to feel native to your platforms.",
};

const FORMATS = [
  {
    n: "01",
    title: "Live-Action Promotional",
    body: "Brand films, product launches, and campaign hero pieces — shot, directed, and edited end-to-end.",
  },
  {
    n: "02",
    title: "Short-Form Social",
    body: "Native-feeling cuts for Instagram, TikTok, and YouTube Shorts. Built for the algorithm, written for humans.",
  },
  {
    n: "03",
    title: "Performance Creative",
    body: "Ad-first videos engineered around hooks, angles, and decision rules. Designed to test, iterate, and scale.",
  },
  {
    n: "04",
    title: "Founder & Brand POV",
    body: "Interview-led content that earns trust. Real voices, real perspective, lit and edited to look the part.",
  },
];

const PROCESS = [
  { n: "01", title: "Concept", body: "Strategy + script + storyboard." },
  { n: "02", title: "Pre-Production", body: "Casting, locations, scheduling, shot lists." },
  { n: "03", title: "Production", body: "Direction, lighting, sound, multi-platform formats." },
  { n: "04", title: "Post", body: "Edit, color, sound, motion graphics, deliverables." },
];

export default function Page() {
  return (
    <>
      <ServiceHero
        eyebrow="Video Production"
        title="Elevate your brand through"
        accent="visual storytelling."
        hook="At MadanyCo™, we don't just create videos — we craft moments that move people. From concept to final cut, every frame is designed with purpose: to engage, to convert, and to elevate your brand where it matters most."
      />

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <h2 className="lg:col-span-7 font-display text-huge leading-[0.9] tracking-tighter">
              Native to your platforms. Built for your numbers.
            </h2>
            <p className="lg:col-span-5 text-lg text-bone/75 leading-relaxed">
              Whether you&apos;re a growing business or a large-scale brand, our
              video services help you communicate your story in a way that&apos;s
              clear, captivating, and impossible to ignore — Instagram, TikTok,
              YouTube, and beyond.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {FORMATS.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.07}>
              <article className="group h-full p-8 lg:p-10 rounded-2xl border hairline border-bone/10 bg-ink-600/40 hover:bg-blush hover:text-ink transition duration-500">
                <span className="font-display text-blush text-sm group-hover:text-ink/70">
                  {f.n}
                </span>
                <h3 className="mt-8 font-display text-3xl tracking-tighter leading-tight">
                  {f.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed opacity-80">
                  {f.body}
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
            How we work
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
            Concept → Cut → Compounding results.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-4 border hairline">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05} className="bg-ink">
              <li className="h-full p-8 lg:p-10 hover:bg-ink-600 transition">
                <span className="font-display text-blush text-sm">{p.n}</span>
                <h3 className="mt-8 font-display text-2xl tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-bone/70 leading-relaxed text-sm">
                  {p.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* SHOWCASE — Brand films */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Selected brand films
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-4xl">
            Press play.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {BRAND_FILMS.map((vid, i) => (
            <Reveal key={vid.src} delay={Math.min(i * 0.05, 0.3)}>
              <VideoPlayer video={vid} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SHOWCASE — Reels */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Short-form reels
          </div>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
              Native to the feed.
            </h2>
            <Link
              href="/work"
              className="text-sm uppercase tracking-widest text-bone/70 link-underline"
            >
              See all work →
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {REELS.map((vid, i) => (
            <Reveal key={vid.src} delay={Math.min((i % 5) * 0.04, 0.2)}>
              <VideoPlayer video={vid} />
            </Reveal>
          ))}
        </div>
      </section>

      <ServiceCTA
        headline="Let's build something memorable."
        sub="Something that moves your audience — and your numbers."
      />
    </>
  );
}
