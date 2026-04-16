export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="max-w-[75ch] mx-auto px-4 py-8 md:py-12">
        {/* Terminal prompt */}
        <h1 className="text-lg md:text-xl font-mono mb-8 text-orange-400 dark:text-orange-500">
          user@lazydev:~$ cat case-studies
        </h1>

        {/* Placeholder content */}
        <p className="text-base mb-4">
          [ Case studies coming soon... ]
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          In-depth analysis of technical challenges and solutions.
        </p>
      </div>
    </main>
  );
}
