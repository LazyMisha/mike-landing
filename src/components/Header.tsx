'use client';

import { ThemeToggle } from './ThemeToggle';
import { LiveClock } from './LiveClock';

export function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto flex w-full max-w-[75ch] items-center justify-between px-4 py-2 backdrop-blur-md">
      <LiveClock />
      <ThemeToggle />
    </header>
  );
}
