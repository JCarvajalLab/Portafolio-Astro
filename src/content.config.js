import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    tag: z.string(),
    tagEn: z.string(),
    category: z.enum(['fullstack', 'frontend']),
    status: z.enum(['pending', 'live', 'completed']).default('completed'),
    image: z.string(),
    order: z.number(),
    year: z.string(),
    yearEn: z.string(),
    role: z.string(),
    roleEn: z.string(),
    summary: z.string(),
    summaryEn: z.string(),
    problem: z.string(),
    problemEn: z.string(),
    solution: z.string(),
    solutionEn: z.string(),
    architecture: z.array(z.string()),
    architectureEn: z.array(z.string()),
    results: z.array(z.string()),
    resultsEn: z.array(z.string()),
    stack: z.array(z.string()),
    demoUrl: z.string().url().nullable().optional(),
    repoUrl: z.string().url().nullable().optional(),
    highlight: z.boolean().default(false),
  }),
});

export const collections = { proyectos };
