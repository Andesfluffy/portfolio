"use client";

import { motion } from "framer-motion";

export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 h-[40vmax] w-[40vmax] rounded-full opacity-[0.14] dark:opacity-[0.1] blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #8dd9a9 0%, rgba(141,217,169,0) 70%)" }}
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 h-[45vmax] w-[45vmax] rounded-full opacity-[0.12] dark:opacity-[0.09] blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #5bc590 0%, rgba(91,197,144,0) 70%)" }}
        animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[35vmax] w-[35vmax] rounded-full opacity-[0.1] dark:opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #c1ecd5 0%, rgba(193,236,213,0) 70%)" }}
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}

