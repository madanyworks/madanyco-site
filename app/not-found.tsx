import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80svh] flex items-center px-6 sm:px-10 lg:px-14 pt-32 pb-20">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">
          404 · Lost in the feed
        </p>
        <h1 className="font-display text-mega leading-[0.85] tracking-tightest">
          That page took a{" "}
          <span className="italic font-display-light text-blush">
            scroll break
          </span>
          .
        </h1>
        <p className="mt-10 max-w-xl text-lg text-bone/70">
          The link you followed isn&apos;t there anymore — or maybe never was.
          Try one of the doors below.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-full bg-bone text-ink px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-blush transition"
          >
            Back to home
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-bone/30 text-bone px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-bone/5 transition"
          >
            See services
          </Link>
        </div>
      </div>
    </section>
  );
}
