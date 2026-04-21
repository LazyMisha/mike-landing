export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Kernel Architect',
    company: 'Monolith Corp',
    dateRange: '2022 - Present',
    location: 'New York, NY',
    description:
      'As Senior Kernel Architect, I lead a team of 8 engineers building mission-critical trading infrastructure. My work focuses on reducing latency at the kernel level, implementing custom memory allocators, and optimizing cache utilization for sub-microsecond response times.\n\nKey responsibilities include architecture design, code reviews, performance profiling, and mentoring junior engineers. I collaborate closely with quantitative researchers to understand their computational needs and translate them into efficient system implementations.',
    technologies: ['Rust', 'C++', 'Linux Kernel', 'DPDK', 'CUDA', 'Performance Profiling'],
    achievements: [
      'Reduced trading latency by 40% through kernel-level optimizations',
      'Designed custom memory allocator reducing fragmentation by 60%',
      'Led migration from C++ to Rust for critical path components',
      'Mentored 3 junior engineers to mid-level positions',
    ],
    linkHref: '/experience/1',
  },
  {
    id: '2',
    title: 'Systems Engineer',
    company: 'NeuralNexus',
    dateRange: '2019 - 2022',
    location: 'San Francisco, CA',
    description:
      'At NeuralNexus, I built and maintained the infrastructure supporting large-scale ML training workloads. The systems I developed handled petabyte-scale data pipelines, distributed training orchestration, and real-time monitoring for clusters spanning thousands of GPUs.\n\nI worked on improving cluster utilization, implementing fault-tolerant training pipelines, and developing tooling for ML engineers to efficiently debug and optimize their models in production.',
    technologies: ['Python', 'Kubernetes', 'TensorFlow', 'PyTorch', 'Apache Kafka', 'Prometheus', 'Grafana'],
    achievements: [
      'Scaled training infrastructure to support 1000+ GPU clusters',
      'Implemented fault-tolerant training reducing failed jobs by 75%',
      'Built real-time monitoring dashboard used by 200+ ML engineers',
      'Optimized data pipeline throughput by 3x using Kafka streaming',
    ],
    linkHref: '/experience/2',
  },
  {
    id: '3',
    title: 'Junior DevOps',
    company: 'CyberDyne Labs',
    dateRange: '2017 - 2019',
    location: 'Los Angeles, CA',
    description:
      'My first role in tech was as a Junior DevOps Engineer at CyberDyne Labs, where I was responsible for maintaining the infrastructure supporting cutting-edge AI research. I managed CI/CD pipelines, containerized research environments, and ensured security compliance for sensitive research data.\n\nThis role taught me the fundamentals of infrastructure as code, security best practices, and the importance of automation in modern software development.',
    technologies: ['Docker', 'Jenkins', 'AWS', 'Terraform', 'Ansible', 'Bash', 'Python'],
    achievements: [
      'Automated deployment pipeline reducing release time by 80%',
      'Implemented security scanning catching 50+ vulnerabilities before production',
      'Reduced infrastructure costs by 30% through resource optimization',
      'Created documentation system adopted company-wide',
    ],
    linkHref: '/experience/3',
  },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
  linkHref: string;
}
