import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineDetail from './TimelineDetail';

describe('TimelineDetail', () => {
  const mockItem = {
    id: '1',
    title: 'Test Title',
    company: 'Test Company',
    dateRange: '2024',
    location: 'Test Location',
    description: 'Test description',
    technologies: ['React', 'TypeScript'],
    achievements: ['Achievement 1'],
    timeline: [
      {
        date: '2024',
        title: 'Started work',
        description: 'Initial prototype work',
      },
    ],
    linkHref: '/test',
  };

  it('renders item details', () => {
    render(<TimelineDetail item={mockItem} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders technologies', () => {
    render(<TimelineDetail item={mockItem} />);
    expect(screen.getByText('React, TypeScript')).toBeInTheDocument();
  });

  it('renders achievements', () => {
    render(<TimelineDetail item={mockItem} />);
    expect(screen.getByText('Achievement 1')).toBeInTheDocument();
  });

  it('renders timeline when provided', () => {
    render(<TimelineDetail item={mockItem} />);

    expect(screen.getByText('Timeline:')).toBeInTheDocument();
    expect(screen.getByText('Started work')).toBeInTheDocument();
    expect(screen.getByText('Initial prototype work')).toBeInTheDocument();
  });

  it('does not render timeline section when timeline is absent', () => {
    const itemWithoutTimeline = { ...mockItem, timeline: undefined };

    render(<TimelineDetail item={itemWithoutTimeline} />);

    expect(screen.queryByText('Timeline:')).not.toBeInTheDocument();
  });
});
