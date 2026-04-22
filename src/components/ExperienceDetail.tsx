import { Experience } from '@/lib/experience-data';
import { experienceLabels } from '@/lib/constants';

interface ExperienceDetailProps {
  experience: Experience;
}

function TimelineSection({ children }: { children: React.ReactNode; isLast?: boolean }) {
  return (
    <div className="relative mb-6">
      {/* Green dot marker */}
      <span
        className="absolute left-0 top-1.5 w-2 h-2 bg-(--accent-green) rounded-full"
        aria-hidden="true"
      />
      {/* Vertical line segment with small gap from dot */}
      <div
        className="absolute left-[3px] top-5 w-px bg-chart-3"
        style={{ height: '100%' }}
        aria-hidden="true" 
      />
      {/* Content */}
      <div className="ml-6">
        {children}
      </div>
    </div>
  );
}

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  return (
    <div>
      {/* Metadata Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p>
            <span className="font-semibold">{experienceLabels.role}</span>{' '}
            {experience.title}
          </p>
          <p>
            <span className="font-semibold">{experienceLabels.company}</span>{' '}
            {experience.company}
          </p>
          <p>
            <span className="font-semibold">{experienceLabels.date}</span>{' '}
            {experience.dateRange}
          </p>
          <p>
            <span className="font-semibold">{experienceLabels.location}</span>{' '}
            {experience.location}
          </p>
        </div>
      </TimelineSection>

      {/* Description Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-6">{experienceLabels.description}</p>
          <div className="font-mono text-sm leading-relaxed">
            {experience.description.split('\n\n').map((para, i) => (
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
          <p className="font-semibold mb-6">{experienceLabels.technologies}</p>
          <p className="text-gray-400">{experience.technologies.join(', ')}</p>
        </div>
      </TimelineSection>

      {/* Achievements Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-6">{experienceLabels.achievements}</p>
          <ul className="list-disc list-inside space-y-1">
            {experience.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>
      </TimelineSection>
    </div>
  );
}
