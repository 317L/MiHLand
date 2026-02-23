import { z } from 'zod';

export const HeroSectionSchema = z.object({
  type: z.literal('hero'),
  title: z.string(),
  subtitle: z.string().optional(),
});

export const SectionSchema = z.discriminatedUnion('type', [HeroSectionSchema]);

export type Section = z.infer<typeof SectionSchema>;

export const PageEntrySchema = z.object({
  title: z.string(),
  slug: z.string(),
  sections: z.array(SectionSchema),
});

export type PageEntry = z.infer<typeof PageEntrySchema>;
