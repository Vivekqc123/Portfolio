// src/components/Projects.jsx
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio",
    description: "Fully responsive and animated portfolio to showcase skills and resume.",
    github: "https://github.com/yourusername/portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "SaaS Course Platform",
    description: "Scalable platform for creators to launch and sell courses with subdomains and Stripe/Razorpay support.",
    github: "https://github.com/yourusername/course-platform",
    tech: ["MERN", "Stripe", "Docker", "JWT"],
  },
  {
    title: "To-Do App",
    description: "Simple and sleek task manager using localStorage and React hooks.",
    github: "https://github.com/yourusername/todo-app",
    tech: ["React", "LocalStorage", "Hooks"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black text-sm font-medium flex items-center gap-1"
                >
                  <FaGithub className="text-lg" /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                >
                  <FaExternalLinkAlt className="text-sm" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


