import PageShell from '@/components/PageShell';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';

export default function CaseStudyLoading() {
  return (
    <PageShell
      command={terminalCommands.view}
      argument={`${cliLabels.caseStudies}/...`}
      backHref="/case-studies"
      backLabel="[ back to case studies ]"
    >
      <div className="mt-6 space-y-8">
        <div className="animate-pulse">
          <div className="mb-2 h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-800"></div>
          <div className="mb-2 h-4 w-1/3 rounded bg-gray-200 dark:bg-gray-800"></div>
          <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-800"></div>
        </div>
      </div>
    </PageShell>
  );
}
