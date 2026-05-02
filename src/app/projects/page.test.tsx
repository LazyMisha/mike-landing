import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectsPage from './page';
import { projects } from '@/lib/project-data';

describe('ProjectsPage', () => {
  it('renders terminal prompt', () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/user@lazydev/)).toBeInTheDocument();
  });

  it('renders back to home link', () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/back to home/)).toBeInTheDocument();
  });

  it('renders total count', () => {
    render(<ProjectsPage />);
    expect(screen.getByText(`total: ${projects.length}`)).toBeInTheDocument();
  });

  it('renders all projects', () => {
    render(<ProjectsPage />);

    expect(projects.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('QuizLab')).toBeInTheDocument();
    expect(screen.getByText(/built for ISTQB exam preparation/)).toBeInTheDocument();
    expect(screen.getByText('AI Prompt Laba')).toBeInTheDocument();
    expect(screen.getByText(/prompt engineering tool/)).toBeInTheDocument();
  });

  it('renders AI Prompt Laba project links on the projects page', () => {
    render(<ProjectsPage />);

    const liveLinks = screen.getAllByRole('link', { name: 'Live project' });
    const sourceLinks = screen.getAllByRole('link', { name: 'Source code' });
    const liveHrefs = liveLinks.map((link) => link.getAttribute('href'));
    const sourceHrefs = sourceLinks.map((link) => link.getAttribute('href'));
    expect(liveHrefs).toContain('https://ai-prmptlaba-web.vercel.app/');
    expect(sourceHrefs).toContain('https://github.com/LazyMisha/ai-prmptlaba-web');
  });
});
