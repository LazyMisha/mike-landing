import type { Metadata } from "next";
import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import TimelineDetail from '@/components/TimelineDetail';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';
import { experiences } from '@/lib/experience-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const experience = experiences.find((exp) => exp.id === id);
  if (!experience) return { title: 'Not Found' };
  return {
    title: `${experience.title} — Mykhailo Trunov`,
    description: experience.description.slice(0, 160),
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={`${cliLabels.experience}/${id}`}
      />
      <BackLink
        href="/experience"
        label={navigationLabels.backToExperienceList}
      />
      <TimelineDetail item={experience} />
    </PageWrapper>
  );
}
