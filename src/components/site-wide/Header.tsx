// src/components/site-wide/Header.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function Header() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [hoverHome, setHoverHome] = useState(false);

  const toggleLang = () => setLang(lang === "EN" ? "ES" : "EN");

  return (
    <motion.header
      className="
        w-full 
        bg-main 
        backdrop-blur-md 
        supports-[backdrop-filter]:bg-main/90
        text-white
      "
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full px-16 h-14 flex items-center justify-between">
        {/* Left section */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onMouseEnter={() => setHoverHome(true)}
          onMouseLeave={() => setHoverHome(false)}
          onClick={() => (window.location.href = "/")}
        >
          {/* LOGO ↔ HOME ICON SWAP */}
          <div className="relative overflow-hidden w-9 h-9 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!hoverHome ? (
                <motion.div
                  key="logo"
                  className="h-9 w-9 bg-white rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                />
              ) : (
                <motion.div
                  key="homeicon"
                  className="text-white flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                >
                  <FaHome size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* NAME ↔ HOME TEXT SWAP */}
          <div className="relative overflow-hidden min-w-[140px] h-6 flex items-center text-white">
            <AnimatePresence mode="wait">
              {!hoverHome ? (
                <motion.span
                  key="name"
                  className="text-lg font-semibold tracking-tight absolute"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  Jose Ramirez
                </motion.span>
              ) : (
                <motion.span
                  key="home"
                  className="text-lg font-semibold tracking-tight absolute"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  Home
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right section */}
        <nav className="flex items-center font-medium h-full text-white">
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
            className="ml-4 px-3 py-1.5 border border-white rounded-full transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
          >
            {lang}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
