import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotesPage from './page';

describe('NotesPage', () => {
  it('renders terminal prompt with [notes]', () => {
    render(<NotesPage />);
    expect(screen.getByText('[notes]')).toBeInTheDocument();
  });

  it('renders intro paragraph', () => {
    render(<NotesPage />);
    expect(screen.getByText(/This page describes how this portfolio was designed and built/)).toBeInTheDocument();
  });

  it('renders all section titles', () => {
    render(<NotesPage />);
    expect(screen.getByText('Design & Ideation')).toBeInTheDocument();
    expect(screen.getByText('Structure & Architecture')).toBeInTheDocument();
    expect(screen.getByText('Coding & Implementation')).toBeInTheDocument();
    expect(screen.getByText('Tools & Workflow')).toBeInTheDocument();
    expect(screen.getByText('Key Decisions')).toBeInTheDocument();
    expect(screen.getByText('Lessons Learned')).toBeInTheDocument();
  });

  it('renders all bullet items', () => {
    render(<NotesPage />);
    expect(screen.getByText('ChatGPT used for layout ideas, UX iteration, and structure')).toBeInTheDocument();
    expect(screen.getByText('OpenClaw used as coding agent')).toBeInTheDocument();
    expect(screen.getByText('No backend (static approach)')).toBeInTheDocument();
    expect(screen.getByText('AI accelerates execution, not thinking')).toBeInTheDocument();
  });

  it('renders back link to home', () => {
    render(<NotesPage />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
