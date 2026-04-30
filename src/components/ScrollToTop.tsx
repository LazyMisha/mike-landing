"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

function scrollPageToTop() {
  document.scrollingElement?.scrollTo({ top: 0, left: 0 });
  window.scrollTo({ top: 0, left: 0 });
}

export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    scrollPageToTop();
    const animationFrame = requestAnimationFrame(scrollPageToTop);

    return () => cancelAnimationFrame(animationFrame);
  }, [pathname]);

  return null;
}
