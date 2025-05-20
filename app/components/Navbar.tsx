'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // or Heroicons if you prefer

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Panda.Dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-blue-400 transition">Home</Link>
          <Link href="#about" className="hover:text-blue-400 transition">About</Link>
          <Link href="#projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="#contact" className="hover:text-blue-400 transition">Contact</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-blue-400"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-2">
          <Link href="#home" className="block hover:text-blue-400" onClick={toggleMenu}>Home</Link>
          <Link href="#about" className="block hover:text-blue-400" onClick={toggleMenu}>About</Link>
          <Link href="#projects" className="block hover:text-blue-400" onClick={toggleMenu}>Projects</Link>
          <Link href="#contact" className="block hover:text-blue-400" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  );
}
git config --global user.name "SahanThiwanka"
git config --global user.email "sahanthiwanka1234@gmail.com"
