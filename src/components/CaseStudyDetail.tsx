import TimelineSection from './TimelineSection';
import TimelineMilestones from './TimelineMilestones';
import { caseStudyLabels } from '@/lib/constants';
import type { TimelineMilestone } from '@/lib/timeline';

export interface CaseStudyDetailItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string[];
  technologies?: string[];
  timeline?: TimelineMilestone[];
  linkHref: string;
}

interface CaseStudyDetailProps {
  item: CaseStudyDetailItem;
}

export default function CaseStudyDetail({ item }: CaseStudyDetailProps) {
  return (
    <div>
      {/* Title Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold text-lg">{item.title}</p>
        </div>
      </TimelineSection>

      {/* Problem Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-2">{caseStudyLabels.problem}</p>
          <p className="leading-relaxed">{item.problem}</p>
        </div>
      </TimelineSection>

      {/* Solution Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-2">{caseStudyLabels.solution}</p>
          <p className="leading-relaxed">{item.solution}</p>
        </div>
      </TimelineSection>

      {/* Result Section */}
      <TimelineSection>
        <div className="font-mono text-sm">
          <p className="font-semibold mb-2">{caseStudyLabels.result}</p>
          <ul className="list-disc list-inside space-y-1">
            {item.result.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </div>
      </TimelineSection>

      {/* Technologies Section */}
      {item.technologies && item.technologies.length > 0 && (
        <TimelineSection>
          <div className="font-mono text-sm">
            <p className="font-semibold mb-2">{caseStudyLabels.technologies}</p>
            <p className="text-gray-400">{item.technologies.join(', ')}</p>
          </div>
        </TimelineSection>
      )}

      {item.timeline && item.timeline.length > 0 && (
        <TimelineMilestones
          label={caseStudyLabels.timeline}
          entries={item.timeline}
        />
      )}
    </div>
  );
}
