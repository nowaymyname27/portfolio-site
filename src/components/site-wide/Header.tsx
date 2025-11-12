// src/components/site-wide/Header.tsx
"use client";

import { useState } from "react";

export default function Header() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  const toggleLang = () => {
    setLang(lang === "EN" ? "ES" : "EN");
  };

  return (
    <header className="w-full bg-main/90 backdrop-blur-md py-3">
      {/* Content container */}
      <div className="mx-auto w-full px-6 flex items-center justify-between max-w-[1400px]">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-foreground rounded-full" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Jose Ramirez
          </span>
        </div>

        {/* Right section */}
        <nav className="flex items-center gap-8 text-foreground font-medium">
          <a href="/" className="hover:opacity-80 transition-opacity">
            About
          </a>
          <a href="/" className="hover:opacity-80 transition-opacity">
            Projects
          </a>
          <a href="/" className="hover:opacity-80 transition-opacity">
            Contact Me
          </a>

          <button
            onClick={toggleLang}
            className="px-3 py-1.5 border border-foreground rounded-full 
                      hover:bg-foreground hover:text-main-foreground 
                      transition-all"
          >
            {lang}
          </button>
        </nav>
      </div>
    </header>
  );
}
