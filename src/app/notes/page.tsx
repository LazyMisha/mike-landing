import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
import { Heading } from '@/components/Heading';
import TimelineSection from '@/components/TimelineSection';
import { terminalCommands, navigationLabels } from '@/lib/constants';

const notesSections = [
  {
    title: 'Design \u0026 Ideation',
    items: [
      'ChatGPT used for layout ideas, UX iteration, and structure',
      'Focus on clarity and fast iteration over pixel perfection',
    ],
  },
  {
    title: 'Structure \u0026 Architecture',
    items: [
      'Sections: experience, projects, case studies, notes',
      'Flat structure, no over-engineering',
      'Portfolio is a communication tool, not a complex system',
    ],
  },
  {
    title: 'Coding \u0026 Implementation',
    items: [
      'OpenClaw used as coding agent',
      'Generated structure and scaffolded components',
      'AI used for speed, not for decision-making',
    ],
  },
  {
    title: 'Tools \u0026 Workflow',
    items: [
      'ChatGPT → ideation, UX, content',
      'OpenClaw → code generation',
      'Stitch → UI experimentation',
    ],
  },
  {
    title: 'Key Decisions',
    items: [
      'No backend (static approach)',
      'Prioritized readability and simplicity',
      'Consistent terminal-style UI',
    ],
  },
  {
    title: 'Lessons Learned',
    items: [
      'AI accelerates execution, not thinking',
      'Simplicity is more effective than abstraction for portfolios',
      'Clear communication \u003e visual complexity',
    ],
  },
];

export default function NotesPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument="[notes]"
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
