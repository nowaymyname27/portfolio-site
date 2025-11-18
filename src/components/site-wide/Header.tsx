// src/components/site-wide/Header.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function Header() {
  const [hoverHome, setHoverHome] = useState(false);

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
      <div className="w-full px-16 h-20 flex items-center justify-between">
        {/* LEFT SECTION */}
        <motion.div
          className="flex items-center gap-4 cursor-pointer"
          onMouseEnter={() => setHoverHome(true)}
          onMouseLeave={() => setHoverHome(false)}
          onClick={() => (window.location.href = "/")}
        >
          {/* LOGO ↔ HOME ICON SWAP */}
          <div className="relative overflow-hidden w-16 h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!hoverHome ? (
                <motion.div
                  key="logo"
                  className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <img
                    src="/fox_logo.png"
                    alt="Logo"
                    className="w-full h-full object-contain p-0 scale-[1.15]"
                    style={{ transformOrigin: "center" }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="homeicon"
                  className="text-white flex items-center justify-center w-16 h-16"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                >
                  <FaHome size={32} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* NAME ↔ HOME TEXT SWAP */}
          <div className="relative overflow-hidden min-w-[180px] h-8 flex items-center">
            <AnimatePresence mode="wait">
              {!hoverHome ? (
                <motion.span
                  key="name"
                  className="text-2xl font-semibold tracking-tight absolute text-white"
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
                  className="text-2xl font-semibold tracking-tight absolute text-white"
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

        {/* RIGHT NAVIGATION */}
        <nav className="flex items-center h-full text-white font-semibold text-xl">
          <a
            href="/about"
            className="px-5 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            About
          </a>
          <a
            href="/"
            className="px-5 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Projects
          </a>
          <a
            href="/"
            className="px-5 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
