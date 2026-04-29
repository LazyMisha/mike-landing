import type { TimelineMilestone } from './timeline';

export interface Project {
  id: string;
  name: string;
  company: string;
  type: 'work' | 'personal';
  description: string;
  technologies: string[];
  achievements?: string[];
  timeline?: TimelineMilestone[];
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
    timeline: [
      {
        date: '2024',
        title: 'Context: evaluate product fit for Microsoft Graph',
        description:
          'The work started as a feasibility check for how Microsoft Graph API could support an existing product workflow.',
      },
      {
        date: '2024',
        title: 'Build: prototype the integration path',
        description:
          'A frontend prototype was used to explore user-facing behavior and clarify beta API details with the Microsoft product team.',
      },
      {
        date: '2024',
        title: 'Outcome: move from exploration into delivery',
        description:
          'The prototype helped stakeholders approve adoption and informed follow-up implementation work.',
      },
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
    timeline: [
      {
        date: '2023',
        title: 'Context: shape a conference-ready product story',
        description:
          'The team needed a presentable frontend flow that could communicate an AI-powered concept in an IBC2023 setting.',
      },
      {
        date: '2023',
        title: 'Build: prototype the UI around AI-powered services',
        description:
          'React UI work and API integration were iterated quickly to make the experience demo-ready.',
      },
      {
        date: 'IBC2023',
        title: 'Outcome: deliver a tangible demonstration flow',
        description:
          'The result gave stakeholders and conference audiences a clearer view of the emerging product direction.',
      },
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
    timeline: [
      {
        date: '2022-2024',
        title: 'Context: reduce friction in frontend delivery',
        description:
          'Pipeline work grew out of the need for more predictable builds, publishing, and deployment-related steps.',
      },
      {
        date: '2022-2024',
        title: 'Build: standardize CI/CD and Docker workflows',
        description:
          'GitLab CI/CD, Docker, and registry workflows were maintained and refined for day-to-day engineering use.',
      },
      {
        date: 'Ongoing',
        title: 'Outcome: support steadier release coordination',
        description:
          'The work improved release reliability and reduced manual coordination overhead across teams.',
      },
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
    timeline: [
      {
        date: '2022-2024',
        title: 'Context: improve production asset delivery',
        description:
          'Build optimization work focused on making frontend output more predictable and efficient.',
      },
      {
        date: '2022-2024',
        title: 'Build: refine Webpack configuration',
        description:
          'Hashing, compression, and build tooling adjustments were used to improve production build behavior.',
      },
      {
        date: 'Ongoing',
        title: 'Outcome: reinforce performance-aware frontend delivery',
        description:
          'The effort connected tooling maintenance with more reliable everyday frontend releases.',
      },
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
    timeline: [
      {
        date: 'Current',
        title: 'Context: create a concise portfolio with CV-aligned detail pages',
        description:
          'The project started as a focused portfolio build for recruiters, hiring managers, and engineering teams.',
      },
      {
        date: 'Current',
        title: 'Build: implement a terminal-led editorial UI',
        description:
          'Next.js, React, TypeScript, and Tailwind were used to ship a static site with reusable detail-page patterns.',
      },
      {
        date: 'Current',
        title: 'Outcome: maintain a test-backed personal showcase',
        description:
          'The site now acts as both a portfolio and a practical AI-assisted development exercise.',
      },
    ],
    linkHref: '/projects/5',
  },
];
