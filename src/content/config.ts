import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    lastUpdated: z.date().optional(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    isDraft: z.boolean().optional().default(false),
    isHidden: z.boolean().optional().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
