export const terminalPrompt = 'user@lazydev:~ $';

export const cliLabels = {
  experience: '[experience]',
  projects: '[projects]',
  caseStudies: '[case-studies]',
  notes: '[notes]',
  cvPreview: '[cv-preview]',
};

export const cliLinks = [
  { label: cliLabels.experience, href: '/experience' },
  { label: cliLabels.projects, href: '/projects' },
  { label: cliLabels.caseStudies, href: '/case-studies' },
  { label: cliLabels.notes, href: '/notes' },
  { label: cliLabels.cvPreview, href: '/#' },
];

export const terminalCommands = {
  list: 'ls',
  view: 'cat',
};

export const navigationLabels = {
  backToExperienceList: '[ back to experience list ]',
  backToProjects: '[ back to projects ]',
  backToHome: '[ back to home ]',
};

export const errorMessages = {
  experienceNotFound: 'Error: Experience not found',
  projectNotFound: 'Error: Project not found',
  pageNotFound: 'Error: Page not found',
};
