import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotesPage from './page';

describe('NotesPage', () => {
  it('renders terminal prompt with [notes]', () => {
    render(<NotesPage />);
    expect(screen.getByText('[notes]')).toBeInTheDocument();
  });

  it('renders page h1', () => {
    render(<NotesPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Notes' }),
    ).toBeInTheDocument();
  });

  it('renders intro paragraph', () => {
    render(<NotesPage />);
    expect(
      screen.getByText(
        /This page describes how this portfolio was designed and built/,
      ),
    ).toBeInTheDocument();
  });

  it('renders all section titles', () => {
    render(<NotesPage />);
    expect(screen.getByText('Design & Positioning')).toBeInTheDocument();
    expect(screen.getByText('Content Alignment')).toBeInTheDocument();
    expect(screen.getByText('Structure & Architecture')).toBeInTheDocument();
    expect(screen.getByText('AI-assisted Workflow')).toBeInTheDocument();
    expect(screen.getByText('Coding & Verification')).toBeInTheDocument();
    expect(screen.getByText('Key Decisions')).toBeInTheDocument();
  });

  it('renders all bullet items', () => {
    render(<NotesPage />);
    expect(
      screen.getByText(
        'Case studies and CV preview are based on the downloadable PDF CV',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Placeholder companies and fake metrics were removed in favor of accurate, CV-backed content',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'AI used for planning, content iteration, code changes, and review support',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Accuracy and clarity prioritized over exaggerated portfolio storytelling',
      ),
    ).toBeInTheDocument();
  });

  it('renders back link to home', () => {
    render(<NotesPage />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
