"use client";

import { useEffect, useState } from "react";
import { landingData } from "@/lib/data";

export function LiveClock() {
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

  return <div className="text-sm text-muted-foreground">{dateTime}</div>;
}
