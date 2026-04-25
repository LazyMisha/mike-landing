import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineCard from '../../components/TimelineCard';

describe('TimelineCard', () => {
  const mockProps = {
    title: 'Senior Kernel Architect',
    company: 'Monolith Corp',
    dateRange: '2022 - Present',
    description: 'Leading the core systems team in developing low-latency high-frequency trading infrastructure.',
    location: 'New York, NY',
    linkHref: '#',
  };

  it('renders title correctly with underline styling', () => {
    render(<TimelineCard {...mockProps} />);
    const title = screen.getByText('Senior Kernel Architect');
    expect(title).toBeInTheDocument();
  });

  it('renders metadata line with date range', () => {
    render(<TimelineCard {...mockProps} />);
    expect(screen.getByText('2022 - Present')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<TimelineCard {...mockProps} />);
    expect(screen.getByText(/Leading the core systems team/i)).toBeInTheDocument();
  });

  it('renders "read more" link with correct href', () => {
    render(<TimelineCard {...mockProps} />);
    const link = screen.getByText(/read more/i);
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '#');
  });
});
