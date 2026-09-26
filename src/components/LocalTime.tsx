"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const format = (withSeconds: boolean) =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: withSeconds ? "2-digit" : undefined,
    timeZone: profile.timeZone,
  }).format(new Date());

/** Live clock in Mehmet's time zone. Renders a placeholder until mounted to avoid hydration mismatch. */
const LocalTime = ({ seconds = false }: { seconds?: boolean }) => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(format(seconds));
    const id = setInterval(() => setTime(format(seconds)), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  return <span className="tabular-nums">{time ?? (seconds ? "--:--:--" : "--:--")}</span>;
};

export default LocalTime;
