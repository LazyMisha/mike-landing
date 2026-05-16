import AccentSection from '@/components/ui/AccentSection';
import DetailSection from '@/components/ui/DetailSection';
import { Heading } from '@/components/ui/Heading';
import { caseStudyLabels } from '@/lib/case-study-data';

export interface CaseStudyDetailItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string[];
  technologies?: string[];
  linkHref: string;
}

interface CaseStudyDetailProps {
  item: CaseStudyDetailItem;
}

export default function CaseStudyDetail({ item }: CaseStudyDetailProps) {
  return (
    <div>
      {/* Title Section */}
      <AccentSection>
        <Heading as="h1">{item.title}</Heading>
      </AccentSection>

      {/* Problem Section */}
      <AccentSection>
        <DetailSection label={caseStudyLabels.problem}>
          <p className="leading-relaxed">{item.problem}</p>
        </DetailSection>
      </AccentSection>

      {/* Solution Section */}
      <AccentSection>
        <DetailSection label={caseStudyLabels.solution}>
          <p className="leading-relaxed">{item.solution}</p>
        </DetailSection>
      </AccentSection>

      {/* Result Section */}
      <AccentSection>
        <DetailSection label={caseStudyLabels.result}>
          <ul className="list-inside list-disc space-y-1">
            {item.result.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
        </DetailSection>
      </AccentSection>

      {/* Technologies Section */}
      {item.technologies && item.technologies.length > 0 && (
        <AccentSection>
          <DetailSection label={caseStudyLabels.technologies}>
            <p className="text-muted-foreground">
              {item.technologies.join(', ')}
            </p>
          </DetailSection>
        </AccentSection>
      )}
    </div>
  );
}
