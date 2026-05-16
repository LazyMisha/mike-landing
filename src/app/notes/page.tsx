import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Heading } from '@/components/ui/Heading';
import AccentSection from '@/components/ui/AccentSection';
import { notesSections } from '@/lib/notes-data';
import { terminalCommands, cliLabels } from '@/lib/cli-constants';
import { navigationLabels } from '@/lib/navigation-constants';

export const metadata: Metadata = {
  title: 'Notes — Mykhailo Trunov',
  description: 'Notes on how this portfolio was designed and built.',
};

export default function NotesPage() {
  return (
    <PageShell
      command={terminalCommands.view}
      argument={cliLabels.notes}
      backHref="/"
      backLabel={navigationLabels.backToHome}
    >
      <section className="mb-6 md:mb-8">
        <Heading>Notes</Heading>
        <p className="mt-3 text-base leading-relaxed">
          This page describes how this portfolio was designed and built,
          including tools, decisions, and workflow.
        </p>
      </section>

      {notesSections.map((section) => (
        <AccentSection key={section.title}>
          <Heading as="h2" className="mb-2">
            {section.title}
          </Heading>
          <ul className="list-inside list-disc space-y-1 text-sm leading-relaxed">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </AccentSection>
      ))}
    </PageShell>
  );
}
