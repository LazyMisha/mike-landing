import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import { terminalCommands, cliLabels } from '@/lib/constants';

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.caseStudies}
      />
      <p className="text-base mb-4">
        [ Case studies coming soon... ]
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        In-depth analysis of technical challenges and solutions.
      </p>
    </PageWrapper>
  );
}
