import { generateStaticParamsFor } from '@/lib/static-params';

export const generateStaticParams = () => generateStaticParamsFor('case-studies');

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <main>Case study: {slug}</main>;
}
