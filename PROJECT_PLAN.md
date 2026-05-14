# Nagiyev Studio — Project Plan

## Status: 🟡 Planning Phase

> Don't code until everything is decided. Document first, implement second.

---

## 1. Positioning

- **Multidisciplinary digital studio**, not personal portfolio
- "Studio led by Faik Nagiyev"
- Target: enterprise / business clients
- Goal: convey capability for serious, complex projects
- Three distinct practice areas (contours)

---

## 2. Site Architecture

### Top-level pages (5)

1. **Home** — main landing, entry point
2. **Digital Systems & AI** — contour landing + sub-pages
3. **Product & Design** — contour landing + sub-pages
4. **Media Production** — contour landing + sub-pages
5. **About** — studio positioning, founder info
6. **Contact** — contact form / info

### Per-contour structure

Each contour has:

- **Landing page** (overview of that practice area)
- **Services page**
- **Capabilities page**
- **Workflow / Approach page**
- **Project listing** (list of case studies)
- **Individual case study pages** (one per project, unique layout per contour)

### Navigation

- Each contour has its own menu, scoped to that contour
- Cross-contour links somewhere visible (not three separate sites, one studio)
- Global nav: Home | [Contour A] | [Contour B] | [Contour C] | About | Contact

### Individual project pages

- Each project gets its own page (like a blog post)
- Different structure per contour:
  - **AI**: task → architecture → workflow → screenshots → results → system thinking
  - **Design**: interfaces → UI systems → branding → process → before/after → selected screens
  - **Media**: gallery → selected visuals → client → project type → short description

---

## 3. Tech Stack

### Frontend

- **React + Vite** (build to static files)
- **No SSR needed** — pre-rendered static HTML/JS/CSS deployed to hosting
- Shared component library across contours
- Each contour can have distinct visual treatment

### Backend

- **Pure PHP** (no framework) — simple CRUD API
- **MySQL** (8.0+) — separate tables per content type
- JSON fields for flexible content structures

### Hosting

- Shared hosting, Rocky Linux 8
- PHP 8.4.20
- MySQL 5.7 / 8.0 / 8.4
- PHP.ini editable (upload limits configurable)

### Media Strategy

- **Photos**: uploaded via admin UI → stored on server (`/uploads/`)
- **Heavy video**: uploaded manually via FTP to server or YouTube, linked by URL
- **CDN**: subdomain on same server, FTP upload, used for media links
- No external storage needed

### Admin Panel

- **Separate React + Vite SPA** at `/admin`
- **Separate authentication** (own admins table, JWT or session-based)
- Isolated from public frontend — security boundary

---

## 4. Database Schema (Draft)

```
admins
  - id, username, password_hash, email, role, created_at, updated_at

site_settings
  - id, setting_key, setting_value_en, setting_value_az

pages
  - id, slug, contour (ai|design|media), 
    title_en, title_az,
    content_en, content_az,
    meta_title_en, meta_title_az,
    meta_description_en, meta_description_az,
    published, created_at, updated_at

ai_projects
  - id, title_en, title_az, slug, 
    subtitle_en, subtitle_az,
    client, year,
    description_en, description_az,
    task_en, task_az,
    architecture_en, architecture_az,
    workflow_en, workflow_az,
    results_en, results_az,
    screenshots_json, tech_stack_json,
    sort_order, published, featured, created_at, updated_at

design_projects
  - id, title_en, title_az, slug,
    subtitle_en, subtitle_az,
    client, year,
    description_en, description_az,
    process_en, process_az,
    ui_screens_json, before_after_json, branding_assets_json,
    sort_order, published, featured, created_at, updated_at

media_projects
  - id, title_en, title_az, slug,
    subtitle_en, subtitle_az,
    client, year, project_type,
    description_en, description_az,
    gallery_json, video_links_json,
    sort_order, published, featured, created_at, updated_at

project_categories (optional — if projects need tagging)
  - id, name_en, name_az, slug, contour
```

**Notes:**

- JSON fields store arrays/objects (screenshots, galleries, tech stacks)
- `slug` for URL routing (shared across languages)
- `sort_order` for manual ordering
- `featured` for homepage highlights
- All timestamps for audit trail
- **Bilingual: every user-facing text field has `_en` and `_az` variants**

---

## 5. API Endpoints (Draft)

### Authentication

- `POST /api/auth/login` — login
- `POST /api/auth/logout` — logout
- `GET /api/auth/verify` — check session

### Pages (static content per contour)

- `GET /api/pages/:slug` — get page by slug
- `GET /api/pages?contour=ai` — list pages by contour
- `POST /api/pages` — create page
- `PUT /api/pages/:id` — update page
- `DELETE /api/pages/:id` — delete page

### Projects (per contour)

- `GET /api/projects/:contour` — list all published projects
- `GET /api/projects/:contour/:slug` — get single project
- `GET /api/projects/:contour/:slug/related` — related projects
- `POST /api/projects/:contour` — create project
- `PUT /api/projects/:contour/:id` — update project
- `DELETE /api/projects/:contour/:id` — delete project
- `POST /api/projects/:contour/:id/upload` — upload image for project

### Media

- `POST /api/media/upload` — upload photo (admin only)
- `DELETE /api/media/:filename` — delete file
- `GET /api/media/list` — list uploaded files

### Settings

- `GET /api/settings` — get all settings
- `PUT /api/settings` — update settings

### Public (frontend)

