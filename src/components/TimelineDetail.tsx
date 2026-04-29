import TimelineSection from './TimelineSection';
import TimelineMilestones from './TimelineMilestones';
import { experienceLabels } from '@/lib/constants';
import type { TimelineMilestone } from '@/lib/timeline';

export interface TimelineDetailItem {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  timeline?: TimelineMilestone[];
  linkHref: string;
}

interface TimelineDetailProps {
  item: TimelineDetailItem;
}

export default function TimelineDetail({ item }: TimelineDetailProps) {
  return (
    <div>
      {/* Metadata Section */}
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

      {item.timeline && item.timeline.length > 0 && (
        <TimelineMilestones
          label={experienceLabels.timeline}
          entries={item.timeline}
        />
      )}
    </div>
  );
}
