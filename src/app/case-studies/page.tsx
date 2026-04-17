import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';

export default function CaseStudiesPage() {
  return (
    <PageWrapper>
      <BackLink href="/" label={navigationLabels.backToHome} />
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
