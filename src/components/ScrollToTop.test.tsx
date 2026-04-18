import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { ScrollToTop } from '../components/ScrollToTop';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/test-path'),
}));

describe('ScrollToTop', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(global, 'setTimeout').mockImplementation((cb) => {
      cb();
      return 0 as unknown as NodeJS.Timeout;
    });
    Object.defineProperty(document.documentElement, 'scrollTo', {
      value: vi.fn(),
      writable: true,
    });
    Object.defineProperty(document.body, 'scrollTo', {
      value: vi.fn(),
      writable: true,
    });
  });

  it('renders without errors', () => {
    const { container } = render(<ScrollToTop />);
    expect(container.firstChild).toBeNull();
  });

  it('scrolls to top on mount', () => {
    render(<ScrollToTop />);
    expect(document.documentElement.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(document.body.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
