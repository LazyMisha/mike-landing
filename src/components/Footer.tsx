import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto px-4 py-3 max-w-[75ch] mx-auto w-full">
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span>Built with</span>
        <Link
          href="https://openclaw.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5"
          aria-label="OpenClaw - AI Agent Framework"
        >
          <span className="font-semibold">
            OpenClaw
          </span>
        </Link>
      </div>
    </footer>
  );
}
