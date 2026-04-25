import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineList from './TimelineList';

describe('TimelineList', () => {
  const mockItems = [
    {
      id: '1',
      title: 'Test Title',
      company: 'Test Company',
      dateRange: '2024',
      location: 'Test Location',
      description: 'Test description',
      linkHref: '/test',
    },
  ];

  it('renders items', () => {
    render(<TimelineList items={mockItems} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
