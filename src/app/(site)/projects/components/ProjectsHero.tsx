// file: src/app/(site)/projects/components/ProjectsHero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section
      className="
        w-full 
        px-6 lg:px-14 
        lg:py-10 
        flex items-center justify-center
      "
    >
      <div
        className="
          w-full grid 
          grid-cols-1 lg:grid-cols-2 
          items-center 
          gap-10 lg:gap-20
        "
      >
        {/* TEXT SIDE */}
        <motion.div
          className="
            order-2 lg:order-1
            text-center lg:text-left
            flex flex-col items-center lg:items-start
            gap-6
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold cursor-pointer transition-colors duration-300 hover:text-main">
            Projects
          </h1>

          {/* MOBILE IMAGE placed between heading + text */}
          <div className="lg:hidden flex justify-center w-full">
            <motion.div
              className="
                relative
                w-[300px] h-[300px]
                sm:w-[360px] sm:h-[360px]
                md:w-[420px] md:h-[420px]
              "
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Color */}
              <Image
                src="/fox_labcoat.png"
                alt="Fox illustration"
                fill
                className="object-contain"
                priority
              />

              {/* BW fades on hover */}
              <motion.img
                src="/fox_labcoat_bw.png"
                alt="Fox BW"
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-2xl">
            My projects use a wide range of modern technologies. I focus on
            creating high-quality applications and deploying them with scalable,
            cloud-ready workflows.
          </p>
        </motion.div>

        {/* DESKTOP IMAGE SIDE */}
        <motion.div
          className="order-1 lg:order-2 hidden lg:flex justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="
              relative rounded-2xl overflow-hidden
              w-[680px] h-[680px]
              xl:w-[820px] xl:h-[820px]
              2xl:w-[900px] 2xl:h-[900px]
            "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Color */}
            <Image
              src="/fox_labcoat.png"
              alt="Fox illustration"
              fill
              className="object-contain object-right"
              priority
            />

            {/* BW fades on hover */}
            <motion.img
              src="/fox_labcoat_bw.png"
              alt="Fox illustration BW"
              className="absolute inset-0 w-full h-full object-contain object-right"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
