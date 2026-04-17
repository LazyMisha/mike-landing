import { PageWrapper } from '@/components/PageWrapper';
import ExperienceList from '@/components/ExperienceList';
import TerminalPrompt from '@/components/TerminalPrompt';
import { experiences } from '@/lib/experience-data';
import { terminalCommands, cliLabels } from '@/lib/constants';

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.experience}
      />
      <ExperienceList
        experiences={experiences}
      />
    </PageWrapper>
  );
}
