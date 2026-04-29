import TimelineSection from './TimelineSection';
import type { TimelineMilestone } from '@/lib/timeline';

interface TimelineMilestonesProps {
  label: string;
  entries: TimelineMilestone[];
}

export default function TimelineMilestones({
  label,
  entries,
}: TimelineMilestonesProps) {
  return (
    <TimelineSection>
      <div className="font-mono text-sm">
        <p className="mb-4 font-semibold md:mb-6">{label}</p>
        <ol className="space-y-5">
          {entries.map((entry, index) => {
            const isLast = index === entries.length - 1;

            return (
              <li key={`${entry.date}-${entry.title}`} className="relative pl-6">
                <span
                  className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-(--accent-green)"
                  aria-hidden="true"
                />
                {!isLast && (
                  <span
                    className="absolute left-[3px] top-5 bottom-[-1.25rem] w-px bg-chart-3"
                    aria-hidden="true"
                  />
                )}
                <p className="text-xs uppercase tracking-[0.24em] text-gray-500">
                  {entry.date}
                </p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
                  {entry.title}
                </p>
                <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-400">
                  {entry.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </TimelineSection>
  );
}
