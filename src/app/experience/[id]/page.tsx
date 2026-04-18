import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import ExperienceDetail from '@/components/ExperienceDetail';
import { experiences } from '@/lib/experience-data';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
      <div className="mb-4">
        <Link
          href="/experience"
          className="text-lime-700 dark:text-lime-500 hover:text-lime-500 dark:hover:text-lime-300 transition-colors duration-200 inline-flex items-center gap-2"
        >
          ← {navigationLabels.backToExperienceList}
        </Link>
      </div>
      <ExperienceDetail experience={experience} />
    </PageWrapper>
  );
}
