"use client";

import { ThemeToggle } from "./ThemeToggle";
import { LiveClock } from "./LiveClock";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-4 py-2 max-w-[75ch] mx-auto w-full backdrop-blur-md">
      <LiveClock />
      <ThemeToggle />
    </header>
  );
}
