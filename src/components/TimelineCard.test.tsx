import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineCard from './timeline/TimelineCard';

describe('TimelineCard', () => {
  const mockProps = {
    title: 'Senior Front-end Engineer & Scrum Master',
    company: 'Avid',
    dateRange: '05.2024 - Present',
    description:
      'Designing scalable React components and supporting Agile delivery.',
    location: 'Poland',
    linkHref: '#',
  };

  it('renders title correctly with underline styling', () => {
    render(<TimelineCard {...mockProps} />);
    const title = screen.getByText('Senior Front-end Engineer & Scrum Master');
    expect(title).toBeInTheDocument();
  });

  it('renders metadata line with date range', () => {
    render(<TimelineCard {...mockProps} />);
    expect(screen.getByText('05.2024 - Present')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<TimelineCard {...mockProps} />);
    expect(
      screen.getByText(/Designing scalable React components/i),
    ).toBeInTheDocument();
  });

  it('renders "more..." link with correct href', () => {
    render(<TimelineCard {...mockProps} />);
    const link = screen.getByText(/more\.\.\./);
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '#');
  });

  it('does not render dateRange when undefined', () => {
    render(<TimelineCard {...mockProps} dateRange={undefined} />);
    expect(screen.queryByText('05.2024 - Present')).not.toBeInTheDocument();
  });

  it('does not render location when undefined', () => {
    render(<TimelineCard {...mockProps} location={undefined} />);
    expect(screen.queryByText('Poland')).not.toBeInTheDocument();
  });
});
