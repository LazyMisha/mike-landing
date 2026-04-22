import { Experience } from '@/lib/experience-data';
import { experienceLabels } from '@/lib/constants';

interface ExperienceDetailProps {
  experience: Experience;
}

function TimelineSection({ children, isLast = false }: { children: React.ReactNode; isLast?: boolean }) {
  return (
    <div className="relative mb-8 last:mb-0">
      {/* Green dot marker */}
      <span
        className="absolute left-0 top-1.5 w-2 h-2 bg-green-500 rounded-full"
        aria-hidden="true"
      />
      {/* Vertical line segment with small gap from dot */}
      <div
        className="absolute left-[3px] top-5 w-px bg-gray-600"
        style={{ height: isLast ? '1.5rem' : 'calc(100% + 0.75rem)' }}
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
    <div className="mt-6">
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
        <div className="font-mono text-sm leading-relaxed">
          {experience.description.split('\n\n').map((para, i) => (
            <p key={i} className="mb-4 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </TimelineSection>

      {/* Technologies Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-1">{experienceLabels.technologies}</p>
          <p className="text-gray-400">{experience.technologies.join(', ')}</p>
        </div>
      </TimelineSection>

      {/* Achievements Section */}
      <TimelineSection isLast>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-2">{experienceLabels.achievements}</p>
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
