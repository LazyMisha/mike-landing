import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ScrollToTop } from './ScrollToTop';

const usePathnameMock = vi.fn();

vi.mock('next/navigation', () => ({
  usePathname: () => usePathnameMock(),
}));

describe('ScrollToTop', () => {
  beforeEach(() => {
    usePathnameMock.mockReturnValue('/');
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0);
      return 1;
    });
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined);
    vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    Object.defineProperty(window.history, 'scrollRestoration', {
      configurable: true,
      value: 'auto',
      writable: true,
    });
  });

  it('disables browser scroll restoration and scrolls the document to the top before and after paint', () => {
    const scrollingElementScrollTo = vi.fn();
    Object.defineProperty(document, 'scrollingElement', {
      configurable: true,
      value: { scrollTo: scrollingElementScrollTo },
    });

    render(<ScrollToTop />);

    expect(window.history.scrollRestoration).toBe('manual');
    expect(scrollingElementScrollTo).toHaveBeenCalledTimes(2);
    expect(scrollingElementScrollTo).toHaveBeenCalledWith({ top: 0, left: 0 });
    expect(window.scrollTo).toHaveBeenCalledTimes(2);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0 });
  });
});
