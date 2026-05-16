export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string[];
  technologies?: string[];
  linkHref: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Microsoft Graph API adoption prototype',
    problem:
      'The team needed to evaluate whether Microsoft Graph API could support a planned product direction while the API surface still required clarification and stakeholder confidence.',
    solution:
      'I developed a frontend prototype to explore the integration path, clarify user-facing behavior, and validate technical feasibility. The work included collaboration with the Microsoft product team around beta API details and translating the findings into deliverable product features.',
    result: [
      'Stakeholders approved adoption after reviewing the prototype and integration direction',
      'The team gained clearer understanding of beta API behavior and product fit',
      'New Microsoft Graph-powered features moved from prototype exploration into delivery work',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Microsoft Graph API',
      'API integration',
    ],
    linkHref: '/case-studies/1',
  },
  {
    id: '2',
    title: 'AI-powered prototype delivery for IBC2023',
    problem:
      'A conference-facing product idea needed a frontend prototype that could show how AI-powered services might fit into a real user workflow.',
    solution:
      'I created UI prototypes and integrated them with AI-powered services, shaping the frontend experience so the concept could be demonstrated clearly in an IBC2023 context.',
    result: [
      'A demo-ready UI prototype was created for international conference presentation work',
      'Frontend flows were connected with AI-powered services for a more realistic product demonstration',
      'The work helped communicate an emerging product direction through a tangible interface',
    ],
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'AI-powered services',
      'API integration',
    ],
    linkHref: '/case-studies/2',
  },
  {
    id: '3',
    title: 'Frontend quality foundations',
    problem:
      'Reusable UI components and frontend features needed stronger automated quality coverage, including visual behavior and performance-oriented checks.',
    solution:
      'Before moving fully into frontend engineering, I built testing foundations as a Senior Test Engineer: visual tests for reusable React components, performance tests with Gatling and Scala, and an environment for testing UI features against Canary Chrome.',
    result: [
      'Reusable React components gained visual test coverage from scratch',
      'Performance testing foundations were created with Gatling and Scala',
      'UI feature testing against Canary Chrome became part of the quality workflow',
    ],
    technologies: [
      'React',
      'Java',
      'Groovy',
      'GitLab CI/CD',
      'JUnit',
      'Rest Assured',
      'Docker',
      'Gatling',
      'Scala',
    ],
    linkHref: '/case-studies/3',
  },
];

export const caseStudyLabels = {
  problem: 'problem:',
  solution: 'solution:',
  result: 'result:',
  technologies: 'technologies:',
} as const;
