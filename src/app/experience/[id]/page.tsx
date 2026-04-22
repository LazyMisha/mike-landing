import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels, navigationLabels, experienceLabels } from '@/lib/constants';
import { experiences } from '@/lib/experience-data';

interface PageProps {
  params: Promise<{ id: string }>;
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
      {experienceLabels.role} {experience.title}<br/><br/>
      {experienceLabels.company} {experience.company}<br/><br/>
      {experienceLabels.date} {experience.dateRange}<br /><br />
      {experienceLabels.location} {experience.location}<br /><br />
      {experienceLabels.description} {experience.description}<br /><br/>
      {experienceLabels.technologies} {experience.technologies.join(', ')}<br /><br/>
      {experienceLabels.achievements} <ul>{experience.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}</ul><br/>
    </PageWrapper>
  );
}
