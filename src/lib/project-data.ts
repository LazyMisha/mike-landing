export interface Project {
  id: string;
  name: string;
  company: string;
  type: 'work' | 'personal';
  description: string;
  technologies: string[];
  achievements?: string[];
  linkHref: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Low-Latency Trading Kernel',
    company: 'Monolith Corp',
    type: 'work',
    description:
      'Built a custom Linux kernel module for sub-microsecond trading execution. The system bypasses standard networking stack using DPDK and implements zero-copy memory management for market data ingestion.\n\nAchieved 40% latency reduction over previous C++ implementation by leveraging Rust\'s memory safety guarantees and careful cache-line optimization.',
    technologies: ['Rust', 'C++', 'Linux Kernel', 'DPDK', 'CUDA'],
    achievements: [
      'Reduced trading latency by 40%',
      'Zero-copy market data pipeline',
      'Custom memory allocator',
    ],
    linkHref: '/projects/1',
  },
  {
    id: '2',
    name: 'ML Training Orchestrator',
    company: 'NeuralNexus',
    type: 'work',
    description:
      'Developed a distributed training orchestration platform managing 1000+ GPU clusters. The system handles fault-tolerant training, automatic hyperparameter tuning, and real-time monitoring.\n\nBuilt with Kubernetes operators and custom scheduling logic to maximize cluster utilization while respecting training job priorities.',
    technologies: ['Python', 'Kubernetes', 'TensorFlow', 'PyTorch', 'Apache Kafka'],
    achievements: [
      'Scaled to 1000+ GPU clusters',
      '75% reduction in failed training jobs',
      'Real-time monitoring for 200+ engineers',
    ],
    linkHref: '/projects/2',
  },
  {
    id: '3',
    name: 'DevOps Automation Platform',
    company: 'CyberDyne Labs',
    type: 'work',
    description:
      'Created a comprehensive CI/CD automation platform for AI research environments. The platform manages containerized research sandboxes, security scanning, and cost-optimized resource allocation.\n\nReduced deployment time by 80% and caught 50+ security vulnerabilities before production through automated scanning.',
    technologies: ['Docker', 'Jenkins', 'AWS', 'Terraform', 'Ansible'],
    achievements: [
      '80% faster deployments',
      '50+ vulnerabilities caught pre-production',
      '30% infrastructure cost reduction',
    ],
    linkHref: '/projects/3',
  },
  {
    id: '4',
    name: 'Portfolio Terminal',
    company: 'Personal',
    type: 'personal',
    description:
      'A minimalist portfolio website built with Next.js and Tailwind CSS. Features a terminal-inspired design with system monospace typography, dark/light theme toggle, and smooth navigation.\n\nThis project showcases clean code architecture, component reusability, and attention to typographic detail.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    linkHref: '/projects/4',
  },
  {
    id: '5',
    name: 'Table Tennis Tracker',
    company: 'Personal',
    type: 'personal',
    description:
      'A web application for tracking table tennis league matches, player statistics, and team rankings. Integrates with LLTS API to fetch match results and calculates performance metrics.\n\nFeatures include player ranking visualization, match history, and team performance analytics.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'API Integration'],
    linkHref: '/projects/5',
  },
];
