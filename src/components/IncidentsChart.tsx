"use client";

import { useEffect, useRef, useState } from "react";
import { churchIncidentsData, churchIncidentsSource } from "@/lib/churchIncidents";

const CHART_MAX = 600;
const CHART_HEIGHT_PX = 224;
const GRIDLINES = [0, 100, 200, 300, 400, 500, 600];

export default function IncidentsChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mx-auto max-w-2xl">
      <p className="sr-only">
        Church-related incidents by year, {churchIncidentsData.map((d) => `${d.year.replace("'", "20")}: ${d.count}`).join(", ")}.
        Source: {churchIncidentsSource}.
      </p>

      <div className="relative" style={{ height: CHART_HEIGHT_PX }} aria-hidden="true">
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...GRIDLINES].reverse().map((line) => (
            <div key={line} className="border-t border-white/10" />
          ))}
        </div>

        <div className="absolute inset-0 flex items-end justify-between gap-2.5 sm:gap-4">
          {churchIncidentsData.map((d, idx) => {
            const heightPx = Math.round((d.count / CHART_MAX) * CHART_HEIGHT_PX);
            return (
              <div key={d.year} className="flex flex-1 flex-col items-center justify-end">
                <span className="mb-2 text-xs font-bold text-white sm:text-sm">{d.count}</span>
                <div
                  className={`w-full rounded-t-md transition-all duration-700 ease-out ${
                    d.highlight ? "bg-red-600" : "bg-white/20"
                  }`}
                  style={{
                    height: visible ? heightPx : 0,
                    transitionDelay: visible ? `${idx * 90}ms` : "0ms",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2.5 sm:gap-4" aria-hidden="true">
        {churchIncidentsData.map((d) => (
          <span key={d.year} className="flex-1 text-center text-xs text-navy-100/60">
            {d.year}
          </span>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-navy-100/50">Source: {churchIncidentsSource}</p>
    </div>
  );
}
