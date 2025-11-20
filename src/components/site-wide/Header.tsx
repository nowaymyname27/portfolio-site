// src/components/site-wide/Header.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [hoverHome, setHoverHome] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="w-full px-6 md:px-16 h-20 flex items-center justify-between">
        {/* LEFT */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onMouseEnter={() => setHoverHome(true)}
          onMouseLeave={() => setHoverHome(false)}
          onClick={() => (window.location.href = "/")}
        >
          <div className="relative overflow-hidden w-14 h-14 flex items-center justify-center md:w-16 md:h-16">
            <AnimatePresence mode="wait">
              {!hoverHome ? (
                <motion.div
                  key="logo"
                  className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <img
                    src="/fox_logo.png"
                    alt="Logo"
                    className="w-full h-full object-contain scale-[1.15]"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="homeicon"
                  className="text-white flex items-center justify-center w-full h-full"
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

          {/* FIXED NAME WRAPPER */}
          <div className="relative overflow-visible h-auto min-h-[1.75rem] flex items-center">
            <AnimatePresence mode="wait">
              {!hoverHome ? (
                <motion.span
                  key="name"
                  className="
                    text-xl md:text-2xl font-semibold tracking-tight absolute text-white 
                    whitespace-normal md:whitespace-nowrap
                  "
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
                  className="
                    text-xl md:text-2xl font-semibold tracking-tight absolute text-white 
                    whitespace-normal md:whitespace-nowrap
                  "
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

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center h-full text-white font-semibold text-xl">
          <a
            href="/about"
            className="px-5 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            About
          </a>
          <a
            href="/projects"
            className="px-5 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="px-5 flex items-center h-full transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Contact Me
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-main/95 backdrop-blur-md text-white font-semibold text-lg flex flex-col"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <a href="/about" className="px-6 py-4 border-t border-white/10">
              About
            </a>
            <a href="/projects" className="px-6 py-4 border-t border-white/10">
              Projects
            </a>
            <a href="/contact" className="px-6 py-4 border-t border-white/10">
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
