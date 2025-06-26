import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm a passionate React and MERN stack developer, always excited to build
          fast, accessible, and dynamic user interfaces. With a strong foundation in
          JavaScript, I'm committed to writing clean code and learning the latest web technologies.
        </motion.p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-700">
          <span className="bg-gray-100 p-2 rounded-lg">React</span>
          <span className="bg-gray-100 p-2 rounded-lg">Node.js</span>
          <span className="bg-gray-100 p-2 rounded-lg">MongoDB</span>
          <span className="bg-gray-100 p-2 rounded-lg">Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
}
