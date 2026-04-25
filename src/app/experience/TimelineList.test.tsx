import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineList from '../../components/TimelineList';
import type { TimelineListItem } from '../../components/TimelineList';

describe('TimelineList', () => {
  const mockItems: TimelineListItem[] = [
    {
      id: '1',
      title: 'Senior Kernel Architect',
      company: 'Monolith Corp',
      dateRange: '2022 - Present',
      description: 'Leading the core systems team.',
      location: 'New York, NY',
      linkHref: '/experience/1',
    },
    {
      id: '2',
      title: 'Systems Engineer',
      company: 'NeuralNexus',
      dateRange: '2019 - 2022',
      description: 'Developed scalable distributed backend systems.',
      location: 'San Francisco, CA',
      linkHref: '/experience/2',
    },
  ];

  it('renders all timeline items', () => {
    render(<TimelineList items={mockItems} />);
    
    expect(screen.getByText(/Senior Kernel Architect/i)).toBeInTheDocument();
    expect(screen.getByText(/Systems Engineer/i)).toBeInTheDocument();
  });

  it('renders metadata for each item', () => {
    render(<TimelineList items={mockItems} />);
    
    expect(screen.getByText('2022 - Present')).toBeInTheDocument();
    expect(screen.getByText('2019 - 2022')).toBeInTheDocument();
  });

  it('renders read more links for all items', () => {
    render(<TimelineList items={mockItems} />);
    
    const readMoreLinks = screen.getAllByText(/read more/i);
    expect(readMoreLinks).toHaveLength(2);
  });
});
