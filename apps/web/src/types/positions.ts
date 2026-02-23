import { z } from 'zod';

export const PositionSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  location: z.boolean().nullable().optional(),
  technologies: z.array(z.string()).default([]),
  employment_type: z.array(z.string()).default([]),
  is_active: z.boolean().optional(),
  apply_url: z.string().url().nullable().optional(),
  remote: z.any().nullable().optional(),
});

export type Position = z.infer<typeof PositionSchema>;

export const DirectusListResponseSchema = <T extends z.ZodTypeAny>(item: T) =>
  z.object({ data: z.array(item) });
