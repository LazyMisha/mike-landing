import TimelineCard from './TimelineCard';

export interface TimelineListItem {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  linkHref: string;
}

interface TimelineListProps {
  items: readonly TimelineListItem[];
  preview?: boolean; // If true, show only first 3 entries with "..." indicator
}

export default function TimelineList({ items, preview = false }: TimelineListProps) {
  const displayedItems = preview ? items.slice(0, 3) : items;

  return (
    <div className="space-y-8">
      {displayedItems.map((item) => (
        <TimelineCard
          key={item.id}
          title={item.title}
          company={item.company}
          dateRange={item.dateRange}
          location={item.location}
          description={item.description}
          linkHref={item.linkHref}
        />
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
