"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

export default function HomeHero() {
  return (
    <section className="w-full min-h-screen px-20 py-10 flex items-center justify-between bg-background">
      {/* LEFT SIDE */}
      <motion.div
        className="flex flex-col gap-10 w-1/2"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Name */}
        <h1 className="text-8xl font-bold text-black leading-tight">
          Jose Ramirez
        </h1>

        {/* Username */}
        <h2 className="text-3xl text-black/80">NoWayMyName</h2>

        {/* Description */}
        <p className="text-2xl text-black/70 leading-relaxed">
          I’m a developer who loves crafting clean, interactive web experiences.
          I focus on smooth animations, modern aesthetics, and building elegant
          applications that feel refined from the first click.
        </p>

        {/* BUTTONS — ICON PILL EXPANSION */}
        <motion.div
          className="flex items-center gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          {/* LinkedIn */}
          <motion.a
            href="#"
            target="_blank"
            className="
      group flex items-center
      h-14 rounded-full
      bg-accent text-accent-foreground
      overflow-hidden relative
      shadow-md shadow-accent/40
    "
            initial={{ width: 56 }}
            whileHover={{ width: 200 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div
              className="
        flex items-center justify-center
        w-14 h-14
        absolute left-0 top-0
      "
            >
              <FaLinkedin size={28} />
            </div>

            <span
              className="
        ml-16 text-xl whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
      "
            >
              LinkedIn
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="#"
            target="_blank"
            className="
      group flex items-center
      h-14 rounded-full
      bg-accent text-accent-foreground
      overflow-hidden relative
      shadow-md shadow-accent/40
    "
            initial={{ width: 56 }}
            whileHover={{ width: 200 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div
              className="
        flex items-center justify-center
        w-14 h-14
        absolute left-0 top-0
      "
            >
              <FaGithub size={28} />
            </div>

            <span
              className="
        ml-16 text-xl whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
      "
            >
              GitHub
            </span>
          </motion.a>

          {/* Resume */}
          <motion.a
            href="#"
            target="_blank"
            className="
      group flex items-center
      h-14 rounded-full
      bg-accent text-accent-foreground
      overflow-hidden relative
      shadow-md shadow-accent/40
    "
            initial={{ width: 56 }}
            whileHover={{ width: 200 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div
              className="
        flex items-center justify-center
        w-14 h-14
        absolute left-0 top-0
      "
            >
              <FiFileText size={28} />
            </div>

            <span
              className="
        ml-16 text-xl whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
      "
            >
              Resume
            </span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative">
          {/* Glow fade-in */}
          <motion.div
            className="absolute inset-0 rounded-full blur-[80px] scale-[1]"
            style={{ backgroundColor: "var(--main)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <motion.div
            className="relative rounded-full overflow-hidden bg-white shadow-xl shadow-black/20"
            style={{ width: "480px", height: "480px" }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Gloss highlight */}
            <div
              className="
                absolute inset-0 rounded-full pointer-events-none
                bg-gradient-to-br from-white/10 to-transparent
                opacity-10 mix-blend-screen
              "
            />

            {/* COLOR IMAGE */}
            <img
              src="/fox_logo.png"
              alt="Color Fox Logo"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />

            {/* BW IMAGE → fades out on hover */}
            <motion.img
              src="/fox_bw.png"
              alt="BW Fox Logo"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
