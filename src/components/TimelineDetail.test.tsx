import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineDetail from './timeline/TimelineDetail';

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

  it('renders compact header when showMetadata is false', () => {
    render(<TimelineDetail item={mockItem} showMetadata={false} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByText('Role:')).not.toBeInTheDocument();
    expect(screen.queryByText('Company:')).not.toBeInTheDocument();
    expect(screen.queryByText('Date:')).not.toBeInTheDocument();
    expect(screen.queryByText('Location:')).not.toBeInTheDocument();
  });
});
