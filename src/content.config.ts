import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Markdown + MDX blog posts with typed frontmatter (rich text body, cover image, tags, SEO).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string(),
      cover: image(),
      coverAlt: z.string(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

// FAQ entries stored as a JSON file collection.
const faqs = defineCollection({
  loader: file('./src/data/faqs.json'),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.enum(['general', 'pricing', 'technical']),
    order: z.number(),
  }),
});

// Testimonials stored as YAML.
const testimonials = defineCollection({
  loader: file('./src/data/testimonials.yaml'),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    rating: z.number().min(1).max(5),
  }),
});

export const collections = { blog, faqs, testimonials };
