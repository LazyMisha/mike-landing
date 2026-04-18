import Link from 'next/link';

interface BackLinkProps {
  href: string;
  label: string;
}

export default function BackLink({ href, label }: BackLinkProps) {
  return (
    <div className="mb-4 md:mb-6">
      <Link
        href={href}
        className="text-lime-700 dark:text-lime-500 hover:text-lime-500 dark:hover:text-lime-300 transition-colors duration-200 inline-flex items-center gap-2"
      >
        ← {label}
      </Link>
    </div>
  );
}
