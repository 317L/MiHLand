import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_DIRECTUS_URL: z.string().url(),
  DIRECTUS_TOKEN: z.string().min(10),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_DIRECTUS_URL: process.env.NEXT_PUBLIC_DIRECTUS_URL,
  DIRECTUS_TOKEN: process.env.DIRECTUS_TOKEN,
});
