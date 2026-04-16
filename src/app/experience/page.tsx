import ExperienceList from '../../components/ExperienceList';
import { experiences } from '../../lib/experience-data';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="max-w-[75ch] mx-auto px-4 py-8 md:py-12">
        {/* Terminal prompt */}
        <h1 className="text-lg md:text-xl font-mono mb-8 text-orange-400 dark:text-orange-500">
          user@lazydev:~$ cat experience
        </h1>

        {/* Experience list - show all entries */}
        <ExperienceList experiences={experiences} />
      </div>
    </main>
  );
}
