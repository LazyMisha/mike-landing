import PageShell from '@/components/PageShell';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';

export default function CaseStudyNotFound() {
  return (
    <PageShell
      command={terminalCommands.view}
      argument={`${cliLabels.caseStudies}/unknown`}
      backHref="/case-studies"
      backLabel="[ back to case studies ]"
    >
      <p className="mt-6 text-base leading-relaxed text-red-600 dark:text-red-400">
        Error: Case study not found
      </p>
    </PageShell>
  );
}
