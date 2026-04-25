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
    title: 'High-Frequency Trading Latency Optimization',
    problem: 'Trading system experiencing 250μs latency spikes during market volatility, causing missed arbitrage opportunities and $2M daily losses.',
    solution: 'Implemented kernel-bypass networking with DPDK, custom memory allocators, and lock-free data structures. Rewrote hot path in Rust with careful cache-line optimization.',
    result: [
      'Reduced latency by 60% (250μs → 100μs)',
      'Eliminated latency spikes during volatility',
      '$2M daily loss prevented',
    ],
    technologies: ['Rust', 'C++', 'DPDK', 'Linux Kernel', 'CUDA'],
    linkHref: '/case-studies/1',
  },
  {
    id: '2',
    title: 'ML Training Infrastructure at Scale',
    problem: 'Training jobs failing at 40% rate on 1000+ GPU clusters, wasting compute resources and delaying model deployment by weeks.',
    solution: 'Built fault-tolerant training orchestrator with automatic checkpointing, spot instance handling, and dynamic resource allocation.',
    result: [
      'Reduced job failure rate from 40% to 5%',
      'Saved $500K/month in compute costs',
      'Model deployment time: 3 weeks → 3 days',
    ],
    technologies: ['Python', 'Kubernetes', 'TensorFlow', 'PyTorch', 'Apache Kafka'],
    linkHref: '/case-studies/2',
  },
  {
    id: '3',
    title: 'Zero-Downtime Database Migration',
    problem: 'Legacy PostgreSQL cluster hitting throughput limits during peak hours, causing 500 errors and user complaints.',
    solution: 'Designed dual-write pattern with gradual traffic shifting, real-time data validation, and automatic rollback triggers.',
    result: [
      'Zero downtime during 3-month migration',
      'Throughput increased 10x',
      'Zero data loss or corruption',
    ],
    technologies: ['PostgreSQL', 'CockroachDB', 'Kafka', 'Go', 'Terraform'],
    linkHref: '/case-studies/3',
  },
];
