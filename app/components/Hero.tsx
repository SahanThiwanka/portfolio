'use client';

// components/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center min-h-screen bg-zinc text-white px-6 py-16">
      <div className="max-w-4xl text-center">
        {/* Header Text Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hello, I&#39;m <span className="text-blue-400">Your Name</span>
        </motion.h1>

        {/* Subheading Animation */}
        <motion.p
          className="text-lg mb-8 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          A passionate web & mobile developer building modern websites and apps with performance and design in mind.
        </motion.p>

        {/* Buttons Animation */}
        <div className="flex justify-center gap-6">
          <motion.a
            href="#projects"
            className="inline-block px-8 py-3 bg-blue-400 text-white rounded-full font-semibold hover:bg-blue-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
}
