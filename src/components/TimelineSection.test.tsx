import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineSection from './TimelineSection';

describe('TimelineSection', () => {
  it('renders children content', () => {
    render(
      <TimelineSection>
        <div>Test content</div>
      </TimelineSection>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders brand dot marker', () => {
    const { container } = render(
      <TimelineSection>
        <div>Content</div>
      </TimelineSection>
    );
    const dots = container.querySelectorAll('.bg-\\(--brand\\).rounded-full');
    expect(dots.length).toBe(1);
  });

  it('renders vertical line', () => {
    const { container } = render(
      <TimelineSection>
        <div>Content</div>
      </TimelineSection>
    );
    const lines = container.querySelectorAll('.w-px.bg-chart-3');
    expect(lines.length).toBe(1);
  });
});
