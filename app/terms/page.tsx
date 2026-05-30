import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern using madanyco.com and engaging MadanyCo for services.",
};

export default function TermsPage() {
  return (
    <article className="pt-32 pb-24 px-6 sm:px-10 lg:px-14 max-w-3xl mx-auto">
      <Reveal>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
          <span className="h-px w-12 bg-blush" />
          Terms of Service
        </div>
        <h1 className="font-display text-huge leading-[0.9] tracking-tightest">
          The fine print, kept short.
        </h1>
      </Reveal>

      <div className="mt-14 prose-blog">
        <p>Last updated: 2026.</p>

        <h2>Using the site</h2>
        <p>
          You&apos;re welcome to browse, share, and link to madanyco.com. The
          content (copy, designs, brand marks) is © MadanyCo unless otherwise
          credited, please don&apos;t republish without asking.
        </p>

        <h2>Engaging us for work</h2>
        <p>
          When we work together, the terms of the engagement are set out in a
          signed scope of work or master services agreement. Nothing on this
          site replaces that document.
        </p>

        <h2>Newsletter & communications</h2>
        <p>
          Subscribing is opt-in. You can unsubscribe at any time using the
          link in any email we send.
        </p>

        <h2>No guarantees</h2>
        <p>
          We work hard and we&apos;re proud of the results we get for clients.
          That said, marketing performance depends on many variables outside
          our control. Anyone promising guaranteed outcomes is overpromising.
        </p>

        <h2>Changes</h2>
        <p>
          We&apos;ll update these terms occasionally. The &ldquo;Last
          updated&rdquo; date at the top will always reflect the most recent
          revision.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:hello@madanyco.com">hello@madanyco.com</a>.
        </p>
      </div>
    </article>
  );
}
