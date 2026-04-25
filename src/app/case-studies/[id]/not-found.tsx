import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
import { terminalCommands, cliLabels } from '@/lib/constants';

export default function CaseStudyNotFound() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={`${cliLabels.caseStudies}/unknown`}
      />
      <BackLink
        href="/case-studies"
        label="[ back to case studies ]"
      />
      <Body className="mt-6">
        Error: Case study not found
      </Body>
    </PageWrapper>
  );
}
