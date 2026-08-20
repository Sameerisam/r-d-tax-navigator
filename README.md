# R&D Tax Navigator

Lovable Build Prompt — R&D Tax Credit Virtual Assistant Services Website

Business concept analyzed from the reference site: a solo/boutique Virtual Assistant service specializing in R&D Tax Credit claim preparation for businesses, CPAs, and tax consultants in the Philippines (BIR, BOI, PEZA, CREATE Act context). The original site is a cluttered, outdated WordPress page with no clear structure, weak trust signals, and no real conversion path. This prompt rebuilds the same business idea as a clean, modern, credible, conversion-focused website.

Copy everything below into Lovable as your first prompt.

PROJECT BRIEF

Build a modern, professional, SEO-optimized marketing website for "Levina & Associates" (placeholder name — editable), a Virtual Assistant service that helps businesses, accountants, and tax consultants prepare and manage R&D Tax Credit claims under the Philippines' CREATE Act (BOI/PEZA-registered companies, BIR compliance).

The site must feel like a premium professional services brand (think: boutique consulting / fintech-adjacent trust), not a generic freelancer page. Primary goal: convert visitors (business owners, CPAs, tax consultants) into booked consultations / inquiry form submissions.

Tech stack: React + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion for animations. Fully responsive (mobile-first). Frontend-only for this MVP — use local state for the contact form (no backend yet), show a success toast/confirmation on submit.

BRAND & DESIGN DIRECTION

Tone: Trustworthy, precise, professional, approachable — not corporate-cold, not casual.

Color palette: Deep navy (#0B1E3D or similar) as primary, paired with a confident accent — emerald/teal green (#0F9D6B) to signal "financial growth / savings / approval," plus warm neutral off-white backgrounds (#F7F8FA) and slate gray text (#334155). Avoid generic blue-on-white SaaS look — make it feel like a finance/legal boutique.

Typography: A modern serif or semi-serif for headlines (e.g., "Fraunces," "Source Serif 4," or "Playfair Display") paired with a clean sans-serif for body (e.g., "Inter" or "Manrope") — this pairing signals expertise + approachability, avoiding the "generic startup" template look.

Visual style: Generous white space, soft shadows, rounded-xl cards, subtle grid/dot background textures, small iconography (line icons, not emoji — the reference site overused emoji, avoid that entirely).

Imagery: Use abstract financial/document illustrations, subtle line-art icons for documents/checklists/calculators, and professional placeholder photography style (no stock-y clipart).

SITE STRUCTURE & SECTIONS

1. Sticky Navigation Bar

Logo (left) + text wordmark

Links: Services | How It Works | Why Us | FAQ | Contact

Phone number with icon (click-to-call)

Primary CTA button: "Book Free Consultation" (accent color, always visible)

Transparent on hero, solid white with shadow on scroll (animated transition)

2. Hero Section

Eyebrow label: "R&D Tax Credit Specialists — Philippines"

Headline (serif, large): something like "Maximize Your R&D Tax Incentives — Without the Paperwork Headache"

Subheadline: one or two sentences on helping BOI/PEZA-registered companies and their accountants claim CREATE Act R&D incentives with full documentation support

Two CTAs: primary "Book a Free Consultation", secondary "See How It Works" (scrolls down)

Right side: animated illustration or stat-card mockup showing example claim savings / document checklist widget

Trust bar beneath hero: small row of trust markers (e.g., "BIR-aligned process," "CREATE Act compliant," "Confidential & Secure," "Fast turnaround") with icons

Subtle fade/slide-up entrance animation on load; parallax or gentle float on the hero graphic

3. Problem/Pain Section ("Why R&D Claims Are Hard")

Short intro line

4 cards in a grid, each with icon + short title + 1-line description, covering: identifying qualifying R&D activities, tracking eligible costs, preparing technical/financial reports, coordinating with BIR and investment agencies

Animate cards with staggered fade-in on scroll

4. Services Section

Section title: "What I Handle For You" / "Our Services"

4–6 service cards (icon + title + short description), covering:

Data Collection & Organization

Documentation & Report Support

Research & Compliance Monitoring

Project & Claim Coordination

Financial/Cost Tracking Support

Communication with Tax Advisors & Agencies

Hover effect: card lifts with shadow + accent border on hover

Optional: toggle/tab layout so it doesn't feel like a wall of cards

5. How It Works (Process Timeline)

Horizontal (desktop) / vertical (mobile) 4-step timeline with connecting line and animated progress-fill on scroll

Steps: 1) Free Consultation → 2) Document & Data Collection → 3) Report Preparation & Review → 4) Submission & Follow-up Coordination

