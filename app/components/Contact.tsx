// components/Contact.tsx
'use client';
import { motion } from 'framer-motion';
import { fadeUp } from './lib/animations';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-zinc-900 text-white">
      <motion.div  className="max-w-3xl mx-auto text-center"initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-gray-300 mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="flex flex-col items-center gap-4 text-sm">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Mail size={18} /> your.email@example.com
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Github size={18} /> github.com/yourusername
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <Linkedin size={18} /> linkedin.com/in/yourprofile
          </a>
        </div>
      </motion.div>
    </section>
  );
}
