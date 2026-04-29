export interface Project {
  id: string;
  name: string;
  company: string;
  type: 'work' | 'personal';
  description: string;
  technologies: string[];
  achievements?: string[];
  linkHref: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Microsoft Graph API Integration Prototype',
    company: 'Avid',
    type: 'work',
    description:
      'A frontend prototype created to evaluate Microsoft Graph API integration inside an existing product workflow. The work helped clarify product direction, technical feasibility, and the shape of the customer-facing experience.\n\nThe prototype supported stakeholder approval for adoption and led to delivery work around integration-powered features.',
    technologies: ['React', 'JavaScript', 'Microsoft Graph API', 'API integration', 'GitLab CI/CD'],
    achievements: [
      'Built a prototype that helped stakeholders approve Microsoft Graph API adoption',
      'Collaborated with the Microsoft product team to clarify beta API behavior',
      'Supported delivery of new integration-powered product features',
    ],
    linkHref: '/projects/1',
  },
  {
    id: '2',
    name: 'AI-powered IBC2023 UI Prototype',
    company: 'GlobalLogic',
    type: 'work',
    description:
      'A UI prototype built for IBC2023 and integrated with AI-powered services. The project focused on turning an emerging product idea into a presentable frontend experience for conference and stakeholder demos.\n\nThe work combined React UI delivery, API collaboration, and rapid iteration around a demo-ready product flow.',
    technologies: ['React', 'JavaScript', 'TypeScript', 'AI-powered services', 'API integration'],
    achievements: [
      'Created UI prototypes for IBC2023',
      'Integrated frontend flows with AI-powered services',
      'Supported product demonstration work for an international conference context',
    ],
    linkHref: '/projects/2',
  },
  {
    id: '3',
    name: 'GitLab CI/CD and Docker Delivery Pipeline',
    company: 'Avid / GlobalLogic',
    type: 'work',
    description:
      'Delivery pipeline work spanning GitLab CI/CD, Docker, and NPM registry workflows. The goal was to make builds, publishing, and deployment-related steps more predictable for frontend and product teams.\n\nThis work supported reliable releases and reduced manual friction around product delivery.',
    technologies: ['GitLab CI/CD', 'Docker', 'NPM registries', 'JavaScript', 'TypeScript'],
    achievements: [
      'Built and maintained GitLab CI/CD pipelines',
      'Used Docker and NPM registries for containerization, publishing, and deployment workflows',
      'Supported smoother release coordination across engineering and release teams',
    ],
    linkHref: '/projects/3',
  },
  {
    id: '4',
    name: 'Webpack Build Optimization',
    company: 'Avid / GlobalLogic',
    type: 'work',
    description:
      'Frontend build optimization work focused on Webpack configuration, hashing, compression, and production build output. The goal was to improve how frontend assets are built and delivered.\n\nThis work reflects my interest in frontend performance, maintainable tooling, and the details that make web applications feel more reliable.',
    technologies: ['Webpack', 'JavaScript', 'React', 'Performance optimization', 'Build tooling'],
    achievements: [
      'Improved Webpack build setup with hashing and compression',
      'Worked with optimized build creation for production frontend delivery',
      'Connected performance awareness with everyday frontend engineering practice',
    ],
    linkHref: '/projects/4',
  },
  {
    id: '5',
    name: 'Portfolio Terminal',
    company: 'Personal',
    type: 'personal',
    description:
      'A minimalist portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. It uses a terminal-inspired visual language, static content, dark/light theme support, and CV-aligned pages for experience, projects, case studies, and notes.\n\nThe project is also an experiment in AI-assisted development: using AI for planning, content iteration, code changes, and review while keeping final decisions human-led.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vitest', 'AI-assisted workflow'],
    achievements: [
      'Built a static portfolio with a concise editorial/terminal style',
      'Aligned portfolio content with the downloadable PDF CV',
      'Used tests and build checks to keep content changes safe',
    ],
    linkHref: '/projects/5',
  },
];
