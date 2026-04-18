import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import Link from 'next/link';
import { terminalCommands, cliLabels, navigationLabels, errorMessages } from '@/lib/constants';

export default function ExperienceNotFound() {
  return (
    <PageWrapper>
      <TerminalPrompt command={terminalCommands.view} argument={`${cliLabels.experience}/???`} />
      <div className="space-y-4">
        <p className="text-red-600 dark:text-red-400">
          {errorMessages.experienceNotFound}
        </p>
        <Link
          href="/experience"
          className="text-lime-700 dark:text-lime-500 hover:text-lime-500"
        >
          ← {navigationLabels.backToExperienceList}
        </Link>
      </div>
    </PageWrapper>
  );
}
