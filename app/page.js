"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "I build modern web applications using Next.js & Tailwind.";

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch in Next.js

  return (
    <section className={`h-screen flex flex-col items-center justify-center text-center transition-colors ${
      resolvedTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
    }`}>
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-5xl font-bold">Hey👋, I'm Avinash</h1>
        <h2 className="mt-2 text-2xl text-gray-400">Frontend Developer & JavaScript Enthusiast</h2>
        <p className="mt-4 text-lg text-gray-500">{text}</p>
        <div className="mt-6">
          <a href="/Portfolio/projects" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            View My Work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
