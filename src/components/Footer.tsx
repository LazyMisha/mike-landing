import Link from 'next/link';
import { Terminal } from 'lucide-react';
import { footerLabels, buildTools } from '@/lib/footer-constants';

export function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[75ch] px-4 py-2">
      <div className="text-muted-foreground flex min-h-9 items-center justify-center gap-1.5 text-xs leading-relaxed">
        <span>{footerLabels.builtWith}</span>
        {buildTools.map((tool, index) => (
          <span key={tool.name} className="contents">
            {index > 0 && (
              <span className="opacity-40">{footerLabels.separator}</span>
            )}
            <Link
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground inline-flex items-center gap-1 font-semibold transition-colors"
              aria-label={tool.ariaLabel}
            >
              {tool.icon === 'terminal' ? (
                <Terminal className="h-3 w-3" />
              ) : (
                <span>{tool.icon}</span>
              )}
              <span>{tool.name}</span>
            </Link>
          </span>
        ))}
      </div>
    </footer>
  );
}
