import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';
import { caseStudies } from '@/lib/case-study-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === id);
  if (!caseStudy) return { title: 'Not Found' };
  return {
    title: `${caseStudy.title} — Mykhailo Trunov`,
    description: caseStudy.problem.slice(0, 160),
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const caseStudy = caseStudies.find((cs) => cs.id === id);

  if (!caseStudy) {
    notFound();
  }

  return (
    <PageShell
      command={terminalCommands.view}
      argument={`${cliLabels.caseStudies}/${id}`}
      backHref="/case-studies"
      backLabel={navigationLabels.backToCaseStudies}
    >
      <CaseStudyDetail item={caseStudy} />
    </PageShell>
  );
}
