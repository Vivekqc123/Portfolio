// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-10 px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold mb-4">Made with 💻 by Vivek Gupta</h3>
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://github.com/Vivekqc123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/vivek-gupta-b66903228/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:vivekguptaair1@gmail.com"
          className="hover:text-white transition"
        >
          <Mail size={28} />
        </a>
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Vivek.dev. All rights reserved.
      </p>
    </motion.footer>
  );
}

