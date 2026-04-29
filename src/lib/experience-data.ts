import type { TimelineMilestone } from './timeline';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Front-end Engineer & Scrum Master',
    company: 'Avid',
    dateRange: '05.2024 - Present',
    location: 'Poland',
    description:
      'At Avid, I work across frontend engineering and Agile delivery. My frontend work focuses on scalable React components, API integration, build performance, test coverage, and delivery pipelines that support reliable releases.\n\nAs Scrum Master, I run Agile ceremonies, help split complex work into clear stories, prepare sprint reporting, and coordinate release work with product owners, release managers, and development teams.',
    technologies: ['React', 'JavaScript', 'GitLab CI/CD', 'Docker', 'Webpack', 'Jest'],
    achievements: [
      'Designed and delivered scalable React components and APIs for customer-facing product work',
      'Built GitLab CI/CD and Docker pipelines to support reliable release workflows',
      'Improved Webpack builds with hashing and compression to support better loading behavior',
      'Created prototypes for public conferences and customer presentations',
      'Developed a Microsoft Graph API integration prototype that helped stakeholders approve adoption',
    ],
    timeline: [
      {
        date: '05.2024',
        title: 'Joined Avid in a combined frontend and Scrum Master role',
        description:
          'Started owning frontend delivery alongside Agile coordination for product and release work.',
      },
      {
        date: '2024',
        title: 'Built a Microsoft Graph API prototype',
        description:
          'Used a frontend prototype to evaluate adoption, clarify integration behavior, and support stakeholder review.',
      },
      {
        date: 'Current',
        title: 'Sustained delivery pipelines and release coordination',
        description:
          'Continue working on CI/CD, Docker, Webpack improvements, and release collaboration across teams.',
      },
    ],
    linkHref: '/experience/1',
  },
  {
    id: '2',
    title: 'Senior Front-end Engineer',
    company: 'GlobalLogic',
    dateRange: '04.2022 - 05.2024',
    location: 'Ukraine, Kyiv',
    description:
      'As a Senior Front-end Engineer at GlobalLogic, I implemented product features with React, JavaScript, and TypeScript while also maintaining supporting JavaScript and TypeScript backend services.\n\nThe role combined feature delivery, unit testing, CI/CD maintenance, build tooling, Docker/NPM publishing workflows, documentation, task decomposition, and close collaboration with frontend, backend, design, DevOps, and management teams.',
    technologies: ['React', 'JavaScript', 'TypeScript', 'GitLab CI/CD', 'Docker', 'Webpack', 'NPM registries'],
    achievements: [
      'Implemented React, JavaScript, and TypeScript features for production product work',
      'Maintained JavaScript and TypeScript backend services connected to frontend delivery',
      'Set up and maintained GitLab CI/CD pipelines and Docker-based workflows',
      'Created documentation for reusable components, APIs, and engineering workflows',
      'Created UI prototypes integrated with AI-powered services for IBC2023',
    ],
    timeline: [
      {
        date: '04.2022',
        title: 'Stepped into the senior frontend role',
        description:
          'Took on broader ownership across feature delivery, backend support, and cross-team coordination.',
      },
      {
        date: '2023',
        title: 'Delivered an AI-powered UI prototype for IBC2023',
        description:
          'Turned an emerging product direction into a demo-ready frontend experience for conference presentation work.',
      },
      {
        date: '2022-2024',
        title: 'Kept delivery systems and collaboration patterns moving',
        description:
          'Maintained CI/CD, documentation, and day-to-day coordination with frontend, backend, design, DevOps, and management.',
      },
    ],
    linkHref: '/experience/2',
  },
  {
    id: '3',
    title: 'Front-end Engineer',
    company: 'GlobalLogic',
    dateRange: '08.2020 - 04.2022',
    location: 'Ukraine, Kyiv',
    description:
      'As a Front-end Engineer at GlobalLogic, I focused on JavaScript and ReactJS product development. This role built the foundation for my later senior frontend work by strengthening component delivery, product collaboration, and maintainable UI implementation.',
    technologies: ['JavaScript', 'ReactJS', 'HTML', 'CSS', 'Git'],
    achievements: [
      'Built frontend features with JavaScript and ReactJS',
      'Collaborated with product and engineering teams on UI delivery',
      'Developed practical frontend foundations that supported later senior engineering responsibilities',
    ],
    timeline: [
      {
        date: '08.2020',
        title: 'Started the frontend engineering track',
        description:
          'Moved into product-facing UI work with JavaScript and ReactJS as the core stack.',
      },
      {
        date: '2020-2022',
        title: 'Built day-to-day React and JavaScript foundations',
        description:
          'Strengthened component delivery, product collaboration, and maintainable frontend implementation.',
      },
    ],
    linkHref: '/experience/3',
  },
  {
    id: '4',
    title: 'Senior Test Engineer',
    company: 'GlobalLogic',
    dateRange: '07.2019 - 08.2020',
    location: 'Ukraine, Kyiv',
    description:
      'As a Senior Test Engineer, I worked on automation and quality infrastructure using Groovy, Java, GitLab CI/CD, JUnit, Rest Assured, Docker, Gatling, and Scala.\n\nThis QA background still shapes how I approach frontend engineering: testable components, reliable delivery, and confidence in release quality.',
    technologies: ['Groovy', 'Java', 'GitLab CI/CD', 'JUnit', 'Rest Assured', 'Docker', 'Gatling', 'Scala'],
    achievements: [
      'Created visual tests for reusable React components from scratch',
      'Created performance tests using Gatling and Scala from scratch',
      'Created an environment to test UI features against Canary Chrome from scratch',
      'Used automation and CI/CD practices to support reliable product quality',
    ],
    timeline: [
      {
        date: '07.2019',
        title: 'Joined as Senior Test Engineer',
        description:
          'Focused on automation and quality infrastructure for product delivery.',
      },
      {
        date: '2019-2020',
        title: 'Built visual and performance testing foundations',
        description:
          'Created visual tests for reusable React components and performance checks with Gatling and Scala.',
      },
      {
        date: '2020',
        title: 'Prepared a Canary Chrome UI test environment',
        description:
          'Set up an environment for validating UI features against Canary Chrome as part of the quality workflow.',
      },
    ],
    linkHref: '/experience/4',
  },
  {
    id: '5',
    title: 'Software Test Engineer',
    company: 'AB Soft',
    dateRange: '05.2017 - 07.2019',
    location: 'Ukraine, Odesa',
    description:
      'At AB Soft, I worked as a Software Test Engineer with Java, TestNG, and Jenkins. I created and supported UI automation tests, reported bugs, and communicated with other teams to improve product quality.',
    technologies: ['Java', 'TestNG', 'Jenkins', 'UI automation'],
    achievements: [
      'Created and supported UI automation tests',
      'Reported bugs and communicated quality findings with other teams',
      'Built an early foundation in automation, reliability, and cross-team collaboration',
    ],
    timeline: [
      {
        date: '05.2017',
        title: 'Started at AB Soft',
        description:
          'Joined as a Software Test Engineer working with Java, TestNG, and Jenkins.',
      },
      {
        date: '2017-2019',
        title: 'Built UI automation and testing support',
        description:
          'Created and maintained UI automation coverage while tracking issues and test behavior.',
      },
      {
        date: '2017-2019',
        title: 'Established cross-team communication habits',
        description:
          'Reported bugs and coordinated quality feedback with other teams to improve release confidence.',
      },
    ],
    linkHref: '/experience/5',
  },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  timeline?: TimelineMilestone[];
  linkHref: string;
}
