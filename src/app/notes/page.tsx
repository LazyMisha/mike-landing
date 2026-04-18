import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';

export default function NotesPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.notes}
      />
      <BackLink href="/" label={navigationLabels.backToHome} />
      <p className="text-base mb-4">
        [ Notes coming soon... ]
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Technical notes, thoughts, and learnings.
      </p>
    </PageWrapper>
  );
}
