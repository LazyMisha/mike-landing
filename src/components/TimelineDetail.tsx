import TimelineSection from './TimelineSection';
import { experienceLabels } from '@/lib/constants';

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
  sourceHref?: string;
  linkHref: string;
}

interface TimelineDetailProps {
  item: TimelineDetailItem;
  showMetadata?: boolean;
}

export default function TimelineDetail({ item, showMetadata = true }: TimelineDetailProps) {
  return (
    <div>
      {showMetadata ? (
        <TimelineSection>
          <div className="font-mono text-sm">
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
        </TimelineSection>
      ) : (
        <TimelineSection>
          <div className="font-mono text-sm">
            <p className="font-semibold text-lg">{item.title}</p>
            {item.company ? <p>@ {item.company}</p> : null}
          </div>
        </TimelineSection>
      )}

      {/* Description Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-4 md:mb-6">{experienceLabels.description}</p>
          <div className="font-mono text-sm leading-relaxed">
            {item.description.split('\n\n').map((para, i) => (
              <p key={i} className="mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </TimelineSection>

      {/* Technologies Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-4 md:mb-6">{experienceLabels.technologies}</p>
          <p className="text-gray-400">{item.technologies.join(', ')}</p>
        </div>
      </TimelineSection>

      {(item.liveHref || item.sourceHref) ? (
        <TimelineSection>
          <div className="font-mono text-sm">
            <p className="font-semibold mb-4 md:mb-6">Links:</p>
            <div className="flex flex-col gap-2">
              {item.liveHref ? (
                <a
                  href={item.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--accent-green) hover:text-(--accent-green-hover) transition-colors duration-200 underline underline-offset-4"
                >
                  Live project
                </a>
              ) : null}
              {item.sourceHref ? (
                <a
                  href={item.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--accent-green) hover:text-(--accent-green-hover) transition-colors duration-200 underline underline-offset-4"
                >
                  Source code
                </a>
              ) : null}
            </div>
          </div>
        </TimelineSection>
      ) : null}

      {/* Achievements Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-4 md:mb-6">{experienceLabels.achievements}</p>
          <ul className="list-disc list-inside space-y-1">
            {item.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>
      </TimelineSection>
    </div>
  );
}
