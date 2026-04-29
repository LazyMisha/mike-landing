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
    timeline: [
      {
        date: '2024',
        title: 'Problem framing',
        description: 'Clarified the initial challenge',
      },
    ],
    linkHref: '/test',
  };

  it('renders title', () => {
    render(<CaseStudyDetail item={mockItem} />);
    expect(screen.getByText('Test Case Study')).toBeInTheDocument();
  });

  it('renders problem section', () => {
    render(<CaseStudyDetail item={mockItem} />);
    expect(screen.getByText('problem:')).toBeInTheDocument();
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

  it('renders timeline when provided', () => {
    render(<CaseStudyDetail item={mockItem} />);

    expect(screen.getByText('timeline:')).toBeInTheDocument();
    expect(screen.getByText('Problem framing')).toBeInTheDocument();
    expect(screen.getByText('Clarified the initial challenge')).toBeInTheDocument();
  });

  it('does not render timeline section when timeline is absent', () => {
    const itemWithoutTimeline = { ...mockItem, timeline: undefined };

    render(<CaseStudyDetail item={itemWithoutTimeline} />);

    expect(screen.queryByText('timeline:')).not.toBeInTheDocument();
  });
});
