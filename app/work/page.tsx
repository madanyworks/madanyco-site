import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import VideoPlayer from "@/components/VideoPlayer";
import { IMAGES } from "@/lib/images";
import { BRAND_FILMS, REELS } from "@/lib/videos";

export const metadata = {
  title: "Work",
  description:
    "Selected work across social media management, video production, social media advertising, and website development.",
};

const CATEGORIES = [
  {
    href: "/services/social-media-management",
    title: "Social Media Management",
    img: IMAGES.workSocialMgmt,
  },
  {
    href: "/services/video-production",
    title: "Video Production",
    img: IMAGES.workVideo,
  },
  {
    href: "/services/social-media-advertising",
    title: "Social Media Advertising",
    img: IMAGES.workSMA,
  },
  {
    href: "/services/website-development",
    title: "Website Development",
    img: IMAGES.workWebDev,
  },
];

const SMA_CAMPAIGNS = [
  IMAGES.smaCampaign1,
  IMAGES.smaCampaign2,
  IMAGES.smaCampaign3,
  IMAGES.smaCampaign4,
  IMAGES.smaCampaign5,
  IMAGES.smaCampaign6,
];

type WebsiteCase = {
  name: string;
  url: string;
  liveUrl: string;
  img: string;
};

const WEBSITES: WebsiteCase[] = [
  {
    name: "Aven KSA",
    url: "avensksa.com",
    liveUrl: "https://avensksa.com",
    img: IMAGES.webAvensksa,
  },
  {
    name: "Tiny-OM",
    url: "tiny-om.com",
    liveUrl: "https://tiny-om.com",
    img: IMAGES.webTinyOM,
  },
  {
    name: "Edamah Bahrain",
    url: "edamah.com",
    liveUrl: "https://www.edamah.com",
    img: IMAGES.webEdamah,
  },
  {
    name: "The Foundry · Bahrain",
    url: "thefoundryrestaurants.com",
    liveUrl: "https://thefoundryrestaurants.com/locations/bahrain/",
    img: IMAGES.webFoundry,
  },
];

export default function WorkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Work examples
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[16ch]">
              Work we&apos;re{" "}
              <span className="italic font-display-light text-blush">
                proud of
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              Real campaigns, real sites, real reels. A selection across the
              four disciplines we run for growing brands.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "Social Media Management",
          "Video Production",
          "Social Media Advertising",
          "Website Development",
        ]}
        className="border-y hairline border-y-bone/10 py-6 sm:py-8"
        textClass="font-display text-3xl sm:text-5xl tracking-tightest"
        separator="✦"
      />

      {/* Categories with real visuals from old site */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Areas of expertise
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Four disciplines.{" "}
            <span className="italic font-display-light text-blush">
              One operating system.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.06}>
              <Link
                href={c.href}
                className="group block relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden border hairline border-bone/10"
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 p-7 sm:p-9 flex flex-col justify-between text-bone">
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-80 self-end font-display">
                    ↗
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-blush mb-3">
                      0{i + 1}
                    </p>
                    <h3 className="font-display text-3xl sm:text-4xl tracking-tightest leading-[0.95] group-hover:text-blush transition">
                      {c.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider-line" />

      {/* RECENT CAMPAIGNS — SMA gallery */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Recent campaigns
          </div>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
              Paid social, in the wild.
            </h2>
            <Link
              href="/services/social-media-advertising"
              className="text-sm uppercase tracking-widest text-bone/70 link-underline"
            >
              See the SMA service →
            </Link>
          </div>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl">
            From Meta to Snapchat, TikTok to Google — tailored creative put in
            front of the right audience. Never disrupting. Always
            scroll-stopping.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SMA_CAMPAIGNS.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <div className="group relative aspect-square rounded-2xl overflow-hidden border hairline border-bone/10 bg-ink-600/40">
                <Image
                  src={src}
                  alt={`Campaign creative ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WEBSITES SHIPPED — real case studies */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Websites shipped
          </div>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
              Live & scaling.
            </h2>
            <Link
              href="/services/website-development"
              className="text-sm uppercase tracking-widest text-bone/70 link-underline"
            >
              See the web service →
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {WEBSITES.map((w, i) => (
            <Reveal key={w.url} delay={i * 0.06}>
              <a
                href={w.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border hairline border-bone/10 bg-ink-600/40"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={w.img}
                    alt={w.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tighter group-hover:text-blush transition">
                      {w.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-bone/60">
                      {w.url}
                    </p>
                  </div>
                  <span className="text-blush font-display text-2xl group-hover:translate-x-1 transition">
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO PRODUCTION — brand films */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t hairline border-t-bone/10 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Video production · Brand films
          </div>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
              Films that{" "}
              <span className="italic font-display-light text-blush">
                move people
              </span>
              .
            </h2>
            <Link
              href="/services/video-production"
              className="text-sm uppercase tracking-widest text-bone/70 link-underline"
            >
              See the video service →
            </Link>
          </div>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
            Concept through final cut. Hotel openings, brand stories, founder
            POV pieces — every frame designed with purpose.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {BRAND_FILMS.map((vid, i) => (
            <Reveal key={vid.src} delay={Math.min(i * 0.05, 0.3)}>
              <VideoPlayer video={vid} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* VIDEO PRODUCTION — reels */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Vertical reels & short-form
          </div>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
              Built to stop the scroll.
            </h2>
            <a
              href="https://instagram.com/madanyco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-widest text-bone/70 link-underline"
            >
              See live on Instagram →
            </a>
          </div>
          <p className="mt-6 text-lg text-bone/70 max-w-2xl leading-relaxed">
            Native-format short-form — strategy-led, platform-native, written
            for the algorithm and the audience at the same time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {REELS.map((vid, i) => (
            <Reveal key={vid.src} delay={Math.min((i % 5) * 0.04, 0.2)}>
              <VideoPlayer video={vid} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
                Your brand, next.
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-bone/70 max-w-2xl">
                We onboard a small number of brands each quarter. Bring the
                business, we&apos;ll bring the system.
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
