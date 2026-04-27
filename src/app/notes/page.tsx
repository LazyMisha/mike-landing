import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
import { Heading } from '@/components/Heading';
import { terminalCommands, navigationLabels } from '@/lib/constants';

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

      <section className="mb-4 md:mb-6">
        <Heading as="h4" className="text-lg font-bold mb-3">
          Design & Ideation
        </Heading>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
          <li>ChatGPT used for layout ideas, UX iteration, and structure</li>
          <li>Focus on clarity and fast iteration over pixel perfection</li>
        </ul>
      </section>

      <section className="mb-4 md:mb-6">
        <Heading as="h4" className="text-lg font-bold mb-3">
          Structure & Architecture
        </Heading>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
          <li>Sections: experience, projects, case studies, notes</li>
          <li>Flat structure, no over-engineering</li>
          <li>Portfolio is a communication tool, not a complex system</li>
        </ul>
      </section>

      <section className="mb-4 md:mb-6">
        <Heading as="h4" className="text-lg font-bold mb-3">
          Coding & Implementation
        </Heading>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
          <li>OpenClaw used as coding agent</li>
          <li>Generated structure and scaffolded components</li>
          <li>AI used for speed, not for decision-making</li>
        </ul>
      </section>

      <section className="mb-4 md:mb-6">
        <Heading as="h4" className="text-lg font-bold mb-3">
          Tools & Workflow
        </Heading>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
          <li>ChatGPT → ideation, UX, content</li>
          <li>OpenClaw → code generation</li>
          <li>Stitch → UI experimentation</li>
        </ul>
      </section>

      <section className="mb-4 md:mb-6">
        <Heading as="h4" className="text-lg font-bold mb-3">
          Key Decisions
        </Heading>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
          <li>No backend (static approach)</li>
          <li>Prioritized readability and simplicity</li>
          <li>Consistent terminal-style UI</li>
        </ul>
      </section>

      <section className="mb-4 md:mb-6">
        <Heading as="h4" className="text-lg font-bold mb-3">
          Lessons Learned
        </Heading>
        <ul className="list-disc list-inside text-sm leading-relaxed space-y-1">
          <li>AI accelerates execution, not thinking</li>
          <li>Simplicity is more effective than abstraction for portfolios</li>
          <li>Clear communication &gt; visual complexity</li>
        </ul>
      </section>
    </PageWrapper>
  );
}
