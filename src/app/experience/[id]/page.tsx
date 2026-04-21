import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { notFound } from 'next/navigation';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';
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
      Role: {experience.title}<br/><br/>
      Company: {experience.company}<br/><br/>
      Date: {experience.dateRange}<br /><br />
      Location: {experience.location}<br /><br />
      Description: {experience.description}<br /><br/>
      Technologies: {experience.technologies.join(', ')}<br /><br/>
      Achievements: <ul>{experience.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}</ul><br/>
    </PageWrapper>
  );
}
