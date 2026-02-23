import { generateStaticParamsFor } from '@/lib/static-params';
import { getServicePageBySlug } from '@/content/pages/services';
import { PageTemplate } from '@/features/page-template/PageTemplate';

export const generateStaticParams = () => generateStaticParamsFor('services');

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);
  return <PageTemplate page={page} />;
}
