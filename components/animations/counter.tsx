"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
}

export default function Counter({
  end,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}