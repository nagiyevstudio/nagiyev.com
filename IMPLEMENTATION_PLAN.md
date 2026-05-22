# IMPLEMENTATION_PLAN.md — Nagiyev Studio

> **Astro static site.** Markdown content, static build, deploy /dist to shared hosting.
> Read `AGENTS.md` first for project context.

---

## How To Use This File

1. Read `AGENTS.md` for project context
2. Find the current phase below
3. Pick the next **unchecked** task
4. Execute it
5. Check the box `[ ]` → `[x]`
6. **MANDATORY:** Add an entry to `DEVLOG.md`
7. Do NOT skip phases or tasks out of order

> ⚠️ **Always update DEVLOG.md after every completed task. No exceptions.**

---

## Legend

- `[ ]` = Not started
- `[~]` = In progress
- `[x]` = Done
- `[!]` = Blocked (see DEVLOG for reason)
- 🎨 = Design decision needed (coordinate with Faik)

---

# Phase 0 — Project Setup

**Goal:** Astro project scaffolded, content collections configured, i18n routing working.

### 0.1 Initialize Project

- [x] Create Astro project (`npm create astro@latest`)

- [x] Configure `output: 'static'` in `astro.config.mjs`

- [x] Install dependencies (no React — pure Astro)

- [x] Set up project structure:
  
  ```
  /src/
    /content/
      /projects/          ← all project markdown files
      /divisions/         ← division landing content
      /pages/             ← about, contact, homepage content
    /layouts/
      BaseLayout.astro
      DivisionLayout.astro
      ProjectLayout.astro
    /components/
    /pages/
    /styles/
      global.css
    /assets/
      /images/
        /projects/
        /divisions/
        /common/
  ```

- [x] Add `.gitignore` (node_modules, dist, .astro/)

- [x] Verify `npm run build` produces `/dist` with static HTML

### 0.2 Content Collections — Projects

- [x] Define `projects` collection in `src/content.config.ts`
- [x] Schema:
  
  ```ts
  {
    title: z.string(),
    title_az: z.string(),
    slug: z.string(),
    division: z.enum(['digital-systems-ai', 'product-design', 'media-production']),
    type: z.enum(['case-study', 'design-showcase', 'media-portfolio']),
    year: z.number().optional(),
    client: z.string().optional(),
    summary: z.string(),
    summary_az: z.string(),
    cover: z.string().optional(),         // image path
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }
  ```
- [x] Markdown body = project description (supports MDX if needed)
- [x] Create 2 sample projects (one AI, one design) for development

### 0.3 Content Collections — Divisions

- [x] Define `divisions` collection
- [x] Schema:
  
  ```ts
  {
    key: z.enum(['digital-systems-ai', 'product-design', 'media-production']),
    title: z.string(),
    title_az: z.string(),
    subtitle: z.string(),
    subtitle_az: z.string(),
    description: z.string(),
    description_az: z.string(),
    capabilities: z.array(z.string()),
    capabilities_az: z.array(z.string()),
    approach: z.string().optional(),
    approach_az: z.string().optional(),
    cover: z.string().optional(),
  }
  ```
- [x] Create 3 division content files (placeholder content)

### 0.4 Content Collections — Pages

- [x] Define `pages` collection for about, contact, homepage
- [x] Schema:
  
  ```ts
  {
    key: z.enum(['home', 'about', 'contact']),
    title: z.string(),
    title_az: z.string(),
    // flexible content — rest is in markdown body
  }
  ```
- [x] Create `about.md` and `contact.md` with placeholder content
- [x] Create `home.md` with homepage section content

### 0.5 i18n Routing

- [x] Configure i18n routing:
  - Default locale: `en` (root paths: `/`, `/about/`, etc.)
  - Secondary locale: `az` (prefixed: `/az/`, `/az/about/`, etc.)
  - Use `astro:i18n` or manual routing via `[...slug].astro` + locale detection
- [x] Language switcher data: current locale, available locales
- [x] Test: `/about/` shows EN, `/az/about/` shows AZ
- [x] Test: language switcher renders on all pages
- [x] Verify all content collections support EN/AZ variants

### 0.6 SEO Infrastructure

- [x] Create `<SEO />` component:
  - Accepts: `title`, `description`, `ogImage`, `canonicalUrl`
  - Renders: `<title>`, `<meta name="description">`, OG tags, Twitter cards
- [x] Set default OG image (placeholder)
- [x] Add canonical URL logic (base URL + path)
- [x] Create `public/robots.txt`
- [x] Create sitemap generation (use `@astrojs/sitemap` or manual)
- [x] Add JSON-LD structured data: `Organization` schema in BaseLayout

---

