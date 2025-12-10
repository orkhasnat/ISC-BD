import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transformer image object
		coverImage: image(),
		imageAlt: z.string().optional(),
		date: z.date().optional(),
		category: z.string().optional(),
        location: z.string().optional(),
	}),
});

export const collections = { projects };
