"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    requestAnimationFrame(() => {
      document.scrollingElement?.scrollTo({ top: 0, left: 0 });
      window.scrollTo({ top: 0, left: 0 });
    });
  }, [pathname]);

  return null;
}
