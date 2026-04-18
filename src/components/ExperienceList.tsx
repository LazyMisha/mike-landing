import ExperienceCard from './ExperienceCard';
import type { Experience } from '@/lib/experience-data';

interface ExperienceListProps {
  experiences: readonly Experience[];
  preview?: boolean; // If true, show only first 3 entries with "..." indicator
}

export default function ExperienceList({ experiences, preview = false }: ExperienceListProps) {
  const displayedExperiences = preview ? experiences.slice(0, 3) : experiences;

  return (
    <div className="space-y-8">
      {displayedExperiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          title={experience.title}
          company={experience.company}
          dateRange={experience.dateRange}
          description={experience.description}
          linkHref={experience.linkHref}
        />
      ))}
      
      {/* Preview indicator with "..." */}
      {preview && experiences.length > 3 && (
        <div className="text-center py-4 text-xl font-mono text-gray-400 dark:text-gray-500">
          ...
        </div>
      )}
    </div>
  );
}
