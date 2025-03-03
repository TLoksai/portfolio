import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "/images/ecommerce.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "/images/task-management.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with modern animations",
    image: "/images/portfolio.jpeg",
    demoLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#E8F0F8] py-12">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <div className="flex gap-4 mt-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#B3B3FF] text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-[#9A9AFF]">
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#B3B3FF] text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-[#9A9AFF]">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
