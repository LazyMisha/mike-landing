import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import TimelineDetail from '@/components/TimelineDetail';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';
import { projects } from '@/lib/project-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={`${cliLabels.projects}/${id}`}
      />
      <BackLink
        href="/projects"
        label={navigationLabels.backToProjects}
      />
      <TimelineDetail
        item={{
          id: project.id,
          title: project.name,
          company: project.company,
          dateRange: project.type === 'personal' ? 'pet' : 'work',
          location: '',
          description: project.description,
          technologies: project.technologies,
          achievements: project.achievements || [],
          timeline: project.timeline,
          linkHref: project.linkHref,
        }}
      />
    </PageWrapper>
  );
}
