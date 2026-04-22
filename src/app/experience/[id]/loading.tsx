import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import { terminalCommands, cliLabels } from '@/lib/constants';

export default function ExperienceDetailLoading() {
  return (
    <PageWrapper>
      <TerminalPrompt command={terminalCommands.view} argument={`${cliLabels.experience}/loading...`} />
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-4/5"></div>
        </div>
      </div>
    </PageWrapper>
  );
}
