import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PolaroidFrame } from '../components/PolaroidFrame';

describe('PolaroidFrame', () => {
  it('renders children correctly', () => {
    render(
      <PolaroidFrame>
        <div data-testid="photo">Photo content</div>
      </PolaroidFrame>
    );
    
    expect(screen.getByTestId('photo')).toBeInTheDocument();
  });

  it('renders caption when provided', () => {
    const caption = '30 Apr 2021 · 13:33 · Odesa, UA';
    render(<PolaroidFrame caption={caption}>Photo</PolaroidFrame>);
    
    // Date should always be visible
    expect(screen.getByText('30 Apr 2021')).toBeInTheDocument();
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
    
    // Check that the caption paragraph contains all the text
    const captionParagraph = screen.getByText('30 Apr 2021').closest('p');
    expect(captionParagraph).toHaveTextContent(/13:33/);
    expect(captionParagraph).toHaveTextContent(/Odesa, UA/);
  });

  it('has correct responsive classes for time and location', () => {
    const caption = '30 Apr 2021 · 13:33 · Odesa, UA';
    const { container } = render(<PolaroidFrame caption={caption}>Photo</PolaroidFrame>);
    
    const captionParagraph = container.querySelector('p');
    expect(captionParagraph).toHaveClass('absolute', 'inset-x-3', 'bottom-0');
    expect(captionParagraph).toHaveClass('text-[7px]', 'sm:text-[9px]', 'md:text-xs');
  });
});
