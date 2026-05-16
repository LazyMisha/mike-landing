import { Heading } from './Heading';

interface DetailSectionProps {
  label: string;
  children: React.ReactNode;
}

export default function DetailSection({ label, children }: DetailSectionProps) {
  return (
    <div className="font-mono text-base">
      <Heading as="h2" className="mb-2">
        {label}
      </Heading>
      {children}
    </div>
  );
}
