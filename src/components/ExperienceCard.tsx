import Link from 'next/link';
import { Heading } from './Heading';
import { Body } from './Body';

interface ExperienceCardProps {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  linkHref: string;
}

export default function ExperienceCard({
  title,
  company,
  dateRange,
  location,
  description,
  linkHref,
}: ExperienceCardProps) {
  return (
    <article className="mb-4 last:mb-0">
      <Heading as='h4'>
        {title}
      </Heading>
      <Body>
        @ {company}
      </Body>
      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
        <span>{dateRange}</span>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
        <span>{location}</span>
      </div>
      <Body className='line-clamp-3'>
        {description}
      </Body>
      <Link
        href={linkHref}
        className="text-(--accent-green) hover:text-(--accent-green-hover) transition-colors duration-200 inline-block cursor-pointer focus:underline focus:outline-none"
        aria-label={`Read more about ${title} at ${company}`}
      >
        [ read more ] →
      </Link>
    </article>
  );
}
