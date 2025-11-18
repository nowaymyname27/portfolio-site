// src/app/(site)/(home)/components/SplitSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface TechItem {
  icon: ReactNode;
  label: string;
}

export interface SplitSectionProps {
  heading: string;
  description: string;
  imageColor: string;
  imageBW: string;
  reverse?: boolean;
  tech: TechItem[];
}

export default function SplitSection({
  heading,
  description,
  imageColor,
  imageBW,
  reverse = false,
  tech,
}: SplitSectionProps) {
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
          <img
            src={imageColor}
            alt={heading}
            className="absolute inset-0 w-full h-full object-contain"
          />

          <motion.img
            src={imageBW}
            alt={heading + " BW Version"}
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
        <motion.h3
          className="text-5xl font-bold text-black leading-tight cursor-pointer transition-colors duration-200"
          whileHover={{ color: "var(--main)" }}
        >
          {heading}
        </motion.h3>

        {/* Tech Logos */}
        <motion.div
          className="flex flex-wrap items-center gap-7 text-5xl text-black max-w-[90%]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {tech.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.15, opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 group"
            >
              {item.icon}

              {/* Tooltip */}
              <div
                className="
                  absolute -top-10 left-1/2 -translate-x-1/2
                  bg-black text-white text-sm px-3 py-1 rounded-md
                  whitespace-nowrap pointer-events-none
                  opacity-0 translate-y-2
                  transition-all duration-200 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <p className="text-2xl text-black/70 leading-relaxed">{description}</p>
      </motion.div>
    </section>
  );
}
