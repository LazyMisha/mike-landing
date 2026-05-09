interface DetailSectionProps {
  label: string;
  children: React.ReactNode;
}

export default function DetailSection({ label, children }: DetailSectionProps) {
  return (
    <div className="font-mono text-base">
      <p className="font-semibold mb-2">{label}</p>
      {children}
    </div>
  );
}
