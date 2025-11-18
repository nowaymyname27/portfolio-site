"use client";

import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";

export default function CertificatesSection() {
  return (
    <motion.section
      className="w-full flex flex-col items-center mt-20 pb-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Certificates
      </motion.h2>

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-12
          w-full
          max-w-[1100px]
        "
      >
        <CertificateCard
          badge="/aws_logo.png"
          title="AWS Certified Cloud Practitioner"
          issuer="Amazon Web Services"
          date="2025"
          link="https://aws.amazon.com/certification/"
          glowColor="#FE8E03"
        />
      </div>
    </motion.section>
  );
}
