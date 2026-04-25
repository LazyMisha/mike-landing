import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CaseStudiesPage from './page';
import { caseStudies } from '@/lib/case-study-data';

describe('CaseStudiesPage', () => {
  it('renders terminal prompt', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/user@lazydev/)).toBeInTheDocument();
  });

  it('renders back to home link', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(/back to home/)).toBeInTheDocument();
  });

  it('renders total count', () => {
    render(<CaseStudiesPage />);
    expect(screen.getByText(`total: ${caseStudies.length}`)).toBeInTheDocument();
  });

  it('renders all case studies', () => {
    render(<CaseStudiesPage />);
    caseStudies.forEach(study => {
      expect(screen.getByText(study.title)).toBeInTheDocument();
    });
  });
});
