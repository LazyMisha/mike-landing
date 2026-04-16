import Link from 'next/link';

interface ExperienceCardProps {
  title: string;
  dateRange: string;
  readTime: string;
  description: string;
  linkHref: string;
}

export default function ExperienceCard({
  title,
  dateRange,
  readTime,
  description,
  linkHref,
}: ExperienceCardProps) {
  return (
    <article className="mb-8 last:mb-0">
      {/* Title with underline styling */}
      <h3 className="text-lg font-bold underline mb-2 text-orange-400 dark:text-orange-500">
        {title}
      </h3>

      {/* Metadata line */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
        <span>📅</span>
        <span>{dateRange}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>

      {/* Description - truncated to max 3 lines */}
      <p className="text-base mb-3 leading-relaxed line-clamp-3">{description}</p>

      {/* Read more link */}
      <Link
        href={linkHref}
        className="text-lime-500 hover:text-lime-400 transition-colors"
      >
        [ read more ]
      </Link>
    </article>
  );
}
