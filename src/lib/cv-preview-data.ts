import { landingData } from './data';

export const cvPreviewData = {
  downloadHref: '/cv/mykhailo-trunov-cv.pdf',
  title: 'CV Preview',
  subtitle: 'A short overview of my experience, skills, and engineering focus.',
  summary:
    'I’m Mykhailo Trunov, a Senior Frontend Engineer focused on building scalable, maintainable, and user-friendly web applications. I enjoy solving complex frontend problems, improving developer experience, and turning product requirements into clean technical solutions.',
  coreInfo: [
    { label: 'Role', value: 'Senior Frontend Engineer' },
    { label: 'Location', value: landingData.personal.location },
    { label: 'Email', value: landingData.personal.email, href: `mailto:${landingData.personal.email}` },
    { label: 'LinkedIn', value: landingData.socials.linkedin, href: landingData.socials.linkedin },
    {
      label: 'Focus',
      value: 'Frontend architecture, React, UI systems, performance, testing, collaboration',
    },
  ],
  skillGroups: [
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Architecture',
      items: [
        'Component-driven development',
        'Scalable UI structure',
        'State management',
        'Design system thinking',
      ],
    },
    {
      title: 'Quality',
      items: ['Testing', 'Code review', 'Maintainability', 'Performance awareness'],
    },
    {
      title: 'Workflow',
      items: ['Git', 'CI/CD awareness', 'Agile collaboration', 'AI-assisted development workflow'],
    },
  ],
  experiencePreview: {
    title: 'Senior Frontend Engineer',
    company: 'Selected frontend and product teams',
    dateRange: 'Recent experience',
    bullets: [
      'Built and maintained scalable frontend features for real-world products',
      'Collaborated with cross-functional teams to deliver clean and reliable UI',
      'Improved frontend quality through maintainable components and clear engineering practices',
    ],
  },
  portfolioLinks: [
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Notes', href: '/notes' },
  ],
} as const;
