// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const texts = ['Web Developer', 'React Enthusiast', 'MERN Stack Developer','Cloud Enthusiast'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Vivek</span>
        </h1>

        <motion.h2
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-3xl text-gray-300 mb-6 h-10"
        >
          {texts[index]}
        </motion.h2>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-lg font-medium shadow-lg"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-gray-300 hover:bg-gray-700 transition px-6 py-2 rounded-lg font-medium shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}



