import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceDetail from './ExperienceDetail';
import { experiences } from '@/lib/experience-data';

describe('ExperienceDetail', () => {
  const mockExperience = experiences[0];

  it('renders metadata section with labels and values', () => {
    render(<ExperienceDetail experience={mockExperience} />);

    expect(screen.getByText(mockExperience.title)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.company)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.dateRange)).toBeInTheDocument();
    expect(screen.getByText(mockExperience.location)).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<ExperienceDetail experience={mockExperience} />);

    const description = mockExperience.description.split('\n\n')[0];
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders technologies as comma-separated list', () => {
    render(<ExperienceDetail experience={mockExperience} />);

    expect(screen.getByText(mockExperience.technologies.join(', '))).toBeInTheDocument();
  });

  it('renders achievements as bullet list', () => {
    render(<ExperienceDetail experience={mockExperience} />);

    mockExperience.achievements.forEach(ach => {
      expect(screen.getByText(ach)).toBeInTheDocument();
    });
  });

  it('renders timeline structure with green dots', () => {
    const { container } = render(<ExperienceDetail experience={mockExperience} />);

    // Check for green dot markers
    const dots = container.querySelectorAll('.bg-green-500.rounded-full');
    expect(dots.length).toBe(4); // Metadata, Description, Technologies, Achievements

    // Check for vertical line segments
    const lines = container.querySelectorAll('.w-px.bg-gray-600');
    expect(lines.length).toBe(4); // One for each section
  });
});
