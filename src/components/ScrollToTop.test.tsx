import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ScrollToTop } from "./ScrollToTop";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

import { usePathname } from "next/navigation";

describe("ScrollToTop", () => {
  it("does not render on the home page", () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue("/");
    const { container } = render(<ScrollToTop />);
    expect(container.firstChild).toBeNull();
  });

  it("is hidden initially when not at the bottom", () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue("/experience");
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 2000,
      configurable: true,
    });
    Object.defineProperty(window, "innerHeight", {
      value: 800,
      configurable: true,
    });
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });

    render(<ScrollToTop />);
    const button = screen.getByRole("button", { name: /scroll to top/i });
    expect(button).toHaveClass("opacity-0");
    expect(button).toHaveClass("pointer-events-none");
  });

  it("becomes visible after scrolling to the bottom", () => {
    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 2000,
      configurable: true,
    });
    Object.defineProperty(window, "innerHeight", {
      value: 800,
      configurable: true,
    });
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });

    render(<ScrollToTop />);
    const button = screen.getByRole("button", { name: /scroll to top/i });

    Object.defineProperty(window, "scrollY", {
      value: 1300,
      configurable: true,
    });
    fireEvent.scroll(window);

    expect(button).toHaveClass("opacity-100");
    expect(button).toHaveClass("pointer-events-auto");
  });

  it("calls window.scrollTo with smooth behavior on click", () => {
    const scrollToMock = vi.fn();
    Object.assign(window, { scrollTo: scrollToMock });

    Object.defineProperty(document.documentElement, "scrollHeight", {
      value: 2000,
      configurable: true,
    });
    Object.defineProperty(window, "innerHeight", {
      value: 800,
      configurable: true,
    });
    Object.defineProperty(window, "scrollY", {
      value: 1300,
      configurable: true,
    });

    render(<ScrollToTop />);
    const button = screen.getByRole("button", { name: /scroll to top/i });
    fireEvent.click(button);

    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
