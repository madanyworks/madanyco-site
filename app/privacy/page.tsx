import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How MadanyCo collects, uses, and protects information you share with us.",
};

export default function PrivacyPage() {
  return (
    <article className="pt-32 pb-24 px-6 sm:px-10 lg:px-14 max-w-3xl mx-auto">
      <Reveal>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-blush mb-8">
          <span className="h-px w-12 bg-blush" />
          Privacy Policy
        </div>
        <h1 className="font-display text-huge leading-[0.9] tracking-tightest">
          Privacy, in plain English.
        </h1>
      </Reveal>

      <div className="mt-14 prose-blog">
        <p>
          Last updated: 2026. This policy explains what we collect, why, and
          what you can ask us to do with it.
        </p>

        <h2>What we collect</h2>
        <p>
          When you contact us via the form or subscribe to the newsletter, we
          collect your name, email, company name, and the message you send. If
          you visit the site, we collect anonymous, aggregated usage data
          (pages viewed, referrer, device class) to help us improve.
        </p>

        <h2>Why we collect it</h2>
        <ul>
          <li>To respond to your enquiry.</li>
          <li>To send you the newsletter you signed up for.</li>
          <li>To understand how the site is used and improve it.</li>
        </ul>

        <h2>What we don&apos;t do</h2>
        <p>
          We don&apos;t sell your data. We don&apos;t share it with anyone who
          isn&apos;t directly involved in delivering our work to you. We
          don&apos;t add you to marketing lists you didn&apos;t opt into.
        </p>

        <h2>Tools we use</h2>
        <p>
          For analytics and email delivery we use commonly used vendors
          (Vercel, Formspree, and an email service provider). Each one holds
          your data under their own privacy terms.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask us to delete your data, correct it, or send you a copy
          of what we hold. Email{" "}
          <a href="mailto:hello@madanyco.com">hello@madanyco.com</a> and
          we&apos;ll action it within 30 days.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Drop us a line at{" "}
          <a href="mailto:hello@madanyco.com">hello@madanyco.com</a>.
        </p>
      </div>
    </article>
  );
}
