import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import Link from 'next/link';

export default function ExperienceNotFound() {
  return (
    <PageWrapper>
      <TerminalPrompt command="cat" argument="[experience]/???" />
      <div className="space-y-4">
        <p className="text-red-600 dark:text-red-400">
          Error: Experience not found
        </p>
        <Link
          href="/experience"
          className="text-lime-700 dark:text-lime-500 hover:text-lime-500"
        >
          ← [ back to experience list ]
        </Link>
      </div>
    </PageWrapper>
  );
}
