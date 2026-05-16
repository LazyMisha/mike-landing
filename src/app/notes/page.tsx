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
      <p className="mb-4 text-base leading-relaxed md:mb-6">
        This page describes how this portfolio was designed and built, including
        tools, decisions, and workflow.
      </p>

      {notesSections.map((section) => (
        <AccentSection key={section.title}>
          <Heading as="h4" className="mb-3 text-lg font-bold">
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
