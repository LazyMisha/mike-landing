import type { Metadata } from "next";
import PageShell from '@/components/PageShell';
import TimelineDetail from '@/components/timeline/TimelineDetail';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';
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
    <PageShell
      command={terminalCommands.view}
      argument={`${cliLabels.experience}/${id}`}
      backHref="/experience"
      backLabel={navigationLabels.backToExperienceList}
    >
      <TimelineDetail item={experience} />
    </PageShell>
  );
}
