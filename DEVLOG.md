# DEVLOG.md — Nagiyev Studio

> **MANDATORY:** Every agent working on this project MUST update this file after completing ANY task.
> Do NOT skip this. No exceptions.

## How To Update

1. Complete a task from `IMPLEMENTATION_PLAN.md`
2. Check the box `[ ]` → `[x]` in the implementation plan
3. Add ONE line to this file at the TOP of today's date section
4. Format: `[YYYY-MM-DD] phase/task-id — short description of what was done`

**Rules:**
- Newest entries at the TOP within each date section
- One line per entry — be concise, no paragraphs
- Include phase number and task reference so it's traceable
- If a task was blocked or failed, log it too: `[YYYY-MM-DD] phase/task-id — BLOCKED: reason`
- If you made a design/code decision during a task, log it: `[YYYY-MM-DD] phase/task-id — DECISION: what and why`

---

## 2026-05-15

[2026-05-15] 0.2-0.4 — All content collections defined (projects, divisions, pages) with schemas. Sample content created. Build clean.
[2026-05-15] planning — Rewrote implementation plan: Astro static site replaces PHP+MySQL+React stack. ~75 tasks (was ~140). No backend, no DB, no admin panel.
[2026-05-15] planning — Decisions: Astro + Markdown content collections, EN/AZ i18n, single domain, no CDN, no React, no contact form, direct WA/TG/phone links only.

## 2026-05-14

[2026-05-14] planning — Initial project discussion: positioning as studio, 3 contours, tech stack decisions
[2026-05-14] planning — Architecture decided: React+Vite (static) + pure PHP API + MySQL 8.0, shared hosting
[2026-05-14] planning — Decisions resolved: JWT auth, custom CSS, no SSR, EN/AZ i18n, no contact form, no analytics
[2026-05-14] planning — Domain structure: main (frontend), api (backend+admin), cdn (media)
[2026-05-14] planning — DB schema finalized: 9 tables, all text fields bilingual (_en/_az)
[2026-05-14] planning — API endpoints finalized: public + admin, ~50 endpoints
[2026-05-14] planning — Homepage structure: hero, 3 divisions, selected work, philosophy, clients, about preview, CTA
[2026-05-14] planning — Implementation plan created: 4 phases, ~140 tasks
[2026-05-14] docs — Created AGENTS.md (cold start), PROJECT_PLAN.md, HOMEPAGE_STRUCTURE.md, DB_SCHEMA.md, API_ENDPOINTS.md, IMPLEMENTATION_PLAN.md, DEVLOG.md
