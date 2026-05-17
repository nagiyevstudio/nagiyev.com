# CONTENT_GUIDE.md — Nagiyev Studio Website

This guide explains how to add and edit content on the Nagiyev Studio website. 
The site is built with Astro and uses **Markdown Collections**. This means you don't need an admin panel—you just edit `.md` files in the project folder.

---

## 1. Directory Structure

All content lives inside `site/src/content/`. There are three main collections:
- `projects/` — Your case studies and portfolio works.
- `divisions/` — Landing pages for your 3 core directions.
- `pages/` — Static pages like Home, Contact, etc.

Inside each of these folders, there are `en/` and `az/` subfolders. **Every piece of content must have an English and Azerbaijani version** with the exact same filename.

Example:
- `site/src/content/projects/en/azerscope.md`
- `site/src/content/projects/az/azerscope.md`

---

## 2. Managing Images

All images must be placed inside `site/public/images/`.

- `public/images/projects/` — For case studies. Create a subfolder for each project (e.g., `projects/azerscope/`).
- `public/images/divisions/` — For division hero images.
- `public/images/common/` — For global assets (logo, default OG image, etc.).

**Referencing images in Markdown:**
Always use absolute paths starting with `/images/...`.
*Example:* `cover: "/images/projects/azerscope/cover.png"`

---

## 3. How to Add a New Project

1. Create a new `.md` file in `site/src/content/projects/en/` (e.g., `my-project.md`).
2. Add the **frontmatter** (metadata between `---` lines) at the top.
3. Write the body content below the frontmatter.
4. Copy the file to `site/src/content/projects/az/my-project.md` and translate the text values.

### Project Frontmatter Schema

Here is a full template of the fields you can use for a project. You can copy this and fill in the blanks.

```yaml
---
title: "Project Name"
division: "digital-systems-ai" # Must be one of: 'digital-systems-ai', 'product-design', 'media-production'
type: "case-study" # Optional. E.g., 'case-study', 'design-showcase'
category: "Web Platform" # Optional
year: 2026 # Optional
summary: "A short 1-2 sentence description of the project."
cover: "/images/projects/my-project/cover.png" # Required for project cards
tags:
  - AI
  - Dashboard
  - React
featured: true # Set to true to show on the Homepage

# --- Extended fields for premium project pages ---
status: "Released" # E.g., "In Development", "Released"
platforms:
  - "Web"
  - "iOS"
role: "Product strategy, UI/UX"
company: "Nagiyev Studio" # Or client name

hero_description: "A slightly longer description for the top of the project page."
positioning_statement: "Why this project matters and what Nagiyev Studio did."

# Core Systems (Used primarily for AI / Digital Systems)
core_systems:
  - title: "System Module 1"
    description: "What this module does."
    items:
      - "Feature A"
      - "Feature B"

# Gallery / Screenshots
screenshots:
  - image: "/images/projects/my-project/screen1.png"
    caption: "Dashboard view showing user analytics."
  - image: "/images/projects/my-project/screen2.png"
    caption: "Mobile view."

# Technical & AI fields
technical_layers:
  - "Real-time data synchronization"
  - "Role-based access control"

ai_description: "How AI is used in this project."
ai_features:
  - "Automated categorization"
  - "Recommendation engine"

# Design fields
design_description: "The visual language used."
design_image: "/images/projects/my-project/design-system.png"
design_principles:
  - "Dark theme optimized"
  - "High contrast typography"

# Value & Outcomes
value_delivered:
  - "Increased user retention by 20%"
  - "Automated 5 hours of manual work per week"

# Architecture
architecture_image: "/images/projects/my-project/architecture.png"

# Studio Role
studio_role_summary: "Nagiyev Studio handled everything from A to Z."
studio_areas:
  - "UX Research"
  - "Frontend Development"

cta_text: "View more Design projects"
cta_link: "/product-design/"
---

Body content goes here. You can write any markdown you want. It will be rendered at the bottom of the project layout.
```

*Note: You do not have to use all the extended fields. The layout will adapt dynamically and hide sections if fields are missing.*

---

## 4. Editing Division Pages

Divisions (`digital-systems-ai.md`, `product-design.md`, `media-production.md`) use a different schema tailored for landing pages.

```yaml
---
key: "digital-systems-ai" # Must match exactly
title: "Digital Systems & AI"
subtitle: "Digital infrastructure built around real business logic."
description: "Short meta description for SEO."

hero_headline: "Digital systems built around real business logic."
hero_supporting: "We design and develop platforms..."

capabilities:
  - "Corporate websites"
  - "CRM systems"
  - "Internal dashboards"

services:
  - "Web Development"
  - "Platform Architecture"

experience_summary: "A paragraph about our deep experience in this field..."

good_fit:
  - "A serious website or digital presentation"
  - "Automation of repeated internal processes"

cta_text: "Let's build your system"
cta_supporting: "Tell us what process you want to build."

cover: "/images/divisions/ai-hero.jpg"
---
```

---

## 5. Editing Static Pages (Home, Contact)

These live in `site/src/content/pages/`.
For example, the homepage content (`home.md`):

```yaml
---
key: "home"
title: "Nagiyev Studio"
hero_headline: "AI-powered digital systems..."
hero_supporting_text: "Nagiyev Studio is a multidisciplinary practice..."
hero_cta: "Discuss a project"
philosophy: "We don't just write code, we build business logic."
bottom_cta_title: "Ready to start?"
bottom_cta_text: "Send us a message directly via WhatsApp or Telegram."
bottom_cta_button: "Contact Us"
---
```

---

## 6. How to Deploy Updates

When you edit, add, or delete any Markdown file or image, you simply commit the changes and push them to the `main` branch.

```bash
git add .
git commit -m "Added new project X"
git push origin main
```

Our configured **GitHub Actions Workflow** will automatically detect the push, rebuild the static Astro site, and upload it directly to the FTP server. The changes will be live on `nagiyevstudio.com` within a couple of minutes!
