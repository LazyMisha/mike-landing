import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';

interface PageShellProps {
  children: React.ReactNode;
  command: string;
  argument: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageShell({
  children,
  command,
  argument,
  backHref,
  backLabel,
}: PageShellProps) {
  return (
    <PageWrapper>
      <TerminalPrompt command={command} argument={argument} />
      {backHref && backLabel ? (
        <BackLink href={backHref} label={backLabel} />
      ) : null}
      {children}
    </PageWrapper>
  );
}
