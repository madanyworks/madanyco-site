import ServiceHero from "@/components/ServiceHero";
import ServiceCTA from "@/components/ServiceCTA";
import Reveal from "@/components/Reveal";

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

      <ServiceCTA
        headline="Let's build something memorable."
        sub="Something that moves your audience — and your numbers."
      />
    </>
  );
}
