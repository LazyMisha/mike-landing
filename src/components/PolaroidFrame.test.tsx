import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PolaroidFrame } from '../components/PolaroidFrame';

describe('PolaroidFrame', () => {
  it('renders children correctly', () => {
    render(
      <PolaroidFrame>
        <div data-testid="photo">Photo content</div>
      </PolaroidFrame>,
    );

    expect(screen.getByTestId('photo')).toBeInTheDocument();
  });

  it('renders caption when provided', () => {
    const caption = '30 Apr 2021 · 13:33 · Odesa, UA';
    render(<PolaroidFrame caption={caption}>Photo</PolaroidFrame>);

    // Date should always be visible
    expect(screen.getByText(/30 Apr 2021/)).toBeInTheDocument();
  });

  it('does not render caption when not provided', () => {
    render(<PolaroidFrame>Photo</PolaroidFrame>);

    // Should not have the caption paragraph
    const captionElement = screen.queryByText(/30 Apr 2021/);
    expect(captionElement).not.toBeInTheDocument();
  });

  it('contains all parts of the caption', () => {
    const caption = '30 Apr 2021 · 13:33 · Odesa, UA';
    render(<PolaroidFrame caption={caption}>Photo</PolaroidFrame>);

    // Check that all caption parts are rendered
    expect(screen.getByText(/30 Apr 2021/)).toBeInTheDocument();
    expect(screen.getByText(/13:33/)).toBeInTheDocument();
    expect(screen.getByText(/Odesa, UA/)).toBeInTheDocument();
  });

  it('has correct responsive classes for time and location', () => {
    const caption = '30 Apr 2021 · 13:33 · Odesa, UA';
    const { container } = render(
      <PolaroidFrame caption={caption}>Photo</PolaroidFrame>,
    );

    const captionContainer = container.querySelector(
      '.absolute.inset-x-3.bottom-0',
    );
    expect(captionContainer).toHaveClass('absolute', 'inset-x-3', 'bottom-0');
    expect(captionContainer).toHaveClass(
      'text-[10px]',
      'sm:text-xs',
      'md:text-sm',
    );

    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    expect(paragraphs[0]).toHaveTextContent('30 Apr 2021 · 13:33');
    expect(paragraphs[1]).toHaveTextContent('Odesa, UA');
  });
});
