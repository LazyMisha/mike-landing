import type { Metadata } from "next";
import PageShell from '@/components/PageShell';
import TimelineList from '@/components/timeline/TimelineList';
import { experiences } from '@/lib/experience-data';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';

export const metadata: Metadata = {
  title: 'Experience — Mykhailo Trunov',
  description: 'Professional experience and career timeline for Mykhailo Trunov, Senior Front-end Engineer.',
};

export default function ExperiencePage() {
  return (
    <PageShell
      command={terminalCommands.view}
      argument={cliLabels.experience}
      backHref="/"
      backLabel={navigationLabels.backToHome}
    >
      <TimelineList items={experiences} />
    </PageShell>
  );
}
