import { PageEntrySchema, type PageEntry } from '@/types/page';
import { page as customSoftware } from './custom-software-development';
import { page as devops } from './devops-cloud-aws';
import { page as integrations } from './systems-data-integrations';
import { page as ai } from './ai-ai-development';
import { page as cyber } from './cybersecurity';

const registry: Record<string, PageEntry> = {
  [customSoftware.slug]: customSoftware,
  [devops.slug]: devops,
  [integrations.slug]: integrations,
  [ai.slug]: ai,
  [cyber.slug]: cyber,
};

export function getServicePageBySlug(slug: string): PageEntry {
  const entry = registry[slug];
  if (!entry) {
    // fallback da nikad ne puca
    const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
    return PageEntrySchema.parse({
      title,
      slug,
      sections: [{ type: 'hero', title, subtitle: 'Content coming soon' }],
    });
  }
  return PageEntrySchema.parse(entry);
}
