# MadanyCo.com — Full Website Rebuild Brief

## Project Overview

Rebuild madanyco.com as a modern, high-impact Next.js site. Keep ALL existing copy/content. Completely redesign the visual presentation, layout, and interaction design.

**Deploy target:** Vercel (free tier)
**Framework:** Next.js 14+ (App Router)
**Styling:** Tailwind CSS + custom CSS for animations
**Fonts:** Google Fonts — pick distinctive, bold display + refined body pairing (NOT Inter, Roboto, or Arial)
**Mobile-first:** Fully responsive

---

## Design Direction

**Aesthetic DNA: weareorgans.com × essencemediacom.com**

From **weareorgans.com** (Organs agency):
- Dark background (#0a0a0a or similar near-black)
- Bold, oversized typography (massive hero text)
- Scrolling marquee strips (like their "DROP US A LINE" ticker)
- Edgy, personality-driven, "agency with guts" energy
- High contrast — white/cream text on dark backgrounds
- Minimal navigation, full-screen sections
- Playful micro-interactions on hover

From **essencemediacom.com** (EssenceMediacom):
- Clean, structured service layouts
- Professional credibility without being boring
- Data-driven positioning feels trustworthy
- Card-based service grids
- Subtle gradient accents
- Polished footer with clear link structure

**The fusion:** Dark, bold, personality-first (Organs) with structured, professional substance (EssenceMediacom). Think: a premium creative agency that also clearly knows business numbers.

**Brand color palette:**
- Primary background: near-black (#0a0a0a)
- Text: off-white (#f5f0eb) or warm cream
- Accent: dusty rose/blush (#c9a090 or #d4a89a) — MadanyCo uses pink/blush tones in current branding
- Secondary accent: warm sand (#f0e0d0) for highlights
- CTA/links: bright accent (could be a warm coral or the blush pushed brighter)

**Logo:** The MadanyCo.™ logo is text-based. Use the brand name "MadanyCo." with the ™ in the same style. Current logo images are at:
- https://images.squarespace-cdn.com/content/v1/661a7738fccca74e60de4f1a/c44c566c-85ba-4be8-8a88-152941185993/Madanyco+logo..png (dark version)
- https://images.squarespace-cdn.com/content/v1/661a7738fccca74e60de4f1a/ee510c12-bce6-405a-be78-d9985225993b/Madanyco+logo..png (light version)

---

## Site Structure (Pages to Build)

### 1. HOME PAGE (/)

**Hero section:**
- Full-viewport dark background
- Massive display headline: "Market for people, not at people."
- Animated scrolling marquee strip (like Organs) with rotating phrases:
  - "Raise conversions without raising spend."
  - "We steer by unit economics."
  - "We fix broken funnels for a living."
  - "Make your Ads pay for themselves."
  - "Repeatable systems for DTC growth."
- Single CTA button: "Get Started" → links to /get-started

**The Problem section:**
- Heading: "THE PROBLEM"
- Copy: "Growth gets messy when there's no system. You're doing 'marketing' every day: posting, boosting, testing ads, sending emails; yet results still feel random, and at some point they stop. Growth gets atrophied. You haven't stopped being creative, you just need a consistent system that is repeatable and brings predictable growth."
- "At MadanyCo, we believe that growth is in the doing... in the volume of actions taken per unit of time."
- List of pain points (styled as a visual grid or bold callouts, NOT bullet points):
  - "Chasing ROAS week to week"
  - "Burning through creatives with no learnings"
  - "Discounting to hit targets"
  - "Guessing what's actually driving sales"
  - "Spending time you don't have"
- "We fix all that by installing The Pulse System™"

**The Promise section:**
- Heading: "THE PROMISE"
- Subheading: "Stop guessing. Start scaling with The Pulse System™."
- Copy: "Your custom-built operating system, designed for profitable GROWTH. This is the heartbeat of your growth: daily action driven by a clear financial plan."
- "The Pulse System™ is your (Financial Plan + Marketing Plan) × Daily Workflow."
- Feature list (styled as icon cards or grid — NOT bullets):
  - "A clear growth plan (what to do, in what order, and why)"
  - "A creative testing engine (pillars & angles → hooks → iterations → winners)"
  - "Channels execution (Meta/TikTok/Google/Snap + website alignment)"
  - "Lifecycle revenue (Email/SMS flows + campaigns that lift LTV)"
  - "Reporting you can trust (CAC targets, MER, contribution margin guardrails)"

**Social proof / Instagram embed section:**
- Grid of 3 Instagram-style cards with captions (or a horizontal scroll strip)
- Use the existing MadanyCo Instagram content imagery

**Closing marquee:** (like Organs)
- "The feed rewards rhythm. The P&L rewards discipline. The Pulse System™ builds both."

**Email signup strip:**
- "We don't spam, promise." + email input + sign up button

**Footer:** (see footer section below)

---

### 2. ABOUT PAGE (/about)

**Hero:** Full-width image or dark section with heading: "Built for profitable growth, not louder marketing"

**Content sections (use alternating layout — full-width text blocks with generous whitespace):**

- **Who are we?** — "MadanyCo is a profit-first growth partner for DTC and e-commerce brands. We help teams scale with clarity by steering from business unit economics, building a plan you can actually run, and operating a weekly cadence that turns reporting into decisions. We do not chase vanity metrics. We protect margin and cash flow. We make growth repeatable."

- **Why we exist?** — "Most brands do not fail because they lack ideas. They stall because the operating system is missing. Budgets move without guardrails. Reporting gets shared but nothing changes. Teams react to platform noise instead of controlling the levers that drive business profit. MadanyCo exists to fix this. We turn your numbers into a system: clear targets, clear pacing, clear accountability. Then we run it with you."

- **What makes us different?** (use a 2-column or card layout):
  - "We lead with unit economics" — "We start with contribution margin, allowable CAC, MER, and payback windows. ROAS is a diagnostic. Profitability is the goal."
  - "We operate with a cadence" — "Daily checks. Weekly decisions. Monthly pivots. You will always know: what is working, what is not, what we are changing, and why."
  - "You get the system, not a black box" — "Scorecards, marketing & financial plans, pacing rules, and reporting formats you can own."

- **Our Principles** (styled as large text or a vertical list with emphasis):
  - "Clarity beats complexity."
  - "Cash flow is a KPI."
  - "Guardrails create freedom."
  - "Pacing protects profit."
  - "Reporting should lead to action."
  - "Consistency compounds."

- **Our Pulse™** section:
  - P — Perspective: "Great marketing earns attention with clarity, taste, and a point of view."
  - U — Unit Economics: "We build from unit economics. Every campaign has a target, a decision rule, and a next action."
  - L+S — Loops & Systems: "The Pulse System keeps teams aligned to a weekly cadence."
  - E — Ethics: "Marketing should create momentum that compounds."

- **Who we work best with?** — "Brands that care about margin and cash flow. Teams that want structure and pace. People who prefer clear communication, clean reporting, and direct accountability."

---

### 3. SERVICES DROPDOWN → Individual Service Pages

**Services to build (each as its own page):**

1. `/services/social-media-management` — Social Media Management
2. `/services/social-media-advertising` — Social Media Advertising
3. `/services/video-production` — Video Production
4. `/services/tiktok-ads` — TikTok Ads
5. `/services/coaching-training` — Coaching & Training
6. `/services/shopify-ecommerce` — Shopify e-Commerce Website Development
7. `/services/website-development` — Website Development
8. `/services/google-ads` — Google Ads

**Service page template (apply to all):**
- Hero: Service name (massive text) + one-line hook
- Body: Existing copy from current site (I will provide separately or Claude Code can fetch from current URLs)
- If pricing exists (like the SPARK/LIFT/SCALE packages on Social Media Advertising): display as pricing cards
- CTA: "Get Started" button → /get-started

**Social Media Advertising pricing to include:**
- SPARK: $1,500 USD — single campaign, 1 platform, monitoring & reporting
- LIFT: $2,100 USD — performance campaign, up to 2 platforms
- (Include any additional tiers from the current site)

**Coaching & Training page** — This is a key page. It has extensive copy about fractional CMO / marketing coaching. Keep ALL the existing copy sections:
- "You need coaching if... you're committing random acts of marketing"
- "You need coaching if... you're running the business AND the marketing"
- "You need coaching if... your business isn't growing"
- "You need coaching if... your business has blind spots"
- "You need coaching if... you need freedom, not just revenue"

---

### 4. GET STARTED PAGE (/get-started)

- Heading: "This is where it all starts."
- Subtext: "Explore our full range of services above, then reach out using the form. Expect to hear back within 1 to 2 business days."
- Contact form: Name, Email, Company, Service interested in (dropdown), Message, Submit button
- The form can use Formspree, Web3Forms, or similar for the backend (no server needed)

---

### 5. WORK EXAMPLES PAGE (/work)

- Grid gallery layout
- For now, placeholder cards with "Coming soon" or pull from current site's work examples
- Each card: image + project title + brief description

---

### 6. PORTFOLIO PAGE (/portfolio)

- Corporate experience / credentials page
- Pull content from current /corporateexperience page
- Clean timeline or card layout

---

### 7. DAILY BLOG (/blog)

- Blog listing page with cards
- Individual blog post template
- For MVP: use MDX or markdown files in the repo for blog posts
- Design: clean, readable, generous whitespace, dark theme

---

## Global Components

### Navigation
- Fixed top nav, transparent on hero, solid on scroll
- Logo (left) — "MadanyCo.™"
- Links (right): Services (dropdown), About, Work, Portfolio, Blog, Get Started (CTA button)
- Mobile: hamburger menu → full-screen overlay (dark, large links)

### Footer
- Dark background (darker than body)
- 3 columns:
  - LEARN: About, Daily Blog, Privacy Policy, Terms of Service
  - CONNECT: LinkedIn, Instagram, X (Twitter)
  - NEWSLETTER: Email signup form
- Bottom: "MadanyCo.™" + copyright

### Scrolling Marquee Component
- Reusable. Takes an array of strings. Renders as infinite horizontal scroll.
- Used on homepage hero, between sections, and on coaching page.

---

## Technical Requirements

- **Next.js 14+ App Router** (not Pages Router)
- **Tailwind CSS** for utility styling
- **Custom CSS** for animations (marquee, scroll reveals, hover effects)
- **Google Fonts** — pick something bold and distinctive. Suggestions (but choose what fits best):
  - Display: "Clash Display", "Cabinet Grotesk", "Satoshi", or similar
  - Body: "General Sans", "Switzer", or similar
  - (Use Fontsource or next/font for optimization)
- **Framer Motion** for page transitions and scroll-triggered animations
- **Responsive:** Mobile-first. Must look great on phone, tablet, desktop.
- **SEO:** Proper meta tags, Open Graph, structured data
- **Performance:** Optimize images (next/image), lazy loading, minimal JS bundle
- **Deployment:** Vercel-ready (vercel.json not needed for Next.js)

---

## What NOT to do

- No generic templates. This should feel custom-designed.
- No light/white backgrounds on main pages. Dark theme throughout.
- No Inter, Roboto, Arial, or system fonts.
- No purple gradients. No generic SaaS aesthetics.
- No stock photo heroes. Use solid color backgrounds with bold typography instead.
- No cluttered layouts. Generous whitespace. Let the content breathe.

---

## Deployment Instructions

1. `npx create-next-app@latest madanyco-site --typescript --tailwind --app`
2. Build all pages and components
3. `npm run build` to verify no errors
4. Push to GitHub
5. Connect to Vercel → auto-deploys on push
6. Point madanyco.com DNS to Vercel (user will do this when ready)

---

## Summary

Build a complete, production-ready Next.js website for MadanyCo that:
- Keeps all existing copy and content
- Transforms the visual design to match the bold, dark, personality-driven style of weareorgans.com fused with the professional structure of essencemediacom.com
- Is fully responsive, fast, and SEO-optimized
- Deploys to Vercel with zero configuration needed
