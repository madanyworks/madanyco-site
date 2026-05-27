# MadanyCo.™ — Next.js Rebuild

Profit-first growth partner site for DTC and e-commerce brands. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Designed dark, bold, personality-first.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build & Deploy

```bash
npm run build
npm run start
```

Deployed to Vercel — push to `main` and Vercel auto-deploys. Point `madanyco.com` DNS at Vercel when ready.

## Project Structure

```
app/
  layout.tsx               # Global shell — fonts, nav, footer
  page.tsx                 # Homepage
  globals.css              # Tailwind + custom CSS
  about/                   # /about
  get-started/             # /get-started (contact form)
  work/                    # /work (work examples)
  portfolio/               # /portfolio (corporate experience)
  blog/                    # /blog + /blog/[slug]
  services/                # 8 service pages
components/
  Nav.tsx                  # Fixed top nav + mobile overlay
  Footer.tsx               # 3-column dark footer
  Marquee.tsx              # Reusable infinite-scroll strip
  EmailSignup.tsx          # Newsletter input
  ContactForm.tsx          # Get Started form
  ServicePage.tsx          # Shared service-page shell
  PricingCard.tsx          # Pricing tier card
content/
  blog/                    # Markdown posts
lib/
  blog.ts                  # MD reader for /blog
```

## Fonts

- Display: **Bricolage Grotesque** (Google Fonts, via `next/font`)
- Body: **DM Sans** (Google Fonts, via `next/font`)

## Contact Form

`components/ContactForm.tsx` posts to a [Formspree](https://formspree.io) endpoint. Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`:

```
NEXT_PUBLIC_FORMSPREE_ID=xyzabcd
```

Without it, the form falls back to a `mailto:` action.