# Phase 1 — Layouts & Design System

**Goal:** All layouts, design tokens, responsive system. 🎨 Design decisions from Faik.

> **IMPORTANT:** Design tasks require Faik's input. Do not make design decisions alone.
> Before starting, verify `DESIGN_SYSTEM.md` exists. If not, flag to Faik.

### 1.1 Design Tokens 🎨

- [x] Wait for design direction from Faik (colors, typography, spacing)
- [x] Implement as CSS custom properties in `global.css`:
  - Colors: `--color-primary`, `--color-bg`, `--color-text`, `--color-accent`, etc.
  - Typography: `--font-heading`, `--font-body`, sizes, weights, line-heights
  - Spacing: `--space-xs` through `--space-2xl`
  - Borders: `--radius-sm/md/lg`, `--border-width`
  - Breakpoints: mobile-first media queries
- [x] Division-specific accent colors (AI / Design / Media)

### 1.2 Base Layout

- [x] Create `BaseLayout.astro`:
  - `<html>` with lang attribute
  - SEO component
  - Header + Footer slots
  - Global CSS import
  - Skip-to-content link (accessibility)
- [x] Header: logo, navigation (Home, 3 divisions, About, Contact), language switcher
- [x] Mobile header: burger menu, language switcher ALWAYS visible (outside burger)
- [x] Footer: logo, division links, contact links (WA/TG/phone), copyright

### 1.3 Division Layout

- [x] Create `DivisionLayout.astro`:
  - Division hero section
  - Navigation to sub-sections (What We Build, Capabilities, Approach, Work)
  - Content slot
  - CTA section
- [x] Division-specific accent styling (border, subtle background tint)

### 1.4 Project Layout
- [x] Create `ProjectLayout.astro`:
  - Cover image + title + subtitle
  - Client / year / tags bar
  - Body content (from markdown)
  - Gallery/screenshots section (division-specific)
  - Related projects (3 projects, same division)
  - Back to listing link
- [x] Division-specific case study variants:
  - AI: Problem → Solution → Architecture → Screenshots → Result
  - Design: Context → Screens → Design System → Outcome
  - Media: Client → Scope → Gallery → Deliverables

### 1.5 Core Components

- [x] `Hero.astro` — headline, subtitle, CTA, optional background image, CSS animation
- [x] `DivisionCard.astro` — division preview card for homepage
- [x] `ProjectCard.astro` — project card for listing (cover, title, summary, tags, year)
- [x] `CTA.astro` — call-to-action block (text + WA/TG/phone links)
- [x] `ClientLogo.astro` — client logo in grid
- [x] `LanguageSwitcher.astro` — EN/AZ toggle, always visible
- [x] `Gallery.astro` — image grid with lightbox (pure CSS/JS, no React)
- [x] `TagList.astro` — project tags display

### 1.6 Responsive & Mobile

- [x] Mobile-first approach throughout
- [x] Burger menu (pure CSS checkbox hack or vanilla JS)
- [x] Responsive images (srcset, sizes)
- [x] Test: all layouts at 320px, 768px, 1024px, 1440px

---

# Phase 2 — Pages

**Goal:** All pages built, content from collections, working in both languages.

### 2.1 Homepage

- [x] Build from `home.md` content + collections
- [~] Sections:
  1. Hero (headline, subtitle, single CTA, CSS animation) [x]
  2. Core Divisions (3 division cards → link to division landings) [x]
  3. Selected Work (3–6 featured projects from collections) [x]
  4. Studio Approach (philosophy block) [x]
  5. Clients / Collaborations (logo grid)
  6. About Preview (lead text + link to About)
  7. Final CTA (WA/TG/phone) [x]
- [x] Featured projects pulled from `projects` collection where `featured: true`
- [x] Test: both languages, responsive

### 2.2 Division Landing Pages

