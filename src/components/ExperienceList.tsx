import ExperienceCard from './ExperienceCard';

interface Experience {
  id: string;
  title: string;
  dateRange: string;
  readTime: string;
  description: string;
  linkHref: string;
}

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
          dateRange={experience.dateRange}
          readTime={experience.readTime}
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
