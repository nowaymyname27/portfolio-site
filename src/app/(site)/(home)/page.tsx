"use client";

import Footer from "@/components/site-wide/Footer";
import Header from "@/components/site-wide/Header";
import HomeHero from "./components/HomeHero";
import WhatIDo from "./components/WhatIDo";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeHero />

      <motion.div
        className="w-full text-center mt-32 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-6xl font-bold text-black">What I Do?</h2>
      </motion.div>

      <WhatIDo />
      <WhatIDo reverse />

      <Footer />
    </main>
  );
}
