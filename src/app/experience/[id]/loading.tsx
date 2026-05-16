import PageShell from '@/components/PageShell';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';

export default function ExperienceDetailLoading() {
  return (
    <PageShell
      command={terminalCommands.view}
      argument={`${cliLabels.experience}/loading...`}
    >
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-800"></div>
        <div className="space-y-2">
          <div className="h-4 rounded bg-gray-200 dark:bg-gray-800"></div>
          <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800"></div>
          <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-800"></div>
        </div>
      </div>
    </PageShell>
  );
}