Each step: number badge, title, 1–2 line description

6. Why Choose Us / Credentials Section

Split layout: left = short bio/credibility copy, right = experience highlights as a clean vertical list or timeline (Logistics VA, Service Administrator/BRP Advisor, Marketing Assistant, Telemarketer, Auditor — reframed as relevant capability statements, not a resume dump: e.g., "5+ years in claims processing, reporting & compliance coordination across automotive and logistics industries")

Include 3–4 stat highlights in animated counters (e.g., "Years of Experience," "Reports Prepared," "Industries Served," "Response Time")

7. Who This Is For

3 audience cards: Business Owners (BOI/PEZA-registered), Accountants & CPAs, Tax Consultants — each with a short "how we help you specifically" blurb

8. Testimonials / Social Proof (placeholder content, clearly marked as sample)

Carousel or 3-card grid with quote, name, role/company, subtle star rating

Fade/slide transition animation

9. FAQ Section

Accordion (shadcn Accordion component) with 5–6 common questions: What qualifies as R&D under CREATE Act? What documents do I need? How long does the process take? Do you work directly with BIR? Is my data confidential? What industries do you support?

10. Final CTA / Contact Section

Strong closing headline: "Ready to Maximize Your R&D Tax Incentives?"

Contact form (Name, Email, Company, Message/Claim details) — client-side validation, success state with animated checkmark/toast, no real backend submission needed for MVP

Sidebar/adjacent info: phone number, email, response-time expectation, confidentiality note

Subtle background pattern or gradient to visually separate this as the "conversion zone"

11. Footer

Logo + short tagline

Quick links (same as nav)

Contact info

Social links (placeholder icons)

Legal/disclaimer line: brief note that this service supports documentation/coordination and does not constitute tax/legal advice

Copyright line

UX / INTERACTION REQUIREMENTS

Smooth scroll navigation with active-section highlighting in the nav

Scroll-triggered fade/slide-up animations (Framer Motion whileInView) on every section — staggered for grids/cards

Sticky nav with background/shadow transition on scroll

Animated number counters in the stats section

Hover states on all interactive elements (cards, buttons, links) with subtle scale/shadow transitions

Mobile: hamburger menu with slide-in drawer, all sections stack cleanly, touch-friendly tap targets (min 44px)

Fast perceived performance: skeleton/placeholder states not required for MVP but keep animations lightweight (no heavy video backgrounds)

SEO & CONTENT REQUIREMENTS

Semantic HTML structure: one <h1> in hero, proper <h2>/<h3> hierarchy per section

Descriptive, keyword-aware copy targeting phrases like "R&D tax credit Philippines," "CREATE Act R&D incentives," "BOI PEZA R&D documentation support," "R&D claim virtual assistant" — worked naturally into headings and body copy, not stuffed

Meta title + meta description placeholders in a comment block at the top of the page component

Descriptive alt text placeholders on every image/icon

Fast-loading, no layout shift — reserve space for images/graphics

Clean, crawlable link structure (anchor links for in-page nav, real routes if multiple pages are added later)

CONTENT TONE GUIDELINES

Rewrite all copy in confident, benefit-led language — focus on outcomes for the client (maximized incentives, less admin burden, compliance peace of mind) rather than listing tasks

Remove all emoji from headings (the original site overused them — keep the site emoji-free and rely on icons instead)

Keep paragraphs short (2–3 sentences max) for scannability

Every section should answer "what's in it for the visitor," not just describe a feature

DELIVERABLE FOR THIS FIRST PROMPT

Build the full single-page site (all sections above) as a polished, demo-ready MVP with placeholder/sample content filled in professionally (do not leave lorem ipsum — write real, on-brand sample copy for every section). Use local component state only. Make it fully responsive and animation-rich but performant.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4a49b551-dbfe-4659-bf92-3e573b034701).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
