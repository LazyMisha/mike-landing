export const experiences = [
  {
    id: '1',
    title: 'Principal Frontend Engineer | Scrum Master @ Avid',
    dateRange: 'May 2024 – Present',
    readTime: '3 min read',
    description:
      'Leading frontend architecture and agile delivery. Built scalable UI components with React/TS, established CI/CD pipelines, and integrated Microsoft Graph API. Serving as Scrum Master for cross-functional team coordination.',
    linkHref: '#',
  },
  {
    id: '2',
    title: 'Senior Frontend Engineer @ GlobalLogic',
    dateRange: 'Apr 2022 – May 2024',
    readTime: '3 min read',
    description:
      'Developed complex UI solutions using React, JS, and TS. Built GitLab CI/CD pipelines, Dockerized environments, and integrated AI-powered services for MediaCentral (IBC2023). Created comprehensive documentation and unit tests.',
    linkHref: '#',
  },
  {
    id: '3',
    title: 'Frontend Engineer @ GlobalLogic',
    dateRange: 'Oct 2020 – Apr 2022',
    readTime: '2 min read',
    description:
      'Focused on front-end development with JavaScript and React. Collaborated with cross-functional teams to deliver high-quality web applications.',
    linkHref: '#',
  },
  {
    id: '4',
    title: 'Senior Test Engineer',
    dateRange: 'Aug 2020 – Jun 2021',
    readTime: '2 min read',
    description:
      'Worked with Groovy, Java, and GitLab CI/CD. Enhanced testing infrastructure and code quality processes.',
    linkHref: '#',
  },
  {
    id: '5',
    title: 'Software Test Engineer',
    dateRange: 'Jul 2019 – Aug 2020',
    readTime: '2 min read',
    description:
      'Developed automated tests using Groovy, Java, JUnit, Rest Assured, and Docker. Implemented CI/CD workflows in GitLab.',
    linkHref: '#',
  },
  {
    id: '6',
    title: 'Automation QA Engineer @ AB Soft',
    dateRange: 'May 2017 – Jul 2019',
    readTime: '2 min read',
    description:
      'Built UI automation frameworks with Java, TestNG, and Jenkins. Created and maintained auto-tests, reported bugs, and collaborated with development teams.',
    linkHref: '#',
  },
] as const;

export type Experience = (typeof experiences)[number];
