// src/components/site-wide/Footer.tsx

"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Divider Line (animate in) */}
      <motion.div
        className="w-full h-px bg-foreground/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      {/* Footer Content */}
      <motion.div
        className="w-full py-4 backdrop-blur-sm bg-main/50 flex flex-col items-center gap-3 text-md text-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="opacity-80">Made by Jose Ramirez</span>

        <div className="flex items-center gap-6">
          {/* GitHub Icon */}
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <FaGithub size={22} />
          </motion.a>

          {/* LinkedIn Icon */}
          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition-opacity"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <FaLinkedin size={22} />
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}
