import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import { terminalCommands, cliLabels } from '@/lib/constants';

export default function NotesPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.notes}
      />
      <p className="text-base mb-4">
        [ Notes coming soon... ]
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Technical notes, thoughts, and learnings.
      </p>
    </PageWrapper>
  );
}
