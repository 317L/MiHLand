import { generateStaticParamsFor } from '@/lib/static-params';

export const generateStaticParams = () => generateStaticParamsFor('technologies');

export default async function TechnologyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <main>Technology: {slug}</main>;
}
