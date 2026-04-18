"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { landingData } from "@/lib/data";

export function Header() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const day = days[now.getDay()];
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setDateTime(`${day} ${hours}:${minutes}, ${landingData.personal.location}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-4 py-2 max-w-[75ch] mx-auto w-full backdrop-blur-md bg-background/80 dark:bg-background/80">
      <div className="text-sm text-muted-foreground">{dateTime}</div>
      <ThemeToggle />
    </header>
  );
}
