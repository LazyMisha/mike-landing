interface TimelineSectionProps {
  children: React.ReactNode;
}

export default function TimelineSection({ children }: TimelineSectionProps) {
  return (
    <div className="relative mb-4 md:mb-6">
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
