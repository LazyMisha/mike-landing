import Link from 'next/link';

export default function CliNavigation() {
  const links = [
    { label: 'experience', href: '/experience' },
    { label: 'projects', href: '/projects' },
    { label: 'case-studies', href: '/case-studies' },
    { label: 'notes', href: '/notes' },
  ];

  return (
    <section className="px-5 pb-20">
      <div className="max-w-[75ch] mx-auto font-mono">
        <div className="flex flex-col gap-y-2">
          {/* Prompt Line */}
          <div className="text-zinc-500 dark:text-zinc-600 text-sm sm:text-base">
            user@lazydev:~ $
          </div>
          
          {/* Links Line */}
          <nav className="flex flex-col sm:flex-row flex-wrap gap-y-2 sm:gap-y-0 sm:gap-x-8 text-sm sm:text-base">
            {links.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-lime-600 dark:text-lime-400 hover:text-lime-500 dark:hover:text-lime-300 transition-colors duration-200"
              >
                [{link.label}]
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
