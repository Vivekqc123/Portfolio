// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Let's Connect
        </h2>
        <p className="text-center text-gray-400 mb-10">
          I’m open to freelance opportunities, collaborations, or just a chat!
        </p>

        <form
          action="mailto:vivekguptaair1.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md font-semibold shadow-lg transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

