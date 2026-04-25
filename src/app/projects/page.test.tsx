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
    projects.forEach(project => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
    });
  });
});
