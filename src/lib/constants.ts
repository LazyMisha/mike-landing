export const terminalPrompt = 'user@lazydev:~ $';

export const cliLabels = {
  experience: '[experience]',
  projects: '[projects]',
  caseStudies: '[case-studies]',
  notes: '[notes]',
  downloadCv: '[download-cv]',
};

export const cliLinks = [
  { label: cliLabels.experience, href: '/experience' },
  { label: cliLabels.projects, href: '/projects' },
  { label: cliLabels.caseStudies, href: '/case-studies' },
  { label: cliLabels.notes, href: '/notes' },
  { label: cliLabels.downloadCv, href: '/#' },
];

export const terminalCommands = {
  list: 'ls',
  view: 'cat',
};
