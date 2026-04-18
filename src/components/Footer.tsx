import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto px-4 py-3 max-w-[75ch] mx-auto w-full border-t border-border/40">
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span>Built with</span>
        <Link
          href="https://openclaw.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-lime-700 dark:text-lime-500 hover:text-lime-500 dark:hover:text-lime-300 transition-colors duration-200 font-mono"
          aria-label="OpenClaw - AI Agent Framework"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Stylized claw/pincer icon */}
            <path d="M12 2L12 22" />
            <path d="M12 8L8 4" />
            <path d="M12 8L16 4" />
            <path d="M12 16L8 20" />
            <path d="M12 16L16 20" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <span className="font-semibold">OpenClaw</span>
        </Link>
      </div>
    </footer>
  );
}
