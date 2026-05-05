import type { Metadata } from "next";
import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
import { Heading } from '@/components/Heading';
import TimelineSection from '@/components/TimelineSection';
import { notesSections } from '@/lib/notes-data';
import { terminalCommands, cliLabels, navigationLabels } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Notes — Mykhailo Trunov',
  description: 'Notes on how this portfolio was designed and built.',
};

export default function NotesPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={cliLabels.notes}
      />
      <BackLink href="/" label={navigationLabels.backToHome} />
      <Body className="mb-4 md:mb-6">
        This page describes how this portfolio was designed and built, including tools, decisions, and workflow.
      </Body>

      {notesSections.map((section) => (
        <TimelineSection key={section.title}>
          <Heading as="h4" className="text-lg font-bold mb-3">
            {section.title}
          </Heading>
          <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </TimelineSection>
      ))}
    </PageWrapper>
  );
}
