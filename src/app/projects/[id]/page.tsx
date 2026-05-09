import type { Metadata } from "next";
import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import ProjectDetail from '@/components/ProjectDetail';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';
import { projects } from '@/lib/project-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: 'Not Found' };
  return {
    title: `${project.name} — Mykhailo Trunov`,
    description: project.description.slice(0, 160),
  };
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
      <ProjectDetail item={project} />
    </PageWrapper>
  );
}
