import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels } from '@/lib/constants';
import { caseStudies } from '@/lib/case-study-data';

interface PageProps {
  params: Promise<{ id: string }>;
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
        label="[ back to case studies ]"
      />
      <CaseStudyDetail item={caseStudy} />
    </PageWrapper>
  );
}
