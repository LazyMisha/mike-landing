'use client';

import { useEffect } from 'react';
import { Heading } from '@/components/ui/Heading';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <Heading as="h1">Something went wrong</Heading>
      <button
        onClick={() => reset()}
        className="border-border hover:bg-accent rounded-md border px-4 py-2 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
