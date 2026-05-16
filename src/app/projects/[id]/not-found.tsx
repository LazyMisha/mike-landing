import PageShell from '@/components/PageShell';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';
import { errorMessages } from '@/lib/error-messages';

export default function ProjectNotFound() {
  return (
    <PageShell
      command={terminalCommands.view}
      argument={`${cliLabels.projects}/unknown`}
      backHref="/projects"
      backLabel={navigationLabels.backToProjects}
    >
      <p className="mt-6 text-base leading-relaxed text-red-600 dark:text-red-400">
        {errorMessages.projectNotFound}
      </p>
    </PageShell>
  );
}
