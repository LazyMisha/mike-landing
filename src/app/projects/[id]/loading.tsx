import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';

export default function ProjectLoading() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={`${cliLabels.projects}/...`}
      />
      <BackLink
        href="/projects"
        label={navigationLabels.backToProjects}
      />
      <div className="mt-6 space-y-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
        </div>
      </div>
    </PageWrapper>
  );
}
