// src/components/site-wide/Header.tsx
"use client";

import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const toggleLang = () => setLang(lang === "EN" ? "ES" : "EN");

  return (
    <header className="w-full bg-main/90 backdrop-blur-md">
      <div className="w-full px-10 h-14 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-foreground rounded-full" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Jose Ramirez
          </span>
        </div>

        {/* Right section */}
        <nav className="flex items-center text-foreground font-medium h-full">
          <a
            href="/"
            className="px-4 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            About
          </a>

          <a
            href="/"
            className="px-4 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Projects
          </a>

          <a
            href="/"
            className="px-4 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Contact Me
          </a>

          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1.5 border border-foreground rounded-full transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
          >
            {lang}
          </button>
        </nav>
      </div>
    </header>
  );
}
