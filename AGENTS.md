# AGENTS.md — Nagiyev Studio Website

> **READ THIS FIRST.** This file gives you full context in under 60 seconds.

---

## What Is This Project?

A **premium static studio website** for **Nagiyev Studio** — a multidisciplinary digital practice combining AI/Development, Product Design, and Media Production. Positioning as an enterprise-grade studio ("Studio led by Faik Nagiyev"), targeting business clients.

---

## Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | Astro (static build)                    |
| Content   | Markdown / MDX with Content Collections |
| Language  | EN + AZ (every page is bilingual)       |
| Styling   | Custom CSS with design tokens           |
| Scripting | Vanilla JS only where needed (gallery, burger) |
| Hosting   | Shared hosting, Rocky Linux 8           |
| Build     | `npm run build` → `/dist` → upload to hosting |

**No React. No PHP. No database. No admin panel. No SSR.**

This stack is final. Work within it.

---

## Domain

| Domain                | Purpose                    |
| --------------------- | -------------------------- |
| `nagiyevstudio.com`   | Everything. Static site.   |

No subdomains. No CDN. All assets live in the project.

---

## Architecture

- **Content**: Markdown files in `src/content/` with frontmatter schemas
- **Build**: Astro compiles to static HTML/CSS/JS in `/dist`
- **Deploy**: Upload `/dist` to hosting root
- **i18n**: EN at root (`/`), AZ prefixed (`/az/`)
- **SEO**: Meta tags, OG, sitemap.xml, robots.txt, JSON-LD, canonical URLs — all static
- **Images**: In `public/images/`, served statically and referenced via absolute paths (e.g. `/images/...`)

---

## Project Files — What To Read When

| File                     | Read When                                  |
| ------------------------ | ------------------------------------------ |
| `AGENTS.md`              | Always first (this file)                   |
| `IMPLEMENTATION_PLAN.md` | Before starting any task                    |
| `CONTENT_GUIDE.md`       | Before writing or editing markdown content |
| `HOMEPAGE_STRUCTURE.md`  | Before homepage frontend work              |
| `PROJECT_PLAN.md`        | For context on past decisions              |
| `DEVLOG.md`              | Before and after every task                |

---

## Three Divisions

### 1. Digital Systems & AI
AI systems, SaaS, dashboards, automation, app development, enterprise workflows.
Case study: Problem → Solution → Architecture → Screenshots → Result

### 2. Product & Design
UI systems, interfaces, branding, visual systems, product thinking.
Case study: Context → Screens → Design System → Outcome

### 3. Media Production
Photography, video, event coverage, music, podcast, media campaigns.
Case study: Client → Scope → Gallery → Deliverables

---

## Design Principles

- **Minimalist, strict, premium** — clean layouts, purposeful whitespace
- **Mobile-first** — most traffic comes from phones
- **Three mini-sites, one studio** — each division has its own feel
- **Grids, not carousels** — static layouts, no sliders
- **Direct contact links** — WhatsApp, Telegram, phone buttons (no contact forms)
- **Enterprise tone** — professional, confident, serious

---

## Content Model

All content is Markdown with frontmatter. Three collections:

### `projects/` — Case studies
```yaml
---
title: "AzerScope"
title_az: "AzerScope"
slug: "azerscope"
division: "digital-systems-ai"
type: "case-study"
year: 2026
client: "Azerbaijan Astronomical Society"
summary: "Astronomy platform and mobile app..."
summary_az: "Astronomiya platforması..."
cover: "/images/projects/azerscope/cover.jpg"
tags: [AI, Mobile App, Astronomy]
featured: true
---
Body content in Markdown...
```

### `divisions/` — Division landing content
```yaml
---
key: "digital-systems-ai"
title: "Digital Systems & AI"
title_az: "Rəqəmsal Sistemlər və AI"
capabilities: [AI Systems, SaaS, Dashboards, ...]
---
```

### `pages/` — About, Contact, Home
```yaml
---
key: "about"
title: "About Nagiyev Studio"
title_az: "Nagiyev Studio Haqqında"
---
Body content...
```

---

## How To Work

### Before Starting
1. Read this file (`AGENTS.md`)
2. Read `IMPLEMENTATION_PLAN.md` — find the current phase and next unchecked task
3. Read `DEVLOG.md` — understand what was already done
4. Read `CONTENT_GUIDE.md` if working with content

### During Work
- Follow the task description precisely. Do not improvise beyond what the task asks.
- Every content field has two language variants. Always create both.
- Astro code: `.astro` files. Components PascalCase. CSS custom properties for design tokens.
- Keep file structure exactly as described in the implementation plan.
- Work on ONE task at a time. Complete it, log it, then move to the next.
- **No React** unless explicitly needed for complex interactivity (gallery, filter). Prefer vanilla JS.

### After Completing a Task
1. Mark the task done in `IMPLEMENTATION_PLAN.md`: change `[ ]` to `[x]`
2. Add an entry to `DEVLOG.md` at the top of today's section
3. Format: `[YYYY-MM-DD] phase/task-id — short description`
4. If something is unclear, log it in DEVLOG

### Design Tasks
Design decisions (colors, typography, layout, animations) require Faik's input.
If blocked waiting for design direction, log it: `[date] phase/task-id — BLOCKED: waiting for design direction`

---

## File Structure

```
/src/
  /content/
    /projects/           ← all case studies (.md files)
    /divisions/          ← division landing content (.md files)
    /pages/              ← about, contact, home (.md files)
  /layouts/
    BaseLayout.astro
    DivisionLayout.astro
    ProjectLayout.astro
  /components/
    Hero.astro
    DivisionCard.astro
    ProjectCard.astro
    CTA.astro
    SEO.astro
    LanguageSwitcher.astro
    Gallery.astro
    TagList.astro
    ClientLogo.astro
  /pages/
    index.astro
    about.astro
    contact.astro
    digital-systems-ai.astro
    product-design.astro
    media-production.astro
    work.astro
    projects/[slug].astro
  /styles/
    global.css
  /assets/
  content.config.ts
/public/
  /images/
    /projects/
    /divisions/
    /common/
  robots.txt
  favicon.ico
astro.config.mjs
package.json
```

---

## Current Status

🟡 **Planning complete. Phase 0 (Project Setup) next.**

Implementation plan rewritten for Astro static site approach. ~75 tasks across 4 phases.
See `IMPLEMENTATION_PLAN.md` to begin.
