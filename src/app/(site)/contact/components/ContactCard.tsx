// file: src/app/(site)/contact/components/ContactCard.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactCard({
  onHoverChange,
}: {
  onHoverChange: (hovering: boolean) => void;
}) {
  return (
    <motion.div
      onHoverStart={() => onHoverChange(true)}
      onHoverEnd={() => onHoverChange(false)}
      initial={{
        opacity: 0,
        y: 30,
        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
      }}
      whileHover={{
        scale: 1.03,
        y: -6,
        boxShadow: "0 0 50px rgba(var(--main-rgb), 0.6)",
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        bg-white/70 
        backdrop-blur-md 
        rounded-3xl 
        shadow-xl 
        p-10 
        flex 
        flex-col 
        gap-6 
        min-w-[450px] 
        max-w-[500px]
      "
    >
      <h1 className="text-4xl font-semibold text-center mb-4">Contact me</h1>

      <div className="flex flex-col gap-4">
        <label className="flex flex-col text-lg">
          <span className="mb-1 font-medium">Name:</span>
          <input
            type="text"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main transition"
          />
        </label>

        <label className="flex flex-col text-lg">
          <span className="mb-1 font-medium">Email:</span>
          <input
            type="email"
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main transition"
          />
        </label>

        <label className="flex flex-col text-lg">
          <span className="mb-1 font-medium">Message:</span>
          <textarea
            rows={5}
            className="px-4 py-3 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-main transition"
          />
        </label>
      </div>

      <button className="w-full mt-4 py-3 rounded-xl bg-main text-white font-semibold text-lg hover:opacity-90 transition">
        Send
      </button>
    </motion.div>
  );
}
