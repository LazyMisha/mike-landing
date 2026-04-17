import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceCard from '../../components/ExperienceCard';

describe('ExperienceCard', () => {
  const mockProps = {
    title: 'Senior Kernel Architect',
    company: 'Monolith Corp',
    dateRange: '2022 - Present',
    description: 'Leading the core systems team in developing low-latency high-frequency trading infrastructure.',
    linkHref: '#',
  };

  it('renders title correctly with underline styling', () => {
    render(<ExperienceCard {...mockProps} />);
    const title = screen.getByText('Senior Kernel Architect');
    expect(title).toBeInTheDocument();
  });

  it('renders metadata line with date range', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText('2022 - Present')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText(/Leading the core systems team/i)).toBeInTheDocument();
  });

  it('renders "read more" link with correct href', () => {
    render(<ExperienceCard {...mockProps} />);
    const link = screen.getByText('[ read more ]');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '#');
  });
});