- `GET /api/public/home` — homepage data (featured projects, etc.)
- `GET /api/public/projects/:contour` — public project list
- `GET /api/public/projects/:contour/:slug` — public single project
- `GET /api/public/pages/:slug` — public page content
- `GET /api/public/contact` — contact info (phone, WhatsApp, Telegram links)

### i18n

- All public endpoints accept `?lang=en|az` query parameter (or lang in request body for POST/PUT)
- `site_settings` stores language-specific values where needed

---

## 6. Admin Panel Features

### Auth

- Login screen (username + password)
- Session-based or JWT auth
- Session timeout

### Content Management

- **Pages editor** — create/edit static pages per contour (Services, Capabilities, Workflow, etc.)
- **Project editor per contour** — different form for each:
  - AI: task, architecture, workflow, results, screenshot uploader, tech stack tags
  - Design: process description, screen uploader, before/after pairs, branding assets
  - Media: gallery uploader (drag & drop), video URL input, client/project type
- **Media library** — view/delete uploaded photos
- **Settings** — site-wide settings (site name, contact info, social links, etc.)

### UI/UX

- Clean, functional admin UI
- Preview capability before publishing
- Draft/published status
- Sort order management (drag & drop reorder)

---

## 7. Decisions (Resolved)

- [x] **Frontend styling**: Custom CSS with design tokens (CSS custom properties). Minimalist, strict, beautiful. No heavy framework. Component-driven approach — shared base components, per-contour visual variants. AutoClaw handles design direction.
- [x] **Admin auth**: JWT. Stateless, works across subdomains, cleaner separation.
- [x] **Routing**: React Router for frontend. `.htaccess` rewrite rules on server to handle SPA fallback (refresh doesn't 404).
- [x] **Image handling**: No server-side processing. User preps images locally at desired sizes. Full control, less code, cleaner output.
- [x] **SEO strategy**: Full package — meta tags per page/project, Open Graph tags, sitemap.xml, robots.txt, structured data (JSON-LD), canonical URLs, semantic HTML.
- [x] **Contact**: No form. WhatsApp, Telegram, phone icons with direct `wa.me`, `t.me`, `tel:` links. Modern users prefer direct contact.
- [x] **Languages**: EN + AZ via i18n (likely `react-i18next`). All user-facing content localized.
- [x] **Domain structure**: Three subdomains — see §8 below.
- [x] **Deployment workflow**: Backend deployed directly to server (no local PHP). Frontend built locally, deployed via Git. Backend URL configurable via env vars (must allow localhost for local frontend dev).
- [x] **Analytics**: None. Can connect Google/Yandex Webmaster later if needed.
- [x] **Logging**: PHP default error log on server. No custom logging needed.

---

## 8. Domain / Subdomain Structure

Backend API and admin panel live on a separate subdomain (keeps backend code out of the main domain's public directory).

| Subdomain | Purpose | Points to |
|-----------|---------|-----------|
| `nagiyevstudio.com` (main) | Frontend (static React build) | `public_html/` or main domain root |
| `api.nagiyevstudio.com` | Backend API + Admin panel SPA | Separate directory, backend code here |
| `cdn.nagiyevstudio.com` | Media CDN (FTP upload for heavy files) | Separate directory, media storage |

**CORS**: Backend (`api.*`) must allow requests from `nagiyevstudio.com` (frontend) and `localhost` (local dev).

**Action required**: Faik creates these three subdomains in hosting panel.

---

## 8. Implementation Plan (TBD)

_To be created after planning is complete._

Rough order expected:

1. Database schema (finalize + create)
2. PHP API (auth, CRUD endpoints)
3. Admin panel (React SPA)
4. Frontend (React, per-contour pages)
5. Content population
6. Testing & launch

---

## 9. Meeting Notes / Discussion Log

### 2026-05-14 (Session 2 — Homepage & Design Details)

- Homepage = lobby/gateway, routes users to contours
- Hero: **single CTA** (not two). CSS animation OK for hero — minimal, premium feel
- Contour hero slider on homepage: **too much** — each contour has its own landing hero, homepage hero is static
- **Mobile-first** — majority of traffic will be mobile
- Selected Work: **manual via admin flags** (`featured` field) — control over what's shown, can keep old projects on homepage
- Clients/Collaborations: **minimalist grid with small icons/logos**, no carousel
- **i18n = dual language in DB** — every content field needs EN + AZ variants. Painful but necessary for serious positioning
- Language switcher: **in header, always visible, outside burger menu on mobile**

---

### 2026-05-14 (Session 1 — Architecture & Stack)

- Initial discussion: positioning as studio, not portfolio
- Three contours: Digital Systems & AI, Product & Design, Media Production
- Separate tables per content type (different structures)
- Admin panel: separate SPA, separate auth
- Media: local storage, CDN subdomain for heavy files, FTP for video
- Backend: pure PHP, no framework, simple CRUD
- Frontend: React + Vite, static build, no SSR
- Individual case study pages per project, different layouts per contour
- Shared hosting, PHP 8.4, MySQL 8.0+
- Contact: no form, direct links (WhatsApp, Telegram, phone)
- Languages: EN + AZ (i18n)
- Styling: custom CSS with design tokens, minimalist
- Auth: JWT
- Images: user preps locally, no server-side processing
- SEO: full package
- No analytics, PHP default logging
- Backend deployed directly to server, frontend local build + Git deploy
- Domain structure: 3 subdomains (main, api, cdn)

---

_This document is living. Update as decisions are made._
