import Image from "next/image";
import Reveal from "./Reveal";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  hook: string;
  accent?: string;
  /** Optional background image URL. Renders with a darkening overlay so type stays legible. */
  bgImage?: string;
};

export default function ServiceHero({
  eyebrow,
  title,
  hook,
  accent,
  bgImage,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[80svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14 overflow-hidden">
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40 pointer-events-none" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative w-full">
        <Reveal>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
            <span className="h-px w-12 bg-blush" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[16ch]">
            {title}
            {accent && (
              <>
                {" "}
                <span className="italic font-display-light text-blush">
                  {accent}
                </span>
              </>
            )}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
            {hook}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
