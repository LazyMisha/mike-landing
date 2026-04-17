export const experiences = [
  {
    id: '1',
    title: 'Senior Kernel Architect',
    company: 'Monolith Corp',
    dateRange: '2022 - Present',
    description:
      'Leading the core systems team in developing low-latency high-frequency trading infrastructure. Focused on memory safety and extreme hardware optimization.',
    linkHref: '#',
  },
  {
    id: '2',
    title: 'Systems Engineer',
    company: 'NeuralNexus',
    dateRange: '2019 - 2022',
    description:
      'Developed scalable distributed backend systems for large-scale language model training clusters.',
    linkHref: '#',
  },
  {
    id: '3',
    title: 'Junior DevOps',
    company: 'CyberDyne Labs',
    dateRange: '2017 - 2019',
    description:
      'Maintained critical infrastructure and security protocols for internal research sandboxes.',
    linkHref: '#',
  },
] as const;

export type Experience = (typeof experiences)[number];
