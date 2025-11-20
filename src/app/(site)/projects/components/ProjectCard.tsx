"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type TechItem = {
  icon: React.ReactNode;
  label?: string;
};

type ExtraLink = {
  label: string;
  href: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  image: { src: string; alt?: string };
  github: string;
  tech?: TechItem[];
  extraLinks?: ExtraLink[];
  glowColor?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  github,
  tech = [],
  extraLinks = [],
  glowColor = "var(--main)",
}: ProjectCardProps) {
  return (
    <motion.div
      style={{ "--glow": glowColor } as React.CSSProperties}
      className="
        group
        w-full max-w-[400px]
        rounded-xl
        overflow-hidden
        border border-neutral-400
        bg-transparent
        transition-all duration-300
        flex flex-col

        hover:scale-[1.015]
        hover:shadow-[0_0_22px_var(--glow)]

        max-h-[650px]
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* IMAGE SECTION — dynamically shrinks if needed */}
      <motion.div
        className="
          relative w-full
          flex items-center justify-center
          bg-transparent
          overflow-hidden
        "
        style={{
          height: "min(300px, 35vh)", // default size
        }}
        animate={{
          height: ["300px", "260px", "220px"], // shrink if content pushes
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        {/* Glow */}
        <div
          className="
            absolute inset-0
            opacity-0 group-hover:opacity-100
            transition-all duration-500
          "
          style={{
            background: `
              radial-gradient(circle at center,
                color-mix(in srgb, var(--glow) 35%, transparent) 0%,
                transparent 70%
              )
            `,
            filter: "blur(28px)",
          }}
        />

        <Image
          src={image.src}
          alt={image.alt || title}
          fill
          className="
            object-contain p-4
            transition-all duration-300
          "
        />
      </motion.div>

      {/* CONTENT SECTION */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-accent/30 overflow-hidden">
        <div>
          <h2 className="text-lg font-semibold text-black mb-1">{title}</h2>
          <p className="text-black text-sm leading-relaxed">{description}</p>
        </div>

        {/* TECH ICONS */}
        {tech.length > 0 && (
          <motion.div
            className="flex flex-wrap items-center gap-4 my-3 overflow-visible"
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
                className="relative cursor-pointer overflow-visible group/icon"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="text-4xl leading-none">{item.icon}</div>

                {item.label && (
                  <span
                    className="
                      absolute bottom-full left-1/2 -translate-x-1/2
                      mb-3 px-2 py-1 
                      bg-black text-white text-xs rounded-md 
                      opacity-0 group-hover/icon:opacity-100
                      transition-opacity duration-200 
                      whitespace-nowrap 
                      z-50 pointer-events-none
                    "
                  >
                    {item.label}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-2 mt-1">
          <a
            href={github}
            target="_blank"
            className="
              px-3 py-1.5 rounded-lg 
              bg-white border 
              text-sm font-medium
              transition-all duration-200
              text-[var(--glow)]
              border-[var(--glow)]
              hover:!bg-[var(--glow)]
              hover:!text-white
            "
          >
            GitHub
          </a>

          {extraLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              className="
                px-3 py-1.5 rounded-lg 
                bg-white border 
                text-sm font-medium
                transition-all duration-200
                text-[var(--glow)]
                border-[var(--glow)]
                hover:!bg-[var(--glow)]
                hover:!text-white
              "
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
