import { terminalPrompt } from '@/lib/cli-constants';

interface TerminalPromptProps {
  command: string;
  argument?: string;
}

export default function TerminalPrompt({
  command,
  argument,
}: TerminalPromptProps) {
  return (
    <div className="text-muted-foreground pb-4 leading-relaxed md:pb-6">
      {terminalPrompt} {command}
      {argument ? ' ' : null}
      {argument ? (
        <span className="inline-block cursor-pointer font-semibold text-(--brand) transition-colors duration-200 focus:underline focus:outline-none">
          {argument}
        </span>
      ) : null}
    </div>
  );
}
