import AccentSection from '@/components/ui/AccentSection';
import DetailSection from '@/components/ui/DetailSection';
import { ExternalLinkIcon, GithubIcon, YouTubeIcon } from '@/components/icons';
import { projectLabels } from '@/lib/project-data';

export interface ProjectDetailItem {
  id: string;
  name: string;
  company: string;
  type: 'work' | 'personal';
  description: string;
  technologies: string[];
  achievements?: string[];
  liveHref?: string;
  liveLabel?: string;
  sourceHref?: string;
  linkHref: string;
}

interface ProjectDetailProps {
  item: ProjectDetailItem;
}

export default function ProjectDetail({ item }: ProjectDetailProps) {
  return (
    <div>
      {/* Title Section */}
      <AccentSection>
        <p className="font-mono text-base text-lg font-semibold">{item.name}</p>
        {item.company ? (
          <p className="font-mono text-base">@ {item.company}</p>
        ) : null}
      </AccentSection>

      {/* Type & Company */}
      <AccentSection>
        <DetailSection label={projectLabels.type}>
          <p className="leading-relaxed">{item.type}</p>
        </DetailSection>
      </AccentSection>

      {/* Description Section */}
      <AccentSection>
        <DetailSection label={projectLabels.description}>
          <p className="leading-relaxed">{item.description}</p>
        </DetailSection>
      </AccentSection>

      {/* Technologies Section */}
      <AccentSection>
        <DetailSection label={projectLabels.technologies}>
          <p className="text-muted-foreground">
            {item.technologies.join(', ')}
          </p>
        </DetailSection>
      </AccentSection>

      {/* Achievements Section */}
      {item.achievements && item.achievements.length > 0 && (
        <AccentSection>
          <DetailSection label={projectLabels.achievements}>
            <ul className="list-inside list-disc space-y-1">
              {item.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </DetailSection>
        </AccentSection>
      )}

      {/* Links Section */}
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
    </div>
  );
}
