import { ExternalLinkIcon, GithubIcon, YouTubeIcon } from '@/components/icons';
import AccentSection from '@/components/ui/AccentSection';
import { experienceLabels } from '@/lib/experience-data';

export interface TimelineDetailItem {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  liveHref?: string;
  liveLabel?: string;
  sourceHref?: string;
  linkHref: string;
}

interface TimelineDetailProps {
  item: TimelineDetailItem;
  showMetadata?: boolean;
}

export default function TimelineDetail({
  item,
  showMetadata = true,
}: TimelineDetailProps) {
  return (
    <div>
      {showMetadata ? (
        <AccentSection>
          <div className="font-mono text-base">
            <p>
              <span className="font-semibold">{experienceLabels.role}</span>{' '}
              {item.title}
            </p>
            <p>
              <span className="font-semibold">{experienceLabels.company}</span>{' '}
              {item.company}
            </p>
            <p>
              <span className="font-semibold">{experienceLabels.date}</span>{' '}
              {item.dateRange}
            </p>
            <p>
              <span className="font-semibold">{experienceLabels.location}</span>{' '}
              {item.location}
            </p>
          </div>
        </AccentSection>
      ) : (
        <AccentSection>
          <div className="font-mono text-base">
            <p className="text-lg font-semibold">{item.title}</p>
            {item.company ? <p>@ {item.company}</p> : null}
          </div>
        </AccentSection>
      )}

      {/* Description Section */}
      <AccentSection>
        <div className="font-mono text-base">
          <p className="mb-4 font-semibold md:mb-6">
            {experienceLabels.description}
          </p>
          <div className="leading-relaxed">
            {item.description.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </AccentSection>

      {/* Technologies Section */}
      <AccentSection>
        <div className="font-mono text-base">
          <p className="mb-4 font-semibold md:mb-6">
            {experienceLabels.technologies}
          </p>
          <p className="text-muted-foreground">
            {item.technologies.join(', ')}
          </p>
        </div>
      </AccentSection>

      {item.liveHref || item.sourceHref ? (
        <AccentSection>
          <div className="font-mono text-base">
            <p className="mb-4 font-semibold md:mb-6">Links:</p>
            <div className="flex flex-col items-start gap-2">
              {item.liveHref ? (
                <a
                  href={item.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-(--brand) underline underline-offset-4 transition-colors duration-200 hover:text-(--brand-hover)"
                >
                  {item.liveLabel === 'Watch demo' ? (
                    <YouTubeIcon />
                  ) : (
                    <ExternalLinkIcon />
                  )}
                  {item.liveLabel || 'Live project'}
                </a>
              ) : null}
              {item.sourceHref ? (
                <a
                  href={item.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-(--brand) underline underline-offset-4 transition-colors duration-200 hover:text-(--brand-hover)"
                >
                  <GithubIcon />
                  Source code
                </a>
              ) : null}
            </div>
          </div>
        </AccentSection>
      ) : null}

      {/* Achievements Section */}
      <AccentSection>
        <div className="font-mono text-base">
          <p className="mb-4 font-semibold md:mb-6">
            {experienceLabels.achievements}
          </p>
          <ul className="list-inside list-disc space-y-1">
            {item.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>
      </AccentSection>
    </div>
  );
}
