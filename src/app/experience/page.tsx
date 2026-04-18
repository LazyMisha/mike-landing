import { PageWrapper } from '@/components/PageWrapper';
import ExperienceList from '@/components/ExperienceList';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { experiences } from '@/lib/experience-data';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.experience}
      />
      <BackLink href="/" label={navigationLabels.backToHome} />
      <ExperienceList
        experiences={experiences}
      />
    </PageWrapper>
  );
}
