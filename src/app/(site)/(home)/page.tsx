"use client";

import Footer from "@/components/site-wide/Footer";
import Header from "@/components/site-wide/Header";
import HomeHero from "./components/HomeHero";
import SplitSection from "./components/SplitSection";
import { splitSections } from "./data/splitSections";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeHero />

      <motion.div
        className="text-center pb-12 layout-padding"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-6xl font-semibold md:font-bold text-black">
          What I Do?
        </h1>
      </motion.div>

      {splitSections.map((section, i) => (
        <SplitSection key={i} {...section} />
      ))}

      <Footer />
    </main>
  );
}
