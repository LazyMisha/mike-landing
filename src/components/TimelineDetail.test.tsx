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

  it('renders timeline structure with green dots', () => {
    const { container } = render(<TimelineDetail item={mockItem} />);

    const dots = container.querySelectorAll('.bg-\\(--accent-green\\).rounded-full');
    expect(dots.length).toBe(4);

    const lines = container.querySelectorAll('.w-px.bg-chart-3');
    expect(lines.length).toBe(4);
  });
});
