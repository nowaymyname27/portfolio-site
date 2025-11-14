// src/app/(site)/(home)/components/WhatIDo.tsx
"use client";

import { motion } from "framer-motion";
import { SiNextdotjs } from "react-icons/si";

export default function WhatIDo({ reverse = false }) {
  return (
    <section
      className={`
        w-full min-h-[70vh] px-20 py-24 flex items-center justify-between gap-20
        ${reverse ? "flex-row-reverse" : "flex-row"}
      `}
    >
      {/* IMAGE SIDE */}
      <motion.div
        className="w-1/2 h-full flex justify-center items-center"
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-full h-[70vh] rounded-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* COLOR IMAGE (bottom) */}
          <img
            src="/website_fox.png"
            alt="Color Illustration"
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* BW IMAGE (top, fades out on hover) */}
          <motion.img
            src="/website_fox_bw.png"
            alt="BW Illustration"
            className="absolute inset-0 w-full h-full object-contain"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>

      {/* TEXT SIDE */}
      <motion.div
        className="w-1/2 flex flex-col gap-10"
        initial={{ opacity: 0, x: reverse ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <h3 className="text-5xl font-bold text-black leading-tight">
          Building clean, fast, modern web experiences.
        </h3>

        {/* Tech Logos (staggered reveal) */}
        <motion.div
          className="flex items-center gap-7 text-5xl text-black"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15, // icon-by-icon reveal
              },
            },
          }}
        >
          {/* ICON VARIANTS */}
          {[
            <i className="devicon-react-original colored" key="react" />,
            <SiNextdotjs className="text-black" key="next" />,
            <i className="devicon-typescript-plain colored" key="ts" />,
            <i className="devicon-javascript-plain colored" key="js" />,
            <i className="devicon-tailwindcss-plain colored" key="tailwind" />,
            <i className="devicon-framermotion-plain colored" key="framer" />,
          ].map((icon, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.15,
                opacity: 1,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="cursor-pointer opacity-80 hover:opacity-100"
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <p className="text-2xl text-black/70 leading-relaxed">
          I specialize in creating smooth interfaces, interactive components,
          animations that feel natural, and high-performance apps using
          technologies like Next.js, Tailwind, and Framer Motion.
        </p>
      </motion.div>
    </section>
  );
}
