import Link from 'next/link';
import { Heading } from './Heading';
import { Body } from './Body';
import { ariaLabels } from '@/lib/constants';

export interface TimelineCardProps {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  linkHref: string;
}

export default function TimelineCard({
  title,
  company,
  dateRange,
  location,
  description,
  linkHref,
}: TimelineCardProps) {
  return (
    <article className="mb-4 last:mb-0">
      <Heading as='h4'>
        {title}
      </Heading>
      {company ? (
        <Body>
          @ {company}
        </Body>
      ) : null}
      {dateRange ? (
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <span>{dateRange}</span>
        </div>
      ) : null}
      {location ? (
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <span>{location}</span>
        </div>
      ) : null}
      <Body className='line-clamp-3'>
        {description}
      </Body>
      <Link
        href={linkHref}
        className="text-(--accent-green) hover:text-(--accent-green-hover) transition-colors duration-200 inline-block cursor-pointer focus:underline focus:outline-none"
        aria-label={ariaLabels.readMoreAbout(title, company)}
      >
        [ read more ] →
      </Link>
    </article>
  );
}
