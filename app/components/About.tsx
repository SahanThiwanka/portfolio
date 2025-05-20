// components/About.tsx
"use client";
import { motion } from "framer-motion";
import { fadeUp } from "./lib/animations";
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-zinc-900 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          I'm a passionate software engineer with experience in building modern
          web and mobile applications. I specialize in{" "}
          <span className="text-white font-semibold">
            Next.js, Tailwind CSS, Flutter, and Blockchain
          </span>{" "}
          technology. I enjoy creating clean UIs, solving real-world problems,
          and exploring new technologies.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Web Development",
            "Mobile Apps",
            "Flutter",
            "Next.js",
            "Tailwind",
            "Blockchain",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-zinc-800 text-sm text-blue-300 border border-blue-500"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
