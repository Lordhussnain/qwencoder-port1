# Uniquegamer Tech — Implementation Plan

## Project Summary
A Next.js 14 + TypeScript + Tailwind CSS website for Uniquegamer Tech — a technology services company offering 7 services across 3 pillars (Core Engineering, AI & Automation, Commerce & Growth). Target audiences: Developers, Sponsors, Partners.

---

## Phase 1: Project Foundation & Design System
**Goal:** Scaffold the project, configure all tooling, establish the design token system.

### Tasks:
1. Initialize Next.js 14+ with App Router, TypeScript (strict mode)
2. Install & configure Tailwind CSS 3.4+ with full design tokens (Section 5 of spec)
   - Custom colors (brand, surface, text, semantic, audience)
   - Typography scale (display, h1-h4, body-lg/body/body-sm, caption)
   - Spacing tokens (section, container, card, gap)
   - Max-width tokens (container, content, narrow)
3. Install core dependencies:
   - `framer-motion` (animations)
   - `zustand` (audience state)
   - `lucide-react` (icons)
   - `react-hook-form` + `zod` (forms)
   - `@hookform/resolvers` (zod integration)
4. Configure ESLint, Prettier
5. Set up project folder structure per Section 6.1
6. Create `vercel.json` with security headers
7. Create base layout (`app/layout.tsx`) with Inter + JetBrains Mono fonts

### Deliverables:
- Running `npm run dev` shows a blank page with correct fonts loaded
- Tailwind config has all custom tokens
- Folder structure matches spec

---

## Phase 2: Core UI Components
**Goal:** Build the reusable component library (Section 6).

### Tasks:
1. **Button.tsx** — 4 variants (primary/secondary/ghost/outline), 3 sizes, audience accent colors, loading state, renders as `<a>` when href provided
2. **Card.tsx** — Glassmorphism base, gradient border on hover, pillar-aware accent colors
3. **Badge.tsx** — Category/audience badges with semantic colors
4. **Input.tsx** — Styled form input with label, error state, aria support
5. **Select.tsx** — Styled dropdown with label, error state
6. **Textarea.tsx** — Styled textarea with label, error state
7. **Tabs.tsx** — Accessible tab component with keyboard navigation
8. **Accordion.tsx** — Expandable FAQ-style component
9. **Modal.tsx** — Accessible modal with focus trap
10. **Skeleton.tsx** — Loading placeholder component
11. **Container.tsx** — Max-width wrapper with consistent padding

### Deliverables:
- All components are TypeScript, strictly typed
- All components support keyboard navigation
- All components use Tailwind only (no inline styles)

---

## Phase 3: Layout Components
**Goal:** Build Header (mega menu), Footer, MobileNav.

### Tasks:
1. **Header.tsx** — Sticky header with logo, nav items, Contact CTA button
2. **MegaMenu.tsx** — Dropdown for Services (3 pillars with sub-items) and Insights (3 categories)
3. **MobileNav.tsx** — Hamburger menu with accordion sub-nav for mobile
4. **Footer.tsx** — 5-column footer (Company, Services, Insights, Community, Legal) with social links

### Deliverables:
- Responsive header: mega menu on desktop, hamburger on mobile
- Footer with all links from Section 4.2
- Skip-to-content link for accessibility

---

## Phase 4: Homepage
**Goal:** Build all 8 homepage sections (Section 7.1).

### Tasks:
1. **Hero section** — Full-viewport, animated gradient background (Framer Motion), headline, sub-headline, 2 CTAs
2. **AudienceSelector.tsx** — 3 cards (Developer/Sponsor/Partner), sets Zustand store, scrolls to relevant content
3. **ServicePillars.tsx** — 3 large cards (Engineering/AI/Commerce) with hover-expand showing sub-services
4. **StatsCounter.tsx** — Animated counters (50+ Projects, 12+ AI Models, 99.9% Uptime, 30+ Team)
5. **ClientLogos.tsx** — Horizontal scrolling carousel (placeholder logos)
6. **FeaturedInsights.tsx** — 3 latest blog post cards (mock data, one per category)
7. **TestimonialCarousel.tsx** — Carousel with quotes from clients/partners/developers
8. **CTASection.tsx** — "Ready to Build Something Extraordinary?" with link to contact

### Deliverables:
- Complete homepage with all sections
- Smooth scroll animations via Framer Motion
- Audience routing works (Zustand store + URL param support)
- Fully responsive (320px to 2560px)

---

## Phase 5: Services Hub & Detail Pages
**Goal:** Build `/services` hub and all 7 service detail pages.

### Tasks:
1. **Services Hub (`/services`)** — Hero, 3 expandable pillar cards, 4-step process section, tech stack logo grid, CTA
2. **Service Detail Template (`/services/[slug]`)** — Shared template with:
   - Service hero (name, value prop, CTA)
   - Problem statement section
   - Capabilities list with icons
   - Tech stack display
   - Case study section (placeholder)
   - Process/methodology section
   - FAQ accordion (4-5 questions)
   - Contextual CTA (contact form pre-filled with service)
3. **Populate all 7 services** with content from spec table:
   - Software Development
   - SaaS Building
   - Custom Solutions
   - AI Automation
   - AI Content Creation
   - E-commerce
   - Digital Marketing
