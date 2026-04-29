import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineMilestones from './TimelineMilestones';

describe('TimelineMilestones', () => {
  const entries = [
    {
      date: '2024',
      title: 'First milestone',
      description: 'First description',
    },
    {
      date: 'Current',
      title: 'Second milestone',
      description: 'Second description',
    },
  ];

  it('renders the section label and milestone content', () => {
    render(<TimelineMilestones label="Timeline:" entries={entries} />);

    expect(screen.getByText('Timeline:')).toBeInTheDocument();
    expect(screen.getByText('First milestone')).toBeInTheDocument();
    expect(screen.getByText('Second description')).toBeInTheDocument();
  });

  it('renders each milestone as a list item', () => {
    render(<TimelineMilestones label="Timeline:" entries={entries} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(entries.length);
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('Current')).toBeInTheDocument();
  });
});
