"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactBackground({ hovering }: { hovering: boolean }) {
  return (
    <motion.div className="absolute inset-0 z-0 pointer-events-none">
      <motion.div
        className="absolute bottom-0 left-0 w-[650px] h-[650px]"
        animate={{ scale: hovering ? 1.02 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Color image (base layer) */}
        <div className="absolute inset-0">
          <Image
            src="/fox_cliff_2_t.png"
            alt="fox color"
            fill
            className="object-contain select-none pointer-events-none"
          />
        </div>

        {/* Black & white image (fades out) */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: hovering ? 0 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/fox_cliff_2_t_bw.png"
            alt="fox bw"
            fill
            className="object-contain select-none pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
