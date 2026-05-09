export const terminalPrompt = 'user@lazydev:~ $';

export const cliLabels = {
  experience: '[experience]',
  projects: '[projects]',
  caseStudies: '[case-studies]',
  notes: '[notes]',
  cvPreview: '[cv-preview]',
} as const;

export const cliLinks = [
  { label: cliLabels.experience, href: '/experience' },
  { label: cliLabels.projects, href: '/projects' },
  { label: cliLabels.caseStudies, href: '/case-studies' },
  { label: cliLabels.notes, href: '/notes' },
  { label: cliLabels.cvPreview, href: '/cv-preview' },
] as const;

export const terminalCommands = {
  list: 'ls',
  view: 'cat',
} as const;
