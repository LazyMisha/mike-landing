import type { Metadata } from "next";
import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';
import { caseStudies } from '@/lib/case-study-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={`${cliLabels.caseStudies}/${id}`}
      />
      <BackLink
        href="/case-studies"
        label={navigationLabels.backToCaseStudies}
      />
      <CaseStudyDetail item={caseStudy} />
    </PageWrapper>
  );
}
