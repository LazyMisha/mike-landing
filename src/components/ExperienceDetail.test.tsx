import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ExperienceDetail from '../components/ExperienceDetail';
import { experiences } from '../lib/experience-data';

describe('ExperienceDetail', () => {
  const testExperience = experiences[0];

  it('should render the experience title as h1', () => {
    render(<ExperienceDetail experience={testExperience} />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent(testExperience.title);
  });

  it('should render the company name', () => {
    render(<ExperienceDetail experience={testExperience} />);
    expect(screen.getByText(`@ ${testExperience.company}`)).toBeInTheDocument();
  });

  it('should render the date range', () => {
    render(<ExperienceDetail experience={testExperience} />);
    expect(screen.getByText(testExperience.dateRange)).toBeInTheDocument();
  });

  it('should render the Overview section', () => {
    render(<ExperienceDetail experience={testExperience} />);
    const overviewHeading = screen.getByRole('heading', { level: 2, name: /overview/i });
    expect(overviewHeading).toBeInTheDocument();
    // Check for key phrases from the full description instead of exact match
    expect(screen.getByText(/As Senior Kernel Architect, I lead a team of 8 engineers/i)).toBeInTheDocument();
    expect(screen.getByText(/reducing latency at the kernel level/i)).toBeInTheDocument();
  });

  it('should render all technologies', () => {
    render(<ExperienceDetail experience={testExperience} />);
    const technologiesHeading = screen.getByRole('heading', { level: 2, name: /technologies/i });
    expect(technologiesHeading).toBeInTheDocument();
    
    testExperience.technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('should render all achievements', () => {
    render(<ExperienceDetail experience={testExperience} />);
    const achievementsHeading = screen.getByRole('heading', { level: 2, name: /key achievements/i });
    expect(achievementsHeading).toBeInTheDocument();
    
    testExperience.achievements.forEach((achievement) => {
      expect(screen.getByText(achievement)).toBeInTheDocument();
    });
  });

  it('should render the Timeline section with all milestones', () => {
    render(<ExperienceDetail experience={testExperience} />);
    const timelineHeading = screen.getByRole('heading', { level: 2, name: /timeline/i });
    expect(timelineHeading).toBeInTheDocument();
    
    testExperience.timeline.milestones.forEach((milestone) => {
      expect(screen.getByText(milestone.date)).toBeInTheDocument();
      expect(screen.getByText(milestone.event)).toBeInTheDocument();
    });
  });

  it('should render technologies with proper styling', () => {
    render(<ExperienceDetail experience={testExperience} />);
    // Check that technology badges exist by looking for the text content
    testExperience.technologies.forEach((tech) => {
      const techBadge = screen.getByText(tech);
      expect(techBadge).toBeInTheDocument();
      expect(techBadge).toHaveClass('font-mono');
    });
  });

  it('should have proper section structure', () => {
    const { container } = render(<ExperienceDetail experience={testExperience} />);
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBe(4); // Overview, Technologies, Achievements, Timeline
  });
});
