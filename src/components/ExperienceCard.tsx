import Link from 'next/link';
import { Heading } from './Heading';
import { Body } from './Body';

interface ExperienceCardProps {
  title: string;
  company: string;
  dateRange: string;
  description: string;
  linkHref: string;
}

export default function ExperienceCard({
  title,
  company,
  dateRange,
  description,
  linkHref,
}: ExperienceCardProps) {
  return (
    <article className="mb-4 last:mb-0">
      <Heading as='h3'>
        {title}
      </Heading>
      <Body>
        @ {company}
      </Body>
      <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
        <span>{dateRange}</span>
      </div>
      <Body className='my-1'>
        {description}
      </Body>
      <Link
        href={linkHref}
        className="text-lime-700 dark:text-lime-500 hover:text-lime-500 dark:hover:text-lime-300 transition-colors duration-200"
      >
        [ read more ]
      </Link>
    </article>
  );
}
