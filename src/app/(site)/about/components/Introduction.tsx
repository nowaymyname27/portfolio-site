"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Introduction() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="w-full px-4 md:px-16 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-50 h-50 md:w-64 md:h-64 relative mb-8"
          style={{ perspective: 1000 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            animate={{ rotateY: hovered ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              transformStyle: "preserve-3d",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Image
                src="/about/me_bw.png"
                alt="Fox BW"
                fill
                className=" object-cover"
              />
            </div>

            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Image
                src="/fox_logo.png"
                alt="Fox Logo"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.h2
        className="text-3xl md:text-5xl font-semibold mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      <div className="text-l md:text-xl opacity-90 space-y-8 text-left leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Hi, I’m Jose Ramirez. I am a Boston University graduate currently based in
          Allentown, PA, with plans to relocate to New York City. While much of my
          professional experience has been dedicated to crafting front-end
          web designs, my true technical passion lies closer to the metal. I am deeply
          interested in low-level systems programming and enjoy the challenge of
          building efficient, high-performance software using languages like C and
          Zig.
        </motion.p>
      </div>
    </motion.div>
  );
}
