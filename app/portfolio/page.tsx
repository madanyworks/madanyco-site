import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/images";

export const metadata = {
  title: "Portfolio · Corporate Experience",
  description:
    "Corporate experience of Abdalrahman Madany — projects directly undertaken or managed across Snap Inc., Genpact EMEA, Seissense, Hype, Buffalo Burger, and more.",
};

type CorporateProject = {
  name: string;
  img: string;
};

const PROJECTS: CorporateProject[] = [
  { name: "Seissense", img: IMAGES.ceSeissense },
  { name: "Snap Inc. (Snapchat)", img: IMAGES.ceSnap },
  { name: "Genpact EMEA", img: IMAGES.ceGenpact },
  { name: "Hype Energy Drinks", img: IMAGES.ceHype },
  { name: "Buffalo Burger", img: IMAGES.ceBuffalo },
  { name: "LongeBlack", img: IMAGES.ceLongeBlack },
  { name: "Roma Pizza To Go", img: IMAGES.ceRomaPizza },
  { name: "WILLNWILLY", img: IMAGES.ceWillnWilly },
  { name: "UGO Beverages", img: IMAGES.ceUGO },
  { name: "HAC", img: IMAGES.ceHAC },
];

const CAPABILITIES = [
  "Strategic Marketing Planning",
  "Digital Marketing",
  "Creative & Branding",
  "Public Relations",
  "Market Research & Analysis",
  "Email Marketing",
  "CRM",
  "E-Commerce",
  "Mobile Marketing",
  "Influencer & Affiliate Marketing",
];

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Corporate Experience
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[18ch]">
              Brands the founder has{" "}
              <span className="italic font-display-light text-blush">
                shipped for
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              A portfolio of projects directly undertaken or managed by
              MadanyCo&apos;s founder, Abdalrahman Madany — across global
              brands, regional leaders, and high-growth startups.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider-line" />

      {/* CLIENT LOGO GRID */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Selected brands
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            Ten brands.{" "}
            <span className="italic font-display-light text-blush">
              One operating logic.
            </span>
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-bone/10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border hairline">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 5) * 0.05} className="bg-ink">
              <li className="group relative aspect-square overflow-hidden bg-bone/[0.03]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-6 sm:p-8 transition duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-bone/0 group-hover:text-bone/90 transition duration-500">
                    {p.name}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* CAPABILITIES */}
      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32 bg-ink-700/40">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            Core competencies
          </div>
          <h2 className="font-display text-huge leading-[0.9] tracking-tighter max-w-3xl">
            What I bring to the table.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-bone/10 sm:grid-cols-2 lg:grid-cols-5 border hairline">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c} delay={(i % 5) * 0.04} className="bg-ink">
              <li className="h-full p-6 lg:p-7 hover:bg-ink-600 transition">
                <p className="font-display text-lg lg:text-xl tracking-tighter leading-tight">
                  {c}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* DISCLAIMER */}
      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">
              A note on attribution
            </p>
            <p className="text-base sm:text-lg text-bone/70 leading-relaxed">
              This portfolio section showcases projects either directly
              undertaken or managed by Abdalrahman Madany, our Founder. This is
              the individual portfolio of our Founder who has shaped the
              agency. Some projects here may have been completed during previous
              full-time employment — the stakeholders of those companies were
              involved in the collaborative process. Therefore, while the
              projects reflect the expertise and contributions of AM, they are
              not solely attributed to MadanyCo.™ agency. We acknowledge the
              collaborative nature of the industry and aim to transparently
              represent the diverse range of experiences and contributions that
              have shaped our portfolio of experience.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28 border-t hairline border-t-bone/10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-huge leading-[0.9] tracking-tighter">
                Want to put this to work?
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-bone/70 max-w-2xl">
                Fractional CMO engagements, growth audits, or team training —
                tell us the shape of the problem and we&apos;ll come back with
                a fit.
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
