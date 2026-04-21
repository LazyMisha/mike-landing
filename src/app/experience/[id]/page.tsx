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
      {/* Title Heading */}
      <h1 className="text-2xl font-bold mb-4">{experience.title}</h1>
      {/* Company line */}
      <p className="text-gray-500 mb-2">@ {experience.company}</p>
      {/* Experience Detail Content */}
      <div className="relative pl-8 mt-6">
        {/* Vertical timeline line */}
        <div className="absolute left-3 top-0 h-full w-px bg-gray-300" aria-hidden="true" />
        {/* Metadata Section */}
        <section className="mb-8 relative">
          <span className="absolute left-3 top-2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
          <div className="ml-6">
            <p className="text-gray-500" aria-hidden="true"><span className="font-medium">Role:</span> {experience.title}</p>
            <p className="text-gray-500"><span className="font-medium">Company:</span> {experience.company}</p>
            <p className="text-gray-500"><span className="font-medium">Date:</span> {experience.dateRange}</p>
            <p className="text-gray-500"><span className="font-medium">Location:</span> {experience.location}</p>
          </div>
        </section>
        {/* Overview Section */}
        <section className="mb-8 relative">
          <span className="absolute left-3 top-2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
          <h2 className="ml-6 text-lg font-semibold mb-2">Overview</h2>
          <div className="ml-6 font-mono text-sm leading-relaxed">
            {experience.description.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
          </div>
        </section>
        {/* Technologies Section */}
        <section className="mb-8 relative">
          <span className="absolute left-3 top-2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
          <h2 className="ml-6 text-lg font-semibold mb-2">Technologies</h2>
          <div className="ml-6">
            <p className="text-gray-500"><span className="font-medium">Technologies:</span> {experience.technologies.join(', ')}</p>
          </div>
        </section>
        {/* Achievements Section */}
        <section className="relative">
          <span className="absolute left-3 top-2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
          <h2 className="ml-6 text-lg font-semibold mb-2">Key Achievements</h2>
          <div className="ml-6">
            <p className="text-gray-500 font-medium mb-2">Achievements:</p>
            <ul className="list-disc list-inside ml-4">
              {experience.achievements.map((ach, idx) => (
                <li key={idx} className="mb-1">{ach}</li>
              ))}
            </ul>
          </div>
        </section>
        {/* Timeline Section (placeholder) */}
        <section className="relative mt-8">
          <span className="absolute left-3 top-2 w-2 h-2 bg-green-500 rounded-full" aria-hidden="true" />
          <h2 className="ml-6 text-lg font-semibold mb-2">Timeline</h2>
          <div className="ml-6">
            <p className="text-gray-500">(No timeline data available)</p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
