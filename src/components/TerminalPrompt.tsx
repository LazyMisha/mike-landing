import { terminalPrompt } from '../lib/constants';

interface TerminalPromptProps {
    command: string;
    argument?: string;
}

export default function TerminalPrompt({ command, argument }: TerminalPromptProps) {
  return (
    <div className="text-muted-foreground leading-relaxed pb-4 md:pb-6">
          {terminalPrompt} {command}
          {argument ? ' ' : null}
          {argument ? (
            <span className="font-semibold text-(--brand) transition-colors duration-200 inline-block cursor-pointer focus:underline focus:outline-none">
              {argument}
            </span>
          ) : null}
    </div>
  );
}
