import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceList from '../../components/ExperienceList';
import type { Experience } from '@/lib/experience-data';

describe('ExperienceList', () => {
  const mockExperiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Kernel Architect',
      company: 'Monolith Corp',
      dateRange: '2022 - Present',
      description: 'Leading the core systems team.',
      technologies: ['Rust', 'C++'],
      achievements: ['Reduced latency by 40%'],
      location: 'New York, NY',
      linkHref: '/experience/1',
    },
    {
      id: '2',
      title: 'Systems Engineer',
      company: 'NeuralNexus',
      dateRange: '2019 - 2022',
      description: 'Developed scalable distributed backend systems.',
      technologies: ['Python', 'Kubernetes'],
      achievements: ['Scaled to 1000+ GPUs'],
      location: 'San Francisco, CA',
      linkHref: '/experience/2',
    },
  ];

  it('renders all experience entries', () => {
    render(<ExperienceList experiences={mockExperiences} />);
    
    expect(screen.getByText(/Senior Kernel Architect/i)).toBeInTheDocument();
    expect(screen.getByText(/Systems Engineer/i)).toBeInTheDocument();
  });

  it('renders metadata for each entry', () => {
    render(<ExperienceList experiences={mockExperiences} />);
    
    expect(screen.getByText('2022 - Present')).toBeInTheDocument();
    expect(screen.getByText('2019 - 2022')).toBeInTheDocument();
  });

  it('renders read more links for all entries', () => {
    render(<ExperienceList experiences={mockExperiences} />);
    
    const readMoreLinks = screen.getAllByText(/read more/i);
    expect(readMoreLinks).toHaveLength(2);
  });
});
