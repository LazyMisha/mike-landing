interface AccentSectionProps {
  children: React.ReactNode;
}

export default function AccentSection({ children }: AccentSectionProps) {
  return (
    <div className="relative mb-4 md:mb-6">
      {/* Green dot marker */}
      <span
        className="absolute top-1.5 left-0 h-2 w-2 rounded-full bg-(--brand)"
        aria-hidden="true"
      />
      {/* Vertical line segment with small gap from dot */}
      <div
        className="bg-chart-3 absolute top-5 left-[3px] w-px"
        style={{ height: '100%' }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="ml-6">{children}</div>
    </div>
  );
}
