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
      <Heading as="h4">{title}</Heading>
      {company ? (
        <p className="text-base leading-relaxed">@ {company}</p>
      ) : null}
      {dateRange ? (
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{dateRange}</span>
        </div>
      ) : null}
      {location ? (
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>{location}</span>
        </div>
      ) : null}
      {liveHref || sourceHref ? (
        <div className="flex flex-col items-start gap-2 font-mono text-sm">
          {liveHref ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-(--brand) underline underline-offset-4 transition-colors duration-200 hover:text-(--brand-hover)"
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
              className="flex items-center gap-1.5 font-semibold text-(--brand) underline underline-offset-4 transition-colors duration-200 hover:text-(--brand-hover)"
            >
              <GithubIcon />
              Source code
            </a>
          ) : null}
        </div>
      ) : null}
      <p className="line-clamp-3 text-base leading-relaxed">{description}</p>
      <Link
        href={linkHref}
        className="inline-block cursor-pointer self-start font-semibold text-(--brand) transition-colors duration-200 hover:text-(--brand-hover) focus:underline focus:outline-none"
        aria-label={ariaLabels.readMoreAbout(title, company)}
      >
        more...
      </Link>
    </article>
  );
}
