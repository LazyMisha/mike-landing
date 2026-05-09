import Link from 'next/link';
import { ExternalLinkIcon, GithubIcon, YouTubeIcon } from '@/components/icons';
import { Heading } from '@/components/ui/Heading';
import { ariaLabels } from '@/lib/navigation-constants';

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
    <article className="flex flex-col gap-2 last:mb-0">
      <Heading as='h4'>
        {title}
      </Heading>
      {company ? (
        <p className="text-base leading-relaxed">
          @ {company}
        </p>
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
        <div className="flex flex-col gap-2 items-start font-mono text-sm">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-(--brand) hover:text-(--brand-hover) transition-colors duration-200 underline underline-offset-4 flex items-center gap-1.5"
            >
              {liveLabel === 'Watch demo' ? (
                <YouTubeIcon />
              ) : (
                <ExternalLinkIcon />
              )}
              {liveLabel || 'Live project'}
            </a>
          ) : null}
          {sourceHref ? (
            <a
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-(--brand) hover:text-(--brand-hover) transition-colors duration-200 underline underline-offset-4 flex items-center gap-1.5"
            >
              <GithubIcon />
              Source code
            </a>
          ) : null}
        </div>
      ) : null}
      <p className="text-base leading-relaxed line-clamp-3">
        {description}
      </p>
      <Link
        href={linkHref}
        className="font-semibold text-(--brand) hover:text-(--brand-hover) transition-colors duration-200 inline-block cursor-pointer focus:underline focus:outline-none self-start"
        aria-label={ariaLabels.readMoreAbout(title, company)}
      >
        more...
      </Link>
    </article>
  );
}
