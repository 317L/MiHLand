import { collections, type Collection } from '@/content/routes';

export function generateStaticParamsFor(collection: Collection) {
  return collections[collection].map((slug) => ({ slug }));
}
