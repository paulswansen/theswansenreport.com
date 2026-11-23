import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BEAT_SLUGS } from './lib/beats';

// A date written as just "2026-11-23" is read as midnight UTC, which is the
// previous evening in Bayfield. Treat date-only values as noon Central time.
const pubDate = z.preprocess((v) => {
  if (v instanceof Date && v.getUTCHours() === 0 && v.getUTCMinutes() === 0 && v.getUTCSeconds() === 0) {
    return new Date(v.getTime() + 18 * 60 * 60 * 1000);
  }
  if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)) {
    return new Date(`${v}T12:00:00-06:00`);
  }
  return v;
}, z.coerce.date());

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: pubDate,
    updated: pubDate.optional(),
    beat: z.enum(BEAT_SLUGS),
    dateline: z.string().optional(),
    author: z.string().default('Paul Swansen'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
