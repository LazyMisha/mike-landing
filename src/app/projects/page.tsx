import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import { terminalCommands, cliLabels } from '@/lib/constants';

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.projects}
      />
      <p className="text-base mb-4">
        [ Project entries coming soon... ]
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        This section will showcase personal and professional projects.
      </p>
    </PageWrapper>
  );
}
