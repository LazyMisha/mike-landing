export interface NoteSection {
  title: string;
  items: string[];
}

export const notesSections: NoteSection[] = [
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
