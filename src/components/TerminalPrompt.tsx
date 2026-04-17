import { terminalPrompt } from '../lib/constants';

interface TerminalPromptProps {
    command: string;
    argument?: string;
}

export default function TerminalPrompt({ command, argument }: TerminalPromptProps) {
  return (
    <div className="text-zinc-500 dark:text-zinc-600 text-sm sm:text-base pb-4 md:pb-6">
          {terminalPrompt} {command}
          {argument ? ' ' : null}
          {argument ? (
            <span className="text-lime-700 dark:text-lime-500 hover:text-lime-500 dark:hover:text-lime-300 transition-colors duration-200">
              {argument}
            </span>
          ) : null}
    </div>
  );
}
