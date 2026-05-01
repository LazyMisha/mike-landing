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

  it('renders only QuizLab for now', () => {
    render(<ProjectsPage />);

    expect(projects).toHaveLength(1);
    expect(screen.getByText('QuizLab')).toBeInTheDocument();
    expect(screen.getByText(/ISTQB exam preparation quiz/)).toBeInTheDocument();
  });

  it('renders QuizLab project links on the projects page', () => {
    render(<ProjectsPage />);

    expect(screen.getByRole('link', { name: 'Live project' })).toHaveAttribute(
      'href',
      'https://lazymisha.github.io/quizlab/',
    );
    expect(screen.getByRole('link', { name: 'Source code' })).toHaveAttribute(
      'href',
      'https://github.com/LazyMisha/quizlab',
    );
    expect(screen.queryByText('pet')).not.toBeInTheDocument();
  });
});
