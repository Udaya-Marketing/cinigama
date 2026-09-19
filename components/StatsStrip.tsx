"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  from?: number;
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ from = 0, target, decimals = 0, prefix = "", suffix = "", duration = 2.2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [displayValue, setDisplayValue] = useState(
    decimals > 0 ? from.toFixed(decimals) : from.toLocaleString()
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (decimals > 0) {
          setDisplayValue(latest.toFixed(decimals));
        } else {
          setDisplayValue(Math.floor(latest).toLocaleString());
        }
      },
    });

    return () => controls.stop();
  }, [isInView, from, target, decimals, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

const STATS = [
  { target: 4.9, decimals: 1, suffix: "★", label: "GOOGLE RATING" },
  { target: 1200, decimals: 0, suffix: "+", label: "WEDDINGS DOCUMENTED" },
  { target: 50, decimals: 0, suffix: "+", label: "CREATIVE MASTER ARTISTS" },
  { target: 2018, from: 2000, decimals: 0, label: "ESTABLISHED" },
  { target: 15, decimals: 0, suffix: "+", label: "WORLDWIDE DESTINATIONS" },
];

export default function StatsStrip() {
  return (
    <section className="bg-beige border-y border-bordergray/60 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 sm:gap-y-8 gap-x-3 sm:gap-x-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-2 sm:p-4 transition-all duration-300 ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light tracking-tight mb-1.5 sm:mb-2">
                <AnimatedCounter
                  from={stat.from || 0}
                  target={stat.target}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </span>
              <span className="text-[9px] sm:text-[11px] font-sans text-warmgray uppercase tracking-[0.18em] sm:tracking-[0.22em] font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
