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
  linkHref: string;
}
