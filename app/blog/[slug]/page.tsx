import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getAllSlugs, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-24">
      {/* Header */}
      <header className="px-6 sm:px-10 lg:px-14 max-w-4xl mx-auto">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-blush mb-10 hover:text-bone transition"
          >
            <span aria-hidden>←</span> All posts
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          {post.meta.tag && (
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-6">
              {post.meta.tag}
            </p>
          )}
          <h1 className="font-display text-huge leading-[0.9] tracking-tightest">
            {post.meta.title}
          </h1>
          <div className="mt-8 flex items-center gap-5 text-xs uppercase tracking-[0.25em] text-bone/50">
            {post.meta.date && (
              <time>
                {new Date(post.meta.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            )}
            {post.meta.readTime && <span>· {post.meta.readTime}</span>}
          </div>
        </Reveal>
      </header>

      <div className="mt-16 px-6 sm:px-10 lg:px-14 max-w-3xl mx-auto">
        <Reveal>
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Reveal>
      </div>

      <footer className="mt-24 px-6 sm:px-10 lg:px-14 max-w-4xl mx-auto">
        <Reveal>
          <div className="border-t hairline border-t-bone/10 pt-10 flex flex-wrap items-baseline justify-between gap-6">
            <Link
              href="/blog"
              className="text-sm uppercase tracking-[0.25em] text-bone/70 hover:text-blush transition link-underline"
            >
              ← More from the blog
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center gap-3 rounded-full bg-blush text-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-bone transition"
            >
              Work with us →
            </Link>
          </div>
        </Reveal>
      </footer>
    </article>
  );
}
