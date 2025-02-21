"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Pokedex App",
    description: "A fully responsive Pokedex using the Pokémon API.",
    tech: "API-Based",
    link: "https://yourpokedex.com",
  },
  {
    title: "Password Manager",
    description: "A secure password manager with encryption.",
    tech: "React & LocalStorage",
    link: "https://yourpasswordmanager.com",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects.",
    tech: "Next.js & Tailwind",
    link: "https://yourportfolio.com",
  },
  {
    title: "Weather App",
    description: "Live weather updates using the OpenWeather API.",
    tech: "API-Based",
    link: "https://yourweatherapp.com",
  },
  {
    title: "Task Manager",
    description: "A to-do list app with drag-and-drop functionality.",
    tech: "React & LocalStorage",
    link: "https://yourtaskmanager.com",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-20 bg-black text-white px-6">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10"
      >
        My Projects 🚀
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="bg-gray-900 shadow-lg p-6 rounded-lg text-center border border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <span className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
              {project.tech}
            </span>
            <div className="mt-4">
              <Link
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                View Project →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
