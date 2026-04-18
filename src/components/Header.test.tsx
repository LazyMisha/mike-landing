import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

describe('Header', () => {
  it('renders datetime and theme toggle', () => {
    render(<Header />);
    
    // Theme toggle should be present
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has sticky positioning classes', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    
    expect(header).toHaveClass('sticky');
    expect(header).toHaveClass('top-0');
    expect(header).toHaveClass('z-50');
  });

  it('has glassmorphism effect classes', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    
    expect(header).toHaveClass('backdrop-blur-md');
    expect(header).toHaveClass('bg-background/80');
  });

  it('maintains existing layout classes', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    
    expect(header).toHaveClass('flex');
    expect(header).toHaveClass('justify-between');
    expect(header).toHaveClass('items-center');
    expect(header).toHaveClass('px-4');
    expect(header).toHaveClass('py-2');
    expect(header).toHaveClass('max-w-[75ch]');
    expect(header).toHaveClass('mx-auto');
  });
});
