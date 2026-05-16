export interface Project {
  id: string;
  name: string;
  company: string;
  type: 'work' | 'personal';
  description: string;
  technologies: string[];
  achievements?: string[];
  liveHref?: string;
  liveLabel?: string;
  sourceHref?: string;
  linkHref: string;
}

export const projectLabels = {
  name: 'Name:',
  company: 'Company:',
  type: 'Type:',
  description: 'Description:',
  technologies: 'Technologies:',
  achievements: 'Achievements:',
} as const;

export const projects: Project[] = [
  {
    id: '1',
    name: 'MediaCentral AI Prototype for IBC2023',
    company: 'GlobalLogic / Avid',
    type: 'work',
    description:
      'Implemented demo-ready UI prototypes from scratch and integrated frontend flows with backend AI-powered services for Avid MediaCentral Cloud UX, helping showcase AI-assisted media production workflows during IBC2023.',
    technologies: [
      'React',
      'JavaScript',
      'AI Services',
      'REST APIs',
      'Webpack',
      'GitLab CI/CD',
    ],
    achievements: [
      'Implemented the frontend prototype from scratch for AI-powered MediaCentral Cloud UX workflows',
      'Integrated UI flows with backend AI-powered services',
      'Built demo-ready chatbot, recommendation engine, A-roll/B-roll suggestions, summary, transcription, and translation experiences',
      'Contributed to a prototype showcased during IBC2023',
      'Demonstrated how AI could support creative and editorial media teams',
    ],
    liveHref: 'https://www.youtube.com/watch?v=h-VYajOnqrI',
    liveLabel: 'Watch demo',
    linkHref: '/projects/1',
  },
  {
    id: '2',
    name: 'AI Prompt Laba',
    company: 'Personal',
    type: 'personal',
    description:
      'A prompt engineering tool that turns vague ideas into professional, context-aware AI instructions. Features intelligent tool categorization, bilingual EN/UK UI, and full prompt management with history and collections.',
    technologies: [
      'Next.js 16',
      'TypeScript',
      'React 19',
      'Tailwind CSS 4',
      'OpenAI API',
      'IndexedDB',
    ],
    achievements: [
      'Built intelligent prompt enhancer with context-aware categorization across 9 different AI tool types',
      'Designed a complete prompt lifecycle — enhance, save to collections, and revisit through history',
      'Implemented bilingual routing with separate EN/UK dictionaries and locale-aware layouts',
    ],
    liveHref: 'https://ai-prmptlaba-web.vercel.app/',
    sourceHref: 'https://github.com/LazyMisha/ai-prmptlaba-web',
    linkHref: '/projects/2',
  },
  {
    id: '3',
    name: 'QuizLab',
    company: 'Personal',
    type: 'personal',
    description:
      'No AI, no frameworks — just a straightforward vanilla JavaScript and CSS project from 2022, built for ISTQB exam preparation.',
    technologies: [
      'Vanilla JavaScript',
      'CSS',
      'Webpack',
      'GitHub Pages',
      'Zero AI',
    ],
    achievements: [
      'Built selectable quiz sessions for ISTQB CTFL practice',
      'Created before AI coding tools became part of everyday development',
    ],
    liveHref: 'https://lazymisha.github.io/quizlab/',
    sourceHref: 'https://github.com/LazyMisha/quizlab',
    linkHref: '/projects/3',
  },
];
