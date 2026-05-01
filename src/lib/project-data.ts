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
      'A simple ISTQB exam preparation quiz built with vanilla JavaScript and CSS. One of my older projects, created fully without AI assistance before AI coding tools became mainstream.',
    technologies: ['Vanilla JavaScript', 'CSS', 'Webpack', 'GitHub Pages', 'Zero AI'],
    achievements: [
      'Built selectable quiz sessions for ISTQB CTFL practice',
      'Created before AI coding tools became part of everyday development',
    ],
    liveHref: 'https://lazymisha.github.io/quizlab/',
    sourceHref: 'https://github.com/LazyMisha/quizlab',
    linkHref: '/projects/quizlab',
  },
];
