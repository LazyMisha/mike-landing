import Link from 'next/link';
import TerminalPrompt from './TerminalPrompt';
import { terminalCommands,cliLinks } from '@/lib/constants';

export default function CliNavigation() {
  return (
    <section>
      <TerminalPrompt
        command={terminalCommands.list}
      />
      <nav className="flex flex-col sm:flex-row flex-wrap gap-y-2 sm:gap-y-0 sm:gap-x-8 text-sm sm:text-base">
        {cliLinks.map((link) => (
          <Link 
            key={link.label} 
            href={link.href}
            className="text-lime-700 dark:text-lime-500 hover:text-lime-500 dark:hover:text-lime-300 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