- [x] `/digital-systems-ai/` — AI division landing
- [x] `/product-design/` — Design division landing
- [x] `/media-production/` — Media division landing
- [x] Each pulls from `divisions` collection + related projects
- [~] Sections per landing:
  1. Hero / Intro [x]
  2. What We Build (capabilities list) [x]
  3. Selected Work (division's featured projects) [x]
  4. Approach / Philosophy [x]
  5. CTA [x]
- [x] Test: all 3 divisions, both languages

### 2.3 Project Listing Pages

- [x] `/work/` — all projects (optional: may skip if divisions handle listing)
- [ ] `/digital-systems-ai/work/` — AI projects only
- [ ] `/product-design/work/` — Design projects only
- [ ] `/media-production/work/` — Media projects only
- [x] Grid of `ProjectCard` components
- [x] Sort by year descending, featured first

### 2.4 Project Detail Pages
- [x] Dynamic route: `/projects/[slug].astro`
- [x] Render from `projects` collection using `ProjectLayout`
- [x] Related projects (3 from same division)
- [x] SEO: unique meta per project (title, description, OG image from cover)
- [x] Test: AI case study, design case study, media case study

### 2.5 About Page 🎨

- [!] `/about/` from `pages/about.md` (Note: Contact page is prioritized over About page in navigation)
- [ ] Founder section, studio positioning, philosophy
- [ ] Test: both languages

### 2.6 Contact Page

- [x] `/contact/` from `pages/contact.md`
- [x] Clean layout with direct links:
  - WhatsApp → `wa.me/...`
  - Telegram → `t.me/...`
  - Phone → `tel:...`
  - Email → `mailto:...`
- [x] No form, no PHP
- [x] Test: both languages, links work on mobile

### 2.7 404 Page

- [x] Create `404.astro`
- [x] Simple page with logo, "Page not found", link to home

---

# Phase 3 — Content Population

**Goal:** Real content in all markdown files. **Faik writes content.** Agent provides structure + guide.

### 3.1 Content Guide for Faik

- [x] Create `CONTENT_GUIDE.md` with:
  - How to write project markdown (frontmatter schema + examples)
  - How to write division content
  - How to write about/contact content
  - How to add images (where to place, naming convention)
  - How to handle EN/AZ pairs
  - What triggers a rebuild
- [x] Create `content-examples/` with filled sample files:
  - 1 AI case study (complete example)
  - 1 Design case study (complete example)
  - 1 Media project (complete example)
  - Division content example
  - About page example

### 3.2 Content Integration

- [x] Integrate Faik's real content as it arrives
- [x] Add all images to `/src/assets/images/`
- [x] Verify all frontmatter validates against schemas
- [x] Verify all EN/AZ pairs present
- [x] Check broken links between pages

---

# Phase 4 — Polish & Deploy

**Goal:** Production-ready static site deployed to hosting.

### 4.1 Performance

- [ ] Image optimization (Astro `<Image />` or `<Picture />`)
- [ ] Lazy loading for below-fold images
- [ ] CSS minification (Astro build handles this)
- [ ] Font loading strategy (self-hosted or system fonts)
- [ ] Lighthouse audit: aim for 95+ across all categories
- [ ] Verify 0 client-side JS on pages that don't need it

### 4.2 QA

- [ ] Test all pages in both languages
- [ ] Test all links (internal + external)
- [ ] Test mobile: iOS Safari, Android Chrome
- [ ] Test desktop: Chrome, Firefox, Safari
- [ ] Verify SEO meta on every page (title, description, OG)
- [ ] Verify heading hierarchy (single h1 per page)
- [ ] Verify sitemap.xml
- [ ] Verify robots.txt
- [ ] Accessibility: keyboard navigation, focus states, alt texts
- [ ] Cross-browser CSS check

### 4.3 Deploy

- [x] Configure GitHub Actions FTP Deploy workflow (with build step, port 21, and FTP secrets)
- [x] `npm run build` → verify `/dist` output
- [x] Upload `/dist` contents to hosting (main domain root)
- [x] Configure `.htaccess` for clean URLs and 404 redirect
- [x] Verify all routes work on live domain
- [x] Verify SSL is active

### 4.4 Post-Launch

- [x] Submit to Google Search Console
- [x] Submit to Yandex Webmaster
- [x] Verify structured data (Rich Results Test)
- [x] Monitor for 404s (first week)

---

## Summary

| Phase | Description             | Tasks | Est. Effort |
| ----- | ----------------------- | ----- | ----------- |
| 0     | Project Setup           | 15    | Small       |
| 1     | Layouts & Design System | 20    | Medium      |
| 2     | Pages                   | 15    | Medium      |
| 3     | Content Population      | 10    | Medium*     |
| 4     | Polish & Deploy         | 15    | Small       |

**Total: ~75 tasks** (*Phase 3 mostly Faik's writing work)

---

## What Changed From Previous Plan

| Removed                    | Replaced With                     |
| -------------------------- | --------------------------------- |
| PHP backend API            | Astro static build                |
| MySQL database (9 tables)  | Markdown content collections      |
| JWT authentication         | Not needed                        |
| Admin panel (React SPA)    | Not needed — edit markdown        |
| React SPA frontend         | Astro pages (zero JS default)     |
| CDN subdomain              | Assets in project, built by Astro |
| `api.` subdomain           | Single domain, static files       |
| Contact form + PHP handler | Direct WA/TG/phone links          |
| ~140 tasks                 | ~75 tasks                         |
