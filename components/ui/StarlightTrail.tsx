"use client";

import React, { useEffect, useState } from "react";

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  char: string;
  color: string;
  size: number;
}

const symbols = ["✨", "💗", "⭐", "🌸", "💖", "💫"];
const colors = ["#F472B6", "#A855F7", "#EC4899", "#C084FC", "#FBBF24"];

export default function StarlightTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let count = 0;
    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, 45); // Throttle for smooth 60fps performance

      count++;
      const point: TrailPoint = {
        id: Date.now() + count,
        x: e.clientX,
        y: e.clientY,
        char: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.floor(Math.random() * 8) + 12,
      };

      setTrail((prev) => [...prev.slice(-14), point]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Periodically remove old points
    const cleanupInterval = setInterval(() => {
      setTrail((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 120);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {trail.map((p) => (
        <span
          key={p.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-trail-fade select-none"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            fontSize: `${p.size}px`,
            color: p.color,
            filter: "drop-shadow(0 2px 6px rgba(244, 114, 182, 0.4))",
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
