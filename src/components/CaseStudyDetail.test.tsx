import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CaseStudyDetail from './CaseStudyDetail';

describe('CaseStudyDetail', () => {
  const mockItem = {
    id: '1',
    title: 'Test Case Study',
    problem: 'Test problem description',
    solution: 'Test solution description',
    result: ['Result 1', 'Result 2'],
    technologies: ['React', 'TypeScript'],
    linkHref: '/test',
  };

  it('renders title as h1', () => {
    render(<CaseStudyDetail item={mockItem} />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Test Case Study' }),
    ).toBeInTheDocument();
  });

  it('renders problem section as h2', () => {
    render(<CaseStudyDetail item={mockItem} />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'problem:' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Test problem description')).toBeInTheDocument();
  });

  it('renders solution section', () => {
    render(<CaseStudyDetail item={mockItem} />);
    expect(screen.getByText('solution:')).toBeInTheDocument();
    expect(screen.getByText('Test solution description')).toBeInTheDocument();
  });

  it('renders result section', () => {
    render(<CaseStudyDetail item={mockItem} />);
    expect(screen.getByText('result:')).toBeInTheDocument();
    expect(screen.getByText('Result 1')).toBeInTheDocument();
    expect(screen.getByText('Result 2')).toBeInTheDocument();
  });

  it('renders technologies', () => {
    render(<CaseStudyDetail item={mockItem} />);
    expect(screen.getByText('technologies:')).toBeInTheDocument();
    expect(screen.getByText('React, TypeScript')).toBeInTheDocument();
  });
});
