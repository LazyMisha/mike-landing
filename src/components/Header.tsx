"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { personalInfo } from "@/lib/data";

export function Header() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const day = days[now.getDay()];
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setDateTime(`${day} ${hours}:${minutes}, ${personalInfo.location}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex justify-between items-center p-4 max-w-[75ch] mx-auto">
      <div className="text-sm text-muted-foreground">{dateTime}</div>
      <ThemeToggle />
    </header>
  );
}
