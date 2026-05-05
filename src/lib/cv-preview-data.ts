import { landingData } from './data';
import { experiences } from './experience-data';

export const cvPreviewData = {
  downloadHref: '/cv/mykhailo-trunov-cv.pdf',
  title: 'CV Preview',
  subtitle: 'A focused web summary of the full PDF CV.',
  summary:
    'Senior Front-end Engineer with expertise in React, JavaScript, performance optimization, and CI/CD. Experienced in building scalable, high-performance web applications, onboarding and mentoring engineers, delivering prototypes for international conferences and enterprise customers, and leading Agile delivery as a Scrum Master.',
  coreInfo: [
    { label: 'Role', value: 'Senior Front-end Engineer & Scrum Master' },
    { label: 'Location', value: landingData.personal.location },
    { label: 'Email', value: landingData.personal.email, href: `mailto:${landingData.personal.email}` },
    { label: 'LinkedIn', value: landingData.socials.linkedin, href: landingData.socials.linkedin },
  ],
  skillGroups: [
    {
      title: 'Frontend',
      items: ['React', 'JavaScript', 'TypeScript', 'Webpack'],
    },
    {
      title: 'Delivery',
      items: ['GitLab CI/CD', 'Docker', 'NPM registries', 'Nginx'],
    },
    {
      title: 'Quality',
      items: ['Jest', 'Unit tests', 'Performance optimization', 'Build optimization'],
    },
    {
      title: 'Collaboration',
      items: ['Scrum Master', 'Agile meetings', 'Stakeholder communication', 'Mentoring'],
    },
  ],
  currentRole: {
    title: 'Senior Front-end Engineer & Scrum Master',
    company: 'Avid',
    location: 'Poland',
    dateRange: '05.2024 - Present',
    bullets: [
      'Designed and delivered scalable React components and APIs, improving feature development speed and maintainability.',
      'Built GitLab CI/CD and Docker pipelines to reduce deployment time and support reliable releases.',
      'Improved Webpack builds with hashing and compression to reduce load times and enhance customer experience.',
      'Created prototypes for public conferences and customer presentations, including work that supported Microsoft Graph API adoption.',
      'Run Agile ceremonies, decompose complex work into user stories, generate sprint reports, and coordinate releases with release managers, product owners, and development teams.',
    ],
  },
  experienceSnapshot: experiences.map((exp) => ({
    title: exp.title,
    company: exp.company,
    location: exp.location,
    dateRange: exp.dateRange,
  })),
  selectedResults: [
    'Developed a prototype to evaluate Microsoft Graph API integration, helping stakeholders approve adoption and supporting delivery of new integration-powered features.',
    'Created AI-powered UI prototypes for IBC2023 and integrated them with backend services.',
    'Set up and maintained GitLab CI/CD pipelines, Docker workflows, and NPM registry publishing/deployment processes.',
    'Created visual tests for reusable React components and performance tests with Gatling and Scala from scratch.',
  ],
  education: {
    degree: 'Master’s degree of Business Project Management',
    institution: 'Lviv Polytechnic National University',
  },
} as const;
