import Link from 'next/link';
import TerminalPrompt from './TerminalPrompt';
import { terminalCommands, cliLinks } from '@/lib/cli-constants';

export default function CliNavigation() {
  return (
    <section>
      <TerminalPrompt command={terminalCommands.list} />
      <nav className="flex flex-col items-start gap-y-4 sm:flex-row sm:justify-between sm:gap-y-0">
        {cliLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="inline-block cursor-pointer font-semibold text-(--brand) transition-colors duration-200 focus:underline focus:outline-none"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
