import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
import { terminalCommands, cliLabels, navigationLabels, errorMessages } from '@/lib/constants';

export default function ProjectNotFound() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={`${cliLabels.projects}/unknown`}
      />
      <BackLink
        href="/projects"
        label={navigationLabels.backToProjects}
      />
      <Body className="mt-6">
        {errorMessages.projectNotFound}
      </Body>
    </PageWrapper>
  );
}
