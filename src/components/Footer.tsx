import Link from 'next/link';
import { Terminal } from 'lucide-react';
import { footerLabels, buildTools } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="mt-auto px-4 py-2 max-w-[75ch] mx-auto w-full">
      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground tracking-wide min-h-9">
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
              className="inline-flex items-center gap-1 font-semibold hover:text-foreground transition-colors"
              aria-label={tool.ariaLabel}
            >
              {tool.icon === 'terminal' ? (
                <Terminal className="w-3 h-3" />
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
