// file: CertificateCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  badge: string; // image URL
  title: string; // certificate title
  issuer: string; // issuing organization
  date: string; // date or "2025"
  link?: string; // credential URL
  glowColor?: string; // hover glow color
};

export default function CertificateCard({
  badge,
  title,
  issuer,
  date,
  link,
  glowColor = "var(--main)", // default glow color
}: Props) {
  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{
          scale: 1.06,
          boxShadow: `0 12px 35px rgba(0,0,0,0.28),
                      0 0 25px ${glowColor}`,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          relative rounded-full border border-[var(--border-color)]
          bg-[var(--bg-card)] overflow-hidden flex flex-col items-center
        "
        style={{ width: 300, height: 300 }}
      >
        {/* TOP BADGE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[44%] flex items-center justify-center pt-6">
          <Image
            src={badge}
            alt={title}
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* CURVED DIVIDER */}
        <div className="absolute top-[44%] left-0 w-full pointer-events-none">
          <svg
            viewBox="0 0 100 22"
            preserveAspectRatio="none"
            className="w-full h-10"
          >
            <path
              d="M0,5 C25,25 75,25 100,5"
              fill="transparent"
              stroke="var(--border-color)"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        {/* BOTTOM CONTENT */}
        <div
          className="absolute w-full text-center flex flex-col items-center"
          style={{
            bottom: 0,
            height: "58%",
            paddingTop: "20px",
            paddingBottom: "18px",
            clipPath: "ellipse(120% 100% at 50% 0%)",
            backgroundColor: "#4f77d464",
          }}
        >
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-sm opacity-80 leading-tight">{issuer}</p>
          <p className="text-sm opacity-60 leading-tight">{date}</p>

          {link && (
            <motion.a
              href={link}
              target="_blank"
              transition={{ duration: 0.25 }}
              whileHover={{
                backgroundColor: glowColor,
                color: "white",
                borderColor: glowColor,
              }}
              className="
                mt-4 px-4 py-1.5 border rounded-lg text-sm font-semibold
                opacity-90 hover:opacity-100 transition-all
              "
              style={{
                color: glowColor,
                borderColor: glowColor,
                backgroundColor: "white",
              }}
            >
              View Credential
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
