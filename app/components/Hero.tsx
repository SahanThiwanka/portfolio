'use client';
import ThreeModelCanvas from './ThreeModel';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-zinc text-white px-6 py-16 gap-10"
    >
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hello, I&#39;m <span className="text-blue-400">Your Name</span>
        </motion.h1>

        <motion.p
          className="text-lg mb-8 text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          A passionate web & mobile developer building modern websites and apps with performance and design in mind.
        </motion.p>

        <div className="flex justify-center md:justify-start gap-6">
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

      {/* Right Side: 3D Model */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
        <ThreeModelCanvas />
      </div>
    </section>
  );
}
