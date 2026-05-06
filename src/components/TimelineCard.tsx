import Link from 'next/link';
import { Heading } from './Heading';
import { Body } from './Body';
import { ariaLabels } from '@/lib/constants';

export interface TimelineCardProps {
  title: string;
  company: string;
  dateRange?: string;
  location?: string;
  description: string;
  liveHref?: string;
  liveLabel?: string;
  sourceHref?: string;
  linkHref: string;
}

export default function TimelineCard({
  title,
  company,
  dateRange,
  location,
  description,
  liveHref,
  liveLabel,
  sourceHref,
  linkHref,
}: TimelineCardProps) {
  return (
    <article className="flex flex-col gap-1 last:mb-0">
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
      {(liveHref || sourceHref) ? (
        <div className="flex flex-col items-start font-mono text-sm">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--accent-green) hover:text-(--accent-green-hover) transition-colors duration-200 underline underline-offset-4"
            >
              {liveLabel || 'Live project'}
            </a>
          ) : null}
          {sourceHref ? (
            <a
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-(--accent-green) hover:text-(--accent-green-hover) transition-colors duration-200 underline underline-offset-4"
            >
              Source code
            </a>
          ) : null}
        </div>
      ) : null}
      <Body className='line-clamp-3'>
        {description}
      </Body>
      <Link
        href={linkHref}
        className="font-medium text-(--accent-green) hover:text-(--accent-green-hover) transition-colors duration-200 inline-block cursor-pointer focus:underline focus:outline-none self-start"
        aria-label={ariaLabels.readMoreAbout(title, company)}
      >
        more...
      </Link>
    </article>
  );
}
