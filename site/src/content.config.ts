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
    services: z.array(z.string()).optional(),
    capabilities: z.array(z.string()),
    approach: z.string().optional(),
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
