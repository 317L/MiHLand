import { generateStaticParamsFor } from '@/lib/static-params';

export const generateStaticParams = () => generateStaticParamsFor('industries');

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <main>Industry: {slug}</main>;
}
