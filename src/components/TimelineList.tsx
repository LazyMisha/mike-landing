import TimelineCard from './TimelineCard';
import TimelineSection from './TimelineSection';

export interface TimelineListItem {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  liveHref?: string;
  sourceHref?: string;
  linkHref: string;
}

interface TimelineListProps {
  items: readonly TimelineListItem[];
  preview?: boolean; // If true, show only first 3 entries with "..." indicator
}

export default function TimelineList({ items, preview = false }: TimelineListProps) {
  const displayedItems = preview ? items.slice(0, 3) : items;

  return (
    <div>
      {displayedItems.map((item) => (
        <TimelineSection key={item.id}>
          <TimelineCard
            title={item.title}
            company={item.company}
            dateRange={item.dateRange}
            location={item.location}
            description={item.description}
            liveHref={item.liveHref}
            sourceHref={item.sourceHref}
            linkHref={item.linkHref}
          />
        </TimelineSection>
      ))}
      
      {/* Preview indicator with "..." */}
      {preview && items.length > 3 && (
        <div className="text-center py-4 text-xl font-mono text-gray-400 dark:text-gray-500">
          ...
        </div>
      )}
    </div>
  );
}
