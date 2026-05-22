// @ts-check
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// ─── Projects ───
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    division: z.enum(['digital-systems-ai', 'product-design', 'media-production']),
    type: z.enum(['case-study', 'design-showcase', 'media-portfolio']),
    category: z.string().optional(),
    year: z.number().optional(),
    client: z.string().optional(),
    summary: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    // ── Extended fields for rich project pages ──
    status: z.string().optional(),
    platforms: z.array(z.string()).optional(),
    role: z.string().optional(),
    company: z.string().optional(),
    hero_description: z.string().optional(),
    positioning_statement: z.string().optional(),
    core_systems: z.array(z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(z.string()).optional(),
    })).optional(),
    screenshot_aspect: z.enum(['vertical', 'horizontal']).optional(),
    screenshots: z.array(z.object({
      image: z.string(),
      caption: z.string(),
      aspect: z.enum(['vertical', 'horizontal']).optional(),
    })).optional(),
    technical_layers: z.array(z.string()).optional(),
    ai_description: z.string().optional(),
    ai_features: z.array(z.string()).optional(),
    design_description: z.string().optional(),
    design_image: z.string().optional(),
    design_principles: z.array(z.string()).optional(),
    value_delivered: z.array(z.string()).optional(),
    architecture_image: z.string().optional(),
    studio_role_summary: z.string().optional(),
    studio_areas: z.array(z.string()).optional(),
    cta_text: z.string().optional(),
    cta_link: z.string().optional(),
  }),
});

// ─── Divisions ───
const divisionsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/divisions' }),
  schema: z.object({
    key: z.enum(['digital-systems-ai', 'product-design', 'media-production']),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    // Hero
    hero_headline: z.string().optional(),
    hero_supporting: z.string().optional(),
    // Services grid
    services: z.array(z.string()).optional(),
    // Capabilities tags
    capabilities: z.array(z.string()),
    // "Good fit" checklist
    good_fit: z.array(z.string()).optional(),
    // Experience / approach block
    experience_summary: z.string().optional(),
    // CTA
    cta_text: z.string().optional(),
    cta_supporting: z.string().optional(),
    // Cover image
    cover: z.string().optional(),
  }),
});

// ─── Pages ───
const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    key: z.enum(['home', 'about', 'contact']),
    title: z.string(),
    // Homepage specific fields
    hero_headline: z.string().optional(),
    hero_supporting_text: z.string().optional(),
    hero_cta: z.string().optional(),
    philosophy: z.string().optional(),
    about_preview: z.string().optional(),
    bottom_cta_title: z.string().optional(),
    bottom_cta_text: z.string().optional(),
    bottom_cta_button: z.string().optional(),
    clients: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  divisions: divisionsCollection,
  pages: pagesCollection,
};
