// components/Projects.tsx
"use client";
import { motion } from "framer-motion";
type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Weather Reminder App",
    description:
      "A Flutter mobile app that shows weather forecasts and lets users set weather-related reminders.",
    tech: ["Flutter", "MongoDB", "Express.js", "REST API"],
    link: "https://github.com/yourusername/weather-reminder-app",
  },
  {
    title: "Blockchain Medical Records",
    description:
      "A secure blockchain-based system for managing medical records in a decentralized way.",
    tech: ["Solidity", "Ethereum", "React", "Web3.js"],
    link: "https://github.com/yourusername/medical-records-blockchain",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800 border border-blue-600 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:underline text-sm"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