4. **Breadcrumbs** — Home > Services > [Pillar] > [Service]
5. **Pillar navigation** — Horizontal tabs for sibling services
6. **Cross-pillar links** — "You might also be interested in..." section

### Deliverables:
- `/services` hub page with 3 expandable pillars
- 7 individual service pages at `/services/[slug]`
- Breadcrumbs and internal linking
- FAQ sections with structured data ready

---

## Phase 6: About, Portfolio & Community Pages
**Goal:** Build the remaining informational pages.

### Tasks:
1. **About page (`/about`)** — Mission statement, team grid (3-4 members with placeholder photos), culture section
2. **Portfolio page (`/portfolio`)** — Filterable case study grid with cards (thumbnail, industry, services, key metric)
3. **Case Study detail (`/portfolio/[slug]`)** — Challenge → Solution → Architecture → Results → Testimonial
4. **Community Hub (`/community`)** — Developer-focused: open projects cards, events, resources, social links
5. **Partners page (`/partners`)** — Value prop, 3 sponsorship tiers (Bronze/Silver/Gold) with benefits table, partner program details, current partner logos

### Deliverables:
- 5 additional pages fully built with mock data
- Responsive layouts
- Consistent design language

---

## Phase 7: Contact & Forms
**Goal:** Build contact page and all form components.

### Tasks:
1. **ContactForm.tsx** — Smart form with: name, email, company, service dropdown (7 options), budget range, message. Conditional logic: if "AI Automation" → show "Describe your workflow" field. Zod validation.
2. **PartnershipForm.tsx** — Dedicated partnership inquiry form
3. **NewsletterForm.tsx** — Email-only signup form
4. **Contact page (`/contact`)** — Smart form, contact info, social links, response time note
5. **Form API routes** — `/api/inquiries` POST endpoint (mock handler, logs to console for now)
6. **Form success states** — Confirmation messages after submission

### Deliverables:
- All 3 form components with validation
- Contact page fully functional (client-side)
- Form API route structure ready for Supabase integration

---

## Phase 8: Blog Ecosystem
**Goal:** Build blog hub, article template, and seed content.

### Tasks:
1. **Blog Hub (`/insights`)** — Hero, category tabs (3 categories), featured article, article grid with pagination
2. **ArticleCard.tsx** — Thumbnail, category badge, title, excerpt, author, date, read time
3. **CategoryFilter.tsx** — URL search param-based filtering
4. **Article template (`/insights/[slug]`)** — Two-column layout: content left (title, meta, body, code blocks, CTA banner), sticky sidebar right (TOC, author bio, related articles, contextual CTA)
5. **TableOfContents.tsx** — Auto-generated from H2/H3 headings
6. **CodeBlock.tsx** — Syntax highlighting (Shiki)
7. **NewsletterSignup.tsx** — Inline form after every article
8. **Seed 9 articles** (3 per category) as static MDX/markdown files with placeholder content
9. **Related articles logic** — Based on shared tags and category

### Deliverables:
- Blog hub with filtering
- Article pages with TOC and syntax highlighting
- 9 seed articles
- Newsletter signup component

---

## Phase 9: SEO, Structured Data & Performance
**Goal:** Add all SEO requirements and optimize performance.

### Tasks:
1. **Meta tags** — Unique title/description per page, Open Graph, Twitter Cards
2. **Structured data (JSON-LD)** — Organization, Service, Article, FAQ, BreadcrumbList schemas
3. **XML sitemap** — Auto-generated via Next.js
4. **robots.txt** — Configure
5. **Image optimization** — All images via Next.js Image, lazy loading, blur placeholders
6. **Font optimization** — Subset Inter (400-800), JetBrains Mono
7. **Canonical URLs** — Per page
8. **Performance audit** — Bundle analysis, code splitting verification
9. **Accessibility audit** — Color contrast, keyboard nav, ARIA labels, focus indicators, heading hierarchy

### Deliverables:
- Lighthouse scores >90 all categories
- All SEO checklist items from Section 12.2 complete
- WCAG 2.1 AA compliance items from Section 13.1 addressed

---

## Phase 10: Integration & Polish
**Goal:** Wire up external services, final QA, production readiness.

### Tasks:
1. **Sanity CMS integration** — Replace mock data with Sanity queries (requires credentials)
2. **Supabase integration** — Form submissions storage (requires credentials)
3. **PostHog analytics** — Event tracking per audience
4. **Sentry error monitoring** — Setup and configuration
5. **Algolia search** — Blog and service search (optional, can defer)
6. **CI/CD pipeline** — GitHub Actions workflow (Section 14.2)
7. **Environment variables** — Document all required env vars
8. **Cross-browser testing** — Chrome, Firefox, Safari, Edge
9. **Mobile testing** — 320px, 375px, 768px, 1024px, 1440px
10. **Final review** — All pages, all interactions, all forms

### Deliverables:
- Production-ready codebase
- CI/CD pipeline configured
- All integrations documented
- QA sign-off checklist complete

---

## Execution Order

```
Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7 → Phase 8 → Phase 9 → Phase 10
```

Each phase builds on the previous. We start with Phase 1 now.

---

## Notes
- Phases 1-8 produce a fully functional static site with mock data
- Phase 9 optimizes for production
- Phase 10 wires up real backends (requires external credentials)
- Each phase has a human checkpoint for review before proceeding
