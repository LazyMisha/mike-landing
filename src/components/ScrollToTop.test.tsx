import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { ScrollToTop } from '../components/ScrollToTop';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/test-path'),
}));

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollTo = vi.fn();
    // Mock requestAnimationFrame to execute immediately in tests
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 0;
    });
  });

  it('renders without errors', () => {
    const { container } = render(<ScrollToTop />);
    
    // Component renders null, so container should be empty
    expect(container.firstChild).toBeNull();
  });

  it('calls window.scrollTo on mount', () => {
    render(<ScrollToTop />);
    
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
});
