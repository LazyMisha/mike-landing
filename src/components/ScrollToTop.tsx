"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null;
}
