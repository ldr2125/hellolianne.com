"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 h-14 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-mono text-xs text-muted tracking-[0.18em] uppercase hover:text-text transition-colors"
      >
        hellolianne.com
      </a>
      <div className="flex items-center gap-8">
        <a
          href="#projects"
          className="font-mono text-xs text-muted tracking-[0.15em] uppercase hover:text-text transition-colors"
        >
          Projects
        </a>
        <a
          href="#about"
          className="font-mono text-xs text-muted tracking-[0.15em] uppercase hover:text-text transition-colors"
        >
          About
        </a>
      </div>
    </nav>
  );
}
