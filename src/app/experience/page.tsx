import { PageWrapper } from '@/components/PageWrapper';
import TimelineList from '@/components/TimelineList';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
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
      <Body className='mb-4 md:mb-6'>
        total: {experiences.length}
      </Body>
      <TimelineList
        items={experiences}
      />
    </PageWrapper>
  );
}
