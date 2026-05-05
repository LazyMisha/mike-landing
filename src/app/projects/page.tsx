import type { Metadata } from "next";
import { PageWrapper } from '@/components/PageWrapper';
import TimelineList from '@/components/TimelineList';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
import { projects } from '@/lib/project-data';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Projects — Mykhailo Trunov',
  description: 'Selected projects and prototypes by Mykhailo Trunov, Senior Front-end Engineer.',
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.projects}
      />
      <BackLink href="/" label={navigationLabels.backToHome} />
      <Body className='mb-4 md:mb-6'>
        total: {projects.length}
      </Body>
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
    </PageWrapper>
  );
}
