// file: src/app/(site)/(about)/components/EntryCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type EntryCardProps = {
  logo: string;
  title: string;
  subtitle: string;
  date: string;
  bullets: string[];
  hoverColor?: string;
};

export default function EntryCard({
  logo,
  title,
  subtitle,
  date,
  bullets,
  hoverColor = "#cc0001",
}: EntryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <motion.div
        whileHover={{
          y: -6,
          boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          borderColor: hoverColor,
          backgroundColor: `${hoverColor}10`,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          w-full
          rounded-2xl
          p-6 md:p-10
          border
          bg-[var(--bg-card)]
          border-[var(--border-color)]
          cursor-pointer
          transition-colors
          duration-200
        "
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:items-center">
          {/* Smaller logo on mobile */}
          <div className="w-24 h-24 md:w-40 md:h-40 relative flex-shrink-0">
            <Image
              src={logo}
              alt={title + " logo"}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex-1">
            <motion.div
              whileHover={{ color: hoverColor }}
              transition={{ duration: 0.25 }}
              className="flex flex-col md:flex-row md:justify-between md:items-start"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
                <p className="text-lg md:text-xl font-medium opacity-90 mt-1">
                  {subtitle}
                </p>
              </div>

              <p className="text-sm md:text-md opacity-80 mt-2 md:mt-0 md:text-right">
                {date}
              </p>
            </motion.div>

            <ul className="mt-5 text-base md:text-lg opacity-90 leading-relaxed space-y-3 list-disc pl-5">
              {bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
