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
}

export default function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="space-y-8">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          title={experience.title}
          dateRange={experience.dateRange}
          readTime={experience.readTime}
          description={experience.description}
          linkHref={experience.linkHref}
        />
      ))}
    </div>
  );
}
