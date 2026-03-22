"use client";

import { useEffect, useRef, useState } from "react";

function FitText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const probeRef = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const probe = probeRef.current;
      if (!container || !probe) return;
      probe.style.fontSize = "100px";
      const ratio = container.offsetWidth / probe.offsetWidth;
      setSize(Math.floor(100 * ratio));
    };

    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    document.fonts.ready.then(fit);
    return () => ro.disconnect();
  }, [text]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {/* invisible probe to measure natural text width at 100px */}
      <span
        ref={probeRef}
        aria-hidden
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 900,
          fontSize: "100px",
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        {text}
      </span>

      <h1
        style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 900,
          fontSize: size ? `${size}px` : "18vw",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
        }}
        className="text-text select-none"
      >
        {text}
      </h1>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="px-8 md:px-16 pt-14 pb-16">
      <div className="flex flex-col gap-10 md:gap-14">
        <div className="w-[70%]">
          <FitText text="Hello, I'm Lianne" />
        </div>

        {/* rule + tagline */}
        <div className="pt-6 border-t border-border">
          <p className="text-base md:text-lg text-muted leading-snug">
            Building things on the internet, scroll to learn more.
          </p>
        </div>
      </div>
    </section>
  );
}
