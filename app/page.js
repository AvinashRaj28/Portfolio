"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hey👋
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-300"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I build cool websites using Next.js & Tailwind
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="/Portfolio/projects" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
