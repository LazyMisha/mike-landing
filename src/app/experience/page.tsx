import type { Metadata } from "next";
import { PageWrapper } from '@/components/PageWrapper';
import TimelineList from '@/components/TimelineList';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { experiences } from '@/lib/experience-data';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Experience — Mykhailo Trunov',
  description: 'Professional experience and career timeline for Mykhailo Trunov, Senior Front-end Engineer.',
};

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.experience}
      />
      <BackLink href="/" label={navigationLabels.backToHome} />
      <TimelineList
        items={experiences}
      />
    </PageWrapper>
  );
}
