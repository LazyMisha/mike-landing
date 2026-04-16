import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceList from '../../components/ExperienceList';

describe('ExperienceList', () => {
  const mockExperiences = [
    {
      id: '1',
      title: 'Senior Kernel Architect @ Monolith Corp',
      dateRange: '2022 - Present',
      readTime: '3 min read',
      description: 'Leading the core systems team.',
      linkHref: '#',
    },
    {
      id: '2',
      title: 'Systems Engineer @ NeuralNexus',
      dateRange: '2019 - 2022',
      readTime: '4 min read',
      description: 'Developed scalable distributed backend systems.',
      linkHref: '#',
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
    expect(screen.getByText('3 min read')).toBeInTheDocument();
    expect(screen.getByText('4 min read')).toBeInTheDocument();
  });

  it('renders read more links for all entries', () => {
    render(<ExperienceList experiences={mockExperiences} />);
    
    const readMoreLinks = screen.getAllByText('[ read more ]');
    expect(readMoreLinks).toHaveLength(2);
  });
});
