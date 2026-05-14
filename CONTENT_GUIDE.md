# CONTENT_GUIDE.md — Nagiyev Studio

> **Для Faik.** Как писать контент для сайта.  
> Все страницы — это Markdown-файлы с frontmatter.  
> Написал → запушил → `npm run build` → сайт обновился.

---

## 1. Где лежат файлы

```
src/content/
├── projects/        ← кейсы (все три контура)
├── divisions/       ← контент для landing-страниц контуров
└── pages/           ← about, contact, home
```

Картинки лежат здесь:

```
public/images/
├── projects/
│   ├── azerscope/
│   │   ├── cover.jpg
│   │   ├── screen-1.jpg
│   │   └── screen-2.jpg
│   └── branding-system/
│       ├── cover.jpg
│       └── mockup-1.jpg
├── divisions/
│   └── ...
└── common/
    ├── logo.svg
    ├── founder.jpg
    └── og-default.jpg
```

---

## 2. Projects (Кейсы)

**Путь:** `src/content/projects/azerscope.md`

**Frontmatter — обязательно:**

```yaml
---
title: "AzerScope"
title_az: "AzerScope"
slug: "azerscope"
division: "digital-systems-ai"
type: "case-study"
year: 2026
client: "Azerbaijan Astronomical Society"
summary: "Astronomy platform and mobile app for community, events and observation planning."
summary_az: "Astronomiya platforması və mobil tətbiq — icma, tədbirlər və müşahidələrin planlaşdırılması."
cover: "/images/projects/azerscope/cover.jpg"
tags:
  - AI
  - Mobile App
  - Astronomy
  - Community Platform
featured: true
---
```

**Тело — Markdown:**

```md
## The Challenge

The Azerbaijani astronomical community needed a centralized platform...

## What We Built

A comprehensive system consisting of three main parts:

- **Mobile App** — observation planning, event calendar, sky maps
- **Web Platform** — community hub, project management, data sharing
- **AI Layer** — weather prediction, observation scheduling, object recognition

## Technical Architecture

[description...]

## Results

[description...]
```

### Типы кейсов по контурам

| Контур               | `type`            | Структура тела (рекомендация)                                  |
| -------------------- | ----------------- | -------------------------------------------------------------- |
| Digital Systems & AI | `case-study`      | Challenge → Solution → Architecture → Screenshots → Results    |
| Product & Design     | `design-showcase` | Context → Visual Direction → Screens → Design System → Outcome |
| Media Production     | `media-portfolio` | Client → Scope → Selected Visuals → Deliverables               |

### Правила:

- **slug** — lowercase, латиница, дефисы вместо пробелов: `azerscope`, `finance-tracker`
- **title_az** — обязательно, даже если совпадает с title
- **summary_az** — обязательно
- **cover** — абсолютный путь к картинке, начиная с `/images/...` (без указания папки public)
- **featured: true** — проект попадёт на главную страницу (3–6 проектов)
- **tags** — короткие, на английском
- **Тело** — можно писать на одном языке, если контент одинаковый по смыслу. Но лучше EN + AZ в отдельных файлах (см. i18n ниже)
- **client** — можно пропустить, если NDA: просто не указывай поле

---

## 3. Divisions (Контурные landing-страницы)

**Путь:** `src/content/divisions/digital-systems-ai.md`

```yaml
---
key: "digital-systems-ai"
title: "Digital Systems & AI"
title_az: "Rəqəmsal Sistemlər və Süni İntellekt"
subtitle: "Enterprise-grade AI systems, SaaS platforms and intelligent automation."
subtitle_az: "Müəssisə səviyyəli AI sistemləri, SaaS platformaları və ağıllı avtomatlaşdırma."
description: "We design and build AI-powered digital systems that solve real business problems. From intelligent dashboards to complex SaaS platforms, every system is engineered for reliability, clarity and scale."
description_az: "Biz real biznes problemlərini həll edən AI ilə işləyən rəqəmsal sistemlər dizayn edir və qururuq. Ağıllı dashboardlardan mürəkkəb SaaS platformalarına qədər hər bir sistem etibarlılıq, aydınlıq və miqyas üçün mühəndislik edilir."
capabilities:
  - AI Systems & Agents
  - SaaS Platforms
  - Dashboards & Internal Tools
  - Web & Mobile Applications
  - Automation & Workflow
  - API Integrations
capabilities_az:
  - AI Sistemləri və Agentlər
  - SaaS Platformaları
  - Dashboardlar və Daxili Alətlər
  - Veb və Mobil Tətbiqlər
  - Avtomatlaşdırma və İş Axını
  - API İnteqrasiyaları
approach: "Every system starts with understanding the problem. We map workflows, identify automation opportunities, and design architectures that grow with your organization."
approach_az: "Hər bir sistem problemi anlamaqdan başlayır. İş axınlarını xəritələşdiririk, avtomatlaşdırma imkanlarını müəyyən edirik və təşkilatınızla birlikdə böyüyən arxitekturalar dizayn edirik."
cover: "/images/divisions/ai-hero.jpg"
---
```

