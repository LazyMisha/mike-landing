import PageShell from '@/components/PageShell';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';
import { errorMessages } from '@/lib/error-messages';

export default function ExperienceNotFound() {
  return (
    <PageShell
      command={terminalCommands.view}
      argument={`${cliLabels.experience}/?`}
      backHref="/experience"
      backLabel={navigationLabels.backToExperienceList}
    >
      <p className="text-base leading-relaxed text-red-600 dark:text-red-400">
        {errorMessages.experienceNotFound}
      </p>
    </PageShell>
  );
}
