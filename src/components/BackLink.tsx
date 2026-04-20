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
        className="text-(--accent-green) transition-colors duration-200 inline-block cursor-pointer focus:underline focus:outline-none"
      >
        ← {label}
      </Link>
    </div>
  );
}
