// @ts-check
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── Projects ───
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    title_az: z.string(),
    slug: z.string(),
    division: z.enum(['digital-systems-ai', 'product-design', 'media-production']),
    type: z.enum(['case-study', 'design-showcase', 'media-portfolio']),
    year: z.number().optional(),
    client: z.string().optional(),
    summary: z.string(),
    summary_az: z.string(),
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
  }),
});

// ─── Pages ───
const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    key: z.enum(['home', 'about', 'contact']),
    title: z.string(),
    title_az: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  divisions: divisionsCollection,
  pages: pagesCollection,
};
