"use client";

import { motion } from "framer-motion";

export function Aurora() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 h-[40vmax] w-[40vmax] rounded-full opacity-[0.12] dark:opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #A78BFA 0%, rgba(167,139,250,0) 70%)" }}
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 h-[45vmax] w-[45vmax] rounded-full opacity-[0.10] dark:opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #22D3EE 0%, rgba(34,211,238,0) 70%)" }}
        animate={{ y: [0, 12, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 h-[35vmax] w-[35vmax] rounded-full opacity-[0.10] dark:opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, #34D399 0%, rgba(52,211,153,0) 70%)" }}
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}

