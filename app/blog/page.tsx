import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Daily Blog",
  description:
    "Notes from the front lines of profitable growth — unit economics, creative testing, lifecycle, and the operating systems behind compounding brands.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative min-h-[55svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Daily Blog
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[16ch]">
              Notes from the{" "}
              <span className="italic font-display-light text-blush">
                front lines
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              Unit economics, creative testing, lifecycle marketing, and the
              operating systems behind compounding brands.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
        {posts.length === 0 ? (
          <p className="text-bone/60 text-lg">
            New writing landing here soon. Subscribe below to be notified.
          </p>
        ) : (
          <ol className="grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.04}>
                <li>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block group border-t hairline border-t-bone/10 py-10 lg:py-12"
                  >
                    <div className="grid gap-6 lg:grid-cols-12 items-baseline">
                      <div className="lg:col-span-2 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-bone/50">
                        {p.date && (
                          <time>
                            {new Date(p.date).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </time>
                        )}
                      </div>
                      <div className="lg:col-span-7">
                        {p.tag && (
                          <p className="text-xs uppercase tracking-[0.3em] text-blush mb-4">
                            {p.tag}
                          </p>
                        )}
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tightest leading-[0.95] text-bone group-hover:text-blush transition">
                          {p.title}
                        </h2>
                        {p.excerpt && (
                          <p className="mt-4 text-bone/70 max-w-xl leading-relaxed">
                            {p.excerpt}
                          </p>
                        )}
                      </div>
                      <div className="lg:col-span-3 flex lg:justify-end items-baseline gap-4 text-xs uppercase tracking-[0.25em]">
                        {p.readTime && (
                          <span className="text-bone/50">{p.readTime}</span>
                        )}
                        <span className="text-blush group-hover:translate-x-1 transition">
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ol>
        )}
      </section>
    </>
  );
}