### Три файла:

| Файл                    | `key`                |
| ----------------------- | -------------------- |
| `digital-systems-ai.md` | `digital-systems-ai` |
| `product-design.md`     | `product-design`     |
| `media-production.md`   | `media-production`   |

---

## 4. Pages (About, Contact, Home)

### About

**Путь:** `src/content/pages/about.md`

```yaml
---
key: "about"
title: "About Nagiyev Studio"
title_az: "Nagiyev Studio Haqqında"
---

Nagiyev Studio is a multidisciplinary digital practice based in Baku, Azerbaijan.

We combine expertise in AI systems, product design and media production to build complete digital ecosystems — not just websites or apps.

## Who We Are

[founder bio, studio positioning, philosophy...]

## What We Believe

[approach, values...]
```

### Contact

**Путь:** `src/content/pages/contact.md`

```yaml
---
key: "contact"
title: "Contact"
title_az: "Əlaqə"
---

[Короткий текст — остальное будет кнопками WA/TG/phone в шаблоне]

Let's discuss your project. Reach out through any channel below.
```

### Homepage

**Путь:** `src/content/pages/home.md`

```yaml
---
key: "home"
title: "Nagiyev Studio"
title_az: "Nagiyev Studio"
hero_headline: "AI-powered digital systems, product design and media production for modern organizations."
hero_headline_az: "Müasir təşkilatlar üçün AI ilə işləyən rəqəmsal sistemlər, məhsul dizaynı və media istehsalı."
hero_cta: "Discuss a project"
hero_cta_az: "Layihəni müzakirə edin"
philosophy: "We build complete digital ecosystems — not just websites or apps. Every project combines strategic thinking, technical excellence and design craft."
philosophy_az: "Biz sadəcə veb-sayt və ya tətbiq deyil, tam rəqəmsal ekosistemlər qururuq. Hər bir layihə strateji düşüncə, texniki mükəmməllik və dizayn sənətkarlığını birləşdirir."
---
```

---

## 5. i18n — Как писать два языка

### Для frontmatter:

Каждое текстовое поле имеет пару:

```yaml
title: "English text"
title_az: "Azərbaycan mətni"
```

### Для тела (body content):

**Вариант A (рекомендуемый):** Два файла.

```
src/content/projects/azerscope.md         ← EN
src/content/projects/azerscope-az.md      ← AZ (slug: "azerscope")
```

В frontmatter AZ-версии добавляешь `locale: "az"`.

**Вариант B (простой):** Один файл, оба языка в теле.

```md
<!-- en -->
## The Challenge
...

<!-- az -->
## Çağırış
...
```

Шаблон сам покажет нужный блок.

**Для division/pages** — аналогично.

---

## 6. Картинки

### Где хранить:

```
public/images/projects/<project-slug>/
  cover.jpg          ← обложка для листинга
  screen-1.jpg       ← скриншот 1
  screen-2.jpg       ← скриншот 2
```

### Как подключать в frontmatter:

```yaml
cover: "/images/projects/azerscope/cover.jpg"
```

### Формат:

- JPG для фото, PNG для скриншотов/графики
- Оптимальный размер cover: 1200×630px (OG-размер)
- Названия файлов: lowercase, дефисы, латиница

### Не нужно:

- Создавать поддомен cdn — всё в проекте
- Указывать папку `public` в путях — для браузера корень сайта начинается внутри `public`.

---

## 7. Галереи и скриншоты в теле кейса

Для вставки картинок прямо в тело кейса — Markdown:

```md
![Dashboard interface showing real-time analytics](/images/projects/azerscope/screen-1.jpg)

*The main dashboard with live data visualization.*
```

Астро автоматически обработает `<img>` и оптимизирует.

---

## 8. Quick Reference

| Что хочешь добавить | Куда писать                          | Пример файла            |
| ------------------- | ------------------------------------ | ----------------------- |
| Новый кейс          | `site/src/content/projects/<slug>.md`| `azerscope.md`          |
| Контент контура     | `site/src/content/divisions/<key>.md`| `digital-systems-ai.md` |
| О себе              | `site/src/content/pages/about.md`    | `about.md`              |
| Контакты            | `site/src/content/pages/contact.md`  | `contact.md`            |
| Картинку кейса      | `site/public/images/projects/<slug>/`| `cover.jpg`             |

---

## 9. Workflow

```
1. Пишешь markdown-файл
2. Кидаешь картинки в public/images/projects/<slug>/
3. Указываешь пути в frontmatter (например `/images/...`)
4. git add → git commit → git push
5. npm run build
6. Заливаешь /dist на хостинг
```

Готово. Ни базы, ни API, ни админки. Просто файлы.
