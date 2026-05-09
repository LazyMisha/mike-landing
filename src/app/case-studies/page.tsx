import type { Metadata } from "next";
import PageShell from '@/components/PageShell';
import TimelineList from '@/components/timeline/TimelineList';
import { caseStudies } from '@/lib/case-study-data';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';

export const metadata: Metadata = {
  title: 'Case Studies — Mykhailo Trunov',
  description: 'Detailed case studies of engineering work by Mykhailo Trunov.',
};

export default function CaseStudiesPage() {
  return (
    <PageShell
      command={terminalCommands.list}
      argument={cliLabels.caseStudies}
      backHref="/"
      backLabel={navigationLabels.backToHome}
    >
      <TimelineList
        items={caseStudies.map((study) => ({
          id: study.id,
          title: study.title,
          company: '',
          description: study.problem,
          linkHref: study.linkHref,
        }))}
      />
    </PageShell>
  );
}
