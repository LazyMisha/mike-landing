export interface Project {
  id: string;
  name: string;
  company: string;
  type: 'work' | 'personal';
  description: string;
  technologies: string[];
  achievements?: string[];
  liveHref?: string;
  sourceHref?: string;
  linkHref: string;
}

export const projects: Project[] = [
  {
    id: 'quizlab',
    name: 'QuizLab',
    company: 'Personal',
    type: 'personal',
    description:
      'No AI, no frameworks — just a straightforward vanilla JavaScript and CSS project from 2022, built for ISTQB exam preparation.',
    technologies: ['Vanilla JavaScript', 'CSS', 'Webpack', 'GitHub Pages', 'Zero AI'],
    achievements: [
      'Built selectable quiz sessions for ISTQB CTFL practice',
      'Created before AI coding tools became part of everyday development',
    ],
    liveHref: 'https://lazymisha.github.io/quizlab/',
    sourceHref: 'https://github.com/LazyMisha/quizlab',
    linkHref: '/projects/quizlab',
  },
  {
    id: 'ai-prompt-laba',
    name: 'AI Prompt Laba',
    company: 'Personal',
    type: 'personal',
    description:
      'A prompt engineering tool that turns vague ideas into professional, context-aware AI instructions. Features intelligent tool categorization, bilingual EN/UK UI, and full prompt management with history and collections.',
    technologies: ['Next.js 16', 'TypeScript', 'React 19', 'Tailwind CSS 4', 'OpenAI API', 'IndexedDB'],
    achievements: [
      'Built intelligent prompt enhancer with context-aware categorization across 9 different AI tool types',
      'Designed a complete prompt lifecycle — enhance, save to collections, and revisit through history',
      'Implemented bilingual routing with separate EN/UK dictionaries and locale-aware layouts',
    ],
    liveHref: 'https://ai-prmptlaba-web.vercel.app/',
    sourceHref: 'https://github.com/LazyMisha/ai-prmptlaba-web',
    linkHref: '/projects/ai-prompt-laba',
  },
];
