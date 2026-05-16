import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import TimelineList from '@/components/timeline/TimelineList';
import { projects } from '@/lib/project-data';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';

export const metadata: Metadata = {
  title: 'Projects — Mykhailo Trunov',
  description:
    'Selected projects and prototypes by Mykhailo Trunov, Senior Front-end Engineer.',
};

export default function ProjectsPage() {
  return (
    <PageShell
      command={terminalCommands.view}
      argument={cliLabels.projects}
      backHref="/"
      backLabel={navigationLabels.backToHome}
    >
      <TimelineList
        items={projects.map((project) => ({
          id: project.id,
          title: project.name,
          company: project.company,
          description: project.description,
          liveHref: project.liveHref,
          liveLabel: project.liveLabel,
          sourceHref: project.sourceHref,
          linkHref: project.linkHref,
        }))}
      />
    </PageShell>
  );
}
