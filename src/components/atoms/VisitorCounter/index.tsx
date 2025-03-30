// components/VisitorCounter.tsx
"use client";

import { useEffect, useState } from "react";

export default function CyberVisitorCounter({
  className,
}: {
  className?: string;
}) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const namespace = "coletivo-anarquista-trans.github.io.site";
    fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setCount(null));
  }, []);

  return (
    <div className={`fixed bottom-5 right-30 ${className || ""}`}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Hexagonal Border */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M50 2.5 L95 25 L95 75 L50 97.5 L5 75 L5 25 Z"
            fill="none"
            stroke="var(--accent-1)"
            strokeWidth="2"
          />
        </svg>

        {/* Counter Display */}
        <div className="text-accent1 font-mono text-sm">
          {count !== null ? count : "..."}
        </div>
      </div>
    </div>
  );
}
