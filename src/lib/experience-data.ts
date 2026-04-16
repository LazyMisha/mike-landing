export const experiences = [
  {
    id: '1',
    title: 'Principal Frontend Engineer | Scrum Master @ Avid',
    dateRange: 'May 2024 – Present',
    readTime: '4 min read',
    description:
      'Leading frontend architecture decisions and agile delivery for enterprise media solutions. Designed scalable UI components using React/TypeScript, established GitLab CI/CD pipelines with Docker integration, and resolved complex Webpack optimization challenges. Successfully prototyped Microsoft Graph API integration leading to company-wide adoption. Serving as Scrum Master—facilitating Agile ceremonies and coordinating releases with stakeholders.',
    linkHref: '#',
  },
  {
    id: '2',
    title: 'Senior Frontend Engineer @ GlobalLogic',
    dateRange: 'Apr 2022 – May 2024',
    readTime: '4 min read',
    description:
      'Developed sophisticated UI features and maintained backend services using JavaScript/TypeScript for MediaCentral platform. Built GitLab CI/CD pipelines, configured Docker containers and NPM registries. Created modular, reusable UI components with comprehensive unit test coverage. Pioneered AI-powered service integration for IBC2023 exhibition. Authored technical documentation and collaborated across frontend, backend, design, DevOps, and management teams.',
    linkHref: '#',
  },
  {
    id: '3',
    title: 'Frontend Engineer @ GlobalLogic',
    dateRange: 'Oct 2020 – Apr 2022',
    readTime: '3 min read',
    description:
      'Specialized in front-end development using JavaScript and React ecosystem. Collaborated closely with cross-functional teams including designers, backend engineers, and product owners to translate complex requirements into intuitive user interfaces. Participated actively in Agile ceremonies contributing to iterative development cycles.',
    linkHref: '#',
  },
  {
    id: '4',
    title: 'Senior Test Engineer',
    dateRange: 'Aug 2020 – Jun 2021',
    readTime: '3 min read',
    description:
      'Advanced testing role focusing on automation framework development using Groovy and Java. Designed and implemented robust CI/CD pipelines in GitLab CI to streamline testing workflows. Mentored junior team members on testing best practices and contributed to architectural decisions for test infrastructure scalability.',
    linkHref: '#',
  },
  {
    id: '5',
    title: 'Software Test Engineer',
    dateRange: 'Jul 2019 – Aug 2020',
    readTime: '3 min read',
    description:
      'Developed comprehensive automated test suites using Groovy, Java, JUnit, and Rest Assured for API and integration testing. Containerized test environments using Docker for consistent execution across CI/CD pipelines. Implemented GitLab CI/CD workflows that reduced manual testing effort and accelerated release cycles.',
    linkHref: '#',
  },
  {
    id: '6',
    title: 'Automation QA Engineer @ AB Soft',
    dateRange: 'May 2017 – Jul 2019',
    readTime: '3 min read',
    description:
      'Built and maintained UI automation frameworks from the ground up using Java and TestNG. Created comprehensive automated test suites for web applications, significantly reducing regression testing time. Configured Jenkins CI/CD pipelines for automated test execution. Actively reported bugs and collaborated with development teams to ensure timely resolution.',
    linkHref: '#',
  },
] as const;

export type Experience = (typeof experiences)[number];
