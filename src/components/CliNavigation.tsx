import Link from 'next/link';
import TerminalPrompt from './TerminalPrompt';
import { terminalCommands, cliLinks } from '@/lib/cli-constants';

export default function CliNavigation() {
  return (
    <section>
      <TerminalPrompt
        command={terminalCommands.list}
      />
      <nav className="flex flex-col items-start sm:justify-between sm:flex-row gap-y-4 sm:gap-y-0">
        {cliLinks.map((link) => (
          <Link 
            key={link.label} 
            href={link.href}
            className="font-semibold text-(--brand) transition-colors duration-200 inline-block cursor-pointer focus:underline focus:outline-none"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
