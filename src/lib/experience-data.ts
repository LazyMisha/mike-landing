export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Kernel Architect',
    company: 'Monolith Corp',
    dateRange: '2022 - Present',
    description:
      'Leading the core systems team in developing low-latency high-frequency trading infrastructure. Focused on memory safety and extreme hardware optimization.',
    fullDescription:
      'As Senior Kernel Architect, I lead a team of 8 engineers building mission-critical trading infrastructure. My work focuses on reducing latency at the kernel level, implementing custom memory allocators, and optimizing cache utilization for sub-microsecond response times.\n\nKey responsibilities include architecture design, code reviews, performance profiling, and mentoring junior engineers. I collaborate closely with quantitative researchers to understand their computational needs and translate them into efficient system implementations.',
    technologies: ['Rust', 'C++', 'Linux Kernel', 'DPDK', 'CUDA', 'Performance Profiling'],
    achievements: [
      'Reduced trading latency by 40% through kernel-level optimizations',
      'Designed custom memory allocator reducing fragmentation by 60%',
      'Led migration from C++ to Rust for critical path components',
      'Mentored 3 junior engineers to mid-level positions',
    ],
    timeline: {
      start: '2022-01',
      end: 'Present',
      milestones: [
        { date: '2022-03', event: 'Joined Monolith Corp as Senior Kernel Architect' },
        { date: '2022-09', event: 'Led kernel bypass project using DPDK' },
        { date: '2023-06', event: 'Promoted to lead architect for core systems' },
        { date: '2024-01', event: 'Initiated Rust migration for safety-critical components' },
      ],
    },
    linkHref: '/experience/1',
  },
  {
    id: '2',
    title: 'Systems Engineer',
    company: 'NeuralNexus',
    dateRange: '2019 - 2022',
    description:
      'Developed scalable distributed backend systems for large-scale language model training clusters.',
    fullDescription:
      'At NeuralNexus, I built and maintained the infrastructure supporting large-scale ML training workloads. The systems I developed handled petabyte-scale data pipelines, distributed training orchestration, and real-time monitoring for clusters spanning thousands of GPUs.\n\nI worked on improving cluster utilization, implementing fault-tolerant training pipelines, and developing tooling for ML engineers to efficiently debug and optimize their models in production.',
    technologies: ['Python', 'Kubernetes', 'TensorFlow', 'PyTorch', 'Apache Kafka', 'Prometheus', 'Grafana'],
    achievements: [
      'Scaled training infrastructure to support 1000+ GPU clusters',
      'Implemented fault-tolerant training reducing failed jobs by 75%',
      'Built real-time monitoring dashboard used by 200+ ML engineers',
      'Optimized data pipeline throughput by 3x using Kafka streaming',
    ],
    timeline: {
      start: '2019-06',
      end: '2022-01',
      milestones: [
        { date: '2019-06', event: 'Started as Systems Engineer' },
        { date: '2020-02', event: 'Led Kubernetes migration for training workloads' },
        { date: '2021-01', event: 'Designed distributed training orchestration system' },
        { date: '2021-09', event: 'Promoted to Senior Systems Engineer' },
      ],
    },
    linkHref: '/experience/2',
  },
  {
    id: '3',
    title: 'Junior DevOps',
    company: 'CyberDyne Labs',
    dateRange: '2017 - 2019',
    description:
      'Maintained critical infrastructure and security protocols for internal research sandboxes.',
    fullDescription:
      'My first role in tech was as a Junior DevOps Engineer at CyberDyne Labs, where I was responsible for maintaining the infrastructure supporting cutting-edge AI research. I managed CI/CD pipelines, containerized research environments, and ensured security compliance for sensitive research data.\n\nThis role taught me the fundamentals of infrastructure as code, security best practices, and the importance of automation in modern software development.',
    technologies: ['Docker', 'Jenkins', 'AWS', 'Terraform', 'Ansible', 'Bash', 'Python'],
    achievements: [
      'Automated deployment pipeline reducing release time by 80%',
      'Implemented security scanning catching 50+ vulnerabilities before production',
      'Reduced infrastructure costs by 30% through resource optimization',
      'Created documentation system adopted company-wide',
    ],
    timeline: {
      start: '2017-03',
      end: '2019-05',
      milestones: [
        { date: '2017-03', event: 'Started as Junior DevOps Engineer' },
        { date: '2017-09', event: 'Led Docker containerization initiative' },
        { date: '2018-06', event: 'Implemented AWS cost optimization strategy' },
        { date: '2019-01', event: 'Promoted to DevOps Engineer' },
      ],
    },
    linkHref: '/experience/3',
  },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  achievements: string[];
  timeline: {
    start: string;
    end: string;
    milestones: Array<{
      date: string;
      event: string;
    }>;
  };
  linkHref: string;
}
