import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { terminalCommands, cliLabels, navigationLabels, errorMessages } from '@/lib/constants';

export default function ExperienceNotFound() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={`${cliLabels.experience}/?`}
      />
      <BackLink
        href="/experience"
        label={navigationLabels.backToExperienceList}
      />
      <p className="text-red-600 dark:text-red-400">
        {errorMessages.experienceNotFound}
      </p>
    </PageWrapper>
  );
}
