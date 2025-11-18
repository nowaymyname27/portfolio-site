"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Introduction() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="w-full px-6 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-64 h-64 relative mb-12"
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
                src="/fox_bw.png"
                alt="Fox BW"
                fill
                className="rounded-full object-cover"
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
        className="text-5xl font-semibold mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      <div className="text-xl opacity-90 space-y-8 text-left leading-relaxed">
        {[
          `I’m a computer science graduate who likes making things that feel clean, intentional, and enjoyable to use. I’ve always leaned toward the intersection of creativity and engineering, and most of what I build comes from wanting things to look right, feel right, and work the way people expect them to. A lot of my experience comes from full-stack web development, freelance design work, and real-world projects where I’ve had to figure things out as I go. Online I go by the username nowaymyname, and the fox you see throughout this site is just a small way of bringing some personality into a space that can otherwise feel a little stiff.`,
          `I’m always trying to grow in directions that genuinely interest me. Web development has been my main focus, but I care just as much about the lower-level side of programming. I enjoy writing C, Python, OCaml, and many more languages. I also enjoy learning how things work behind the scenes, and building a foundation that makes me better no matter what tools I use next. I like being in that space where I am always improving, picking up new skills, tightening up my workflow, and finding better ways to create the ideas I have in my head.`,
          `Outside of work, I love gaming, and it has shaped how I think as a developer. Games are one of the first things that made me curious about how software works, why certain systems feel satisfying, and how design and engineering come together to create something people can interact with. That curiosity is what makes me want to build a game of my own someday. It is a long-term passion project, but it influences how I approach problem solving, creativity, and the kind of things I want to make. Little by little, I want to keep experimenting, keep building, and see how far I can go with the things I enjoy.`,
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
