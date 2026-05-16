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
        className="inline-block cursor-pointer font-semibold text-(--brand) transition-colors duration-200 focus:underline focus:outline-none"
      >
        ← {label}
      </Link>
    </div>
  );
}
