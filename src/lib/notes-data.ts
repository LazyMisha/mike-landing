export interface NoteSection {
  title: string;
  items: string[];
}

export const notesSections: NoteSection[] = [
  {
    title: 'Design & Positioning',
    items: [
      'Portfolio positioned around real CV strengths: frontend craft, AI interest, delivery, and quality',
      'Tone kept concise, professional, editorial, and personal enough to avoid feeling like a template',
    ],
  },
  {
    title: 'Content Alignment',
    items: [
      'Case studies and CV preview are based on the downloadable PDF CV',
      'Placeholder companies and fake metrics were removed in favor of accurate, CV-backed content',
      'Qualitative results are used where the CV does not provide exact numbers',
    ],
  },
  {
    title: 'Structure & Architecture',
    items: [
      'Sections: case studies, CV preview, and notes',
      'Static data files keep content easy to review and update',
      'Portfolio remains a communication tool, not an over-engineered system',
    ],
  },
  {
    title: 'AI-assisted Workflow',
    items: [
      'AI used for planning, content iteration, code changes, and review support',
      'Human judgment kept as the source of truth for career facts and final wording',
      'AI-assisted development treated as a workflow advantage, not a replacement for thinking',
    ],
  },
  {
    title: 'Coding & Verification',
    items: [
      'Built with Next.js, React, TypeScript, Tailwind CSS, and Vitest',
      'Route behavior stays static, predictable, and easy to deploy',
      'Tests, linting, type checks, and production builds are used before shipping changes',
    ],
  },
  {
    title: 'Key Decisions',
    items: [
      'No backend or generated CV logic; the PDF is a static downloadable asset',
      'Terminal-style UI kept as navigation language rather than a gimmick',
      'Accuracy and clarity prioritized over exaggerated portfolio storytelling',
    ],
  },
];
