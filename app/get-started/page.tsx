import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Get Started",
  description:
    "This is where it all starts. Tell us about your business — we'll come back within 1–2 business days.",
};

const INFO = [
  { label: "Reply time", value: "1–2 business days" },
  { label: "Hours", value: "Mon–Fri · 09:00–18:00 GST" },
  { label: "Email", value: "hello@madanyco.com" },
];

export default function GetStartedPage() {
  return (
    <>
      <section className="relative min-h-[60svh] flex items-end pt-32 pb-16 px-6 sm:px-10 lg:px-14">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blush/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
              <span className="h-px w-12 bg-blush" />
              Get Started
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-mega leading-[0.85] tracking-tightest max-w-[15ch]">
              This is where it{" "}
              <span className="italic font-display-light text-blush">
                all starts
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-lg sm:text-xl text-bone/70 leading-snug">
              Explore our full range of services, then reach out using the form
              below. Expect to hear back within 1 to 2 business days.{" "}
              <Link
                href="/about"
                className="text-blush link-underline ml-1"
              >
                Or read what we&apos;re about first →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider-line" />

      <section className="px-6 sm:px-10 lg:px-14 py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Info column */}
          <Reveal className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-blush mb-8">
              What to expect
            </p>
            <ul className="grid gap-6">
              {INFO.map((i) => (
                <li
                  key={i.label}
                  className="border-t hairline border-t-bone/10 pt-5"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-bone/50">
                    {i.label}
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-tighter text-bone">
                    {i.value}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 rounded-2xl border hairline border-bone/10 bg-ink-700/60">
              <p className="font-display text-xl tracking-tighter">
                Selective on fit.
              </p>
              <p className="mt-3 text-sm text-bone/70 leading-relaxed">
                We onboard a small number of brands each quarter so the team
                can do real work. If we&apos;re not the right fit, we&apos;ll
                tell you and point you somewhere better.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-8" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
