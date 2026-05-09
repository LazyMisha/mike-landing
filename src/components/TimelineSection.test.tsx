import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AccentSection from '@/components/ui/AccentSection';

describe('AccentSection', () => {
  it('renders children content', () => {
    render(
      <AccentSection>
        <div>Test content</div>
      </AccentSection>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders brand dot marker', () => {
    const { container } = render(
      <AccentSection>
        <div>Content</div>
      </AccentSection>
    );
    const dots = container.querySelectorAll('.bg-\\(--brand\\).rounded-full');
    expect(dots.length).toBe(1);
  });

  it('renders vertical line', () => {
    const { container } = render(
      <AccentSection>
        <div>Content</div>
      </AccentSection>
    );
    const lines = container.querySelectorAll('.w-px.bg-chart-3');
    expect(lines.length).toBe(1);
  });
});
