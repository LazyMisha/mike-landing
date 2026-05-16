interface DetailSectionProps {
  label: string;
  children: React.ReactNode;
}

export default function DetailSection({ label, children }: DetailSectionProps) {
  return (
    <div className="font-mono text-base">
      <p className="mb-2 font-semibold">{label}</p>
      {children}
    </div>
  );
}
