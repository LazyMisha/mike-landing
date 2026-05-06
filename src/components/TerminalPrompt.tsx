import { terminalPrompt } from '../lib/constants';

interface TerminalPromptProps {
    command: string;
    argument?: string;
}

export default function TerminalPrompt({ command, argument }: TerminalPromptProps) {
  return (
    <div className="text-zinc-500 dark:text-zinc-600 pb-4 md:pb-6">
          {terminalPrompt} {command}
          {argument ? ' ' : null}
          {argument ? (
            <span className="font-medium text-(--accent-green) transition-colors duration-200 inline-block cursor-pointer focus:underline focus:outline-none">
              {argument}
            </span>
          ) : null}
    </div>
  );
}
