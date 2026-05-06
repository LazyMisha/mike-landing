import type { Metadata } from "next";
import { PageWrapper } from '@/components/PageWrapper';
import TimelineList from '@/components/TimelineList';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { caseStudies } from '@/lib/case-study-data';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Case Studies — Mykhailo Trunov',
  description: 'Detailed case studies of engineering work by Mykhailo Trunov.',
};

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.list}
        argument={cliLabels.caseStudies}
      />
      <BackLink href="/" label={navigationLabels.backToHome} />
      <TimelineList
        items={caseStudies.map((study) => ({
          id: study.id,
          title: study.title,
          company: '',
          description: study.problem,
          linkHref: study.linkHref,
        }))}
      />
    </PageWrapper>
  );
}
