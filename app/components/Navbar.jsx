"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-black shadow-md p-4 flex justify-between items-center"
    >
      {/* Logo / Title */}
      <motion.h1
        whileHover={{ scale: 1.05 }}
        className="text-xl font-bold text-black dark:text-white"
      >
        My Portfolio
      </motion.h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-black dark:text-white hover:underline"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Theme Toggle & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="p-2 border rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
          {resolvedTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-lg flex flex-col items-center gap-4 py-4 md:hidden"
          >
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-black dark:text-white text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
