import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotesPage from './page';

describe('NotesPage', () => {
  it('renders terminal prompt with build.md', () => {
    render(<NotesPage />);
    expect(screen.getByText('build.md')).toBeInTheDocument();
  });

  it('renders intro paragraph', () => {
    render(<NotesPage />);
    expect(screen.getByText(/This page describes how this portfolio was designed and built/)).toBeInTheDocument();
  });

  it('renders all content sections', () => {
    render(<NotesPage />);
    expect(screen.getByText('Design & Ideation')).toBeInTheDocument();
    expect(screen.getByText('Structure & Architecture')).toBeInTheDocument();
    expect(screen.getByText('Coding & Implementation')).toBeInTheDocument();
    expect(screen.getByText('Tools & Workflow')).toBeInTheDocument();
    expect(screen.getByText('Key Decisions')).toBeInTheDocument();
    expect(screen.getByText('Lessons Learned')).toBeInTheDocument();
  });

  it('renders back link to home', () => {
    render(<NotesPage />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
