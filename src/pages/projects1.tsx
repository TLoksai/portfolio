import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A professional portfolio website designed to showcase my skills and projects. Built with React, Tailwind CSS, and Framer Motion for a dynamic and responsive experience.",
    image: "/images/portfolio.jpeg",
    demoLink: "#",
    codeLink: "https://github.com/TLoksai/portfolio",
  },
  {
    title: "XTransMatrix – Digital Transformation Solutions",
    description:
      "A professional corporate website showcasing XTransMatrix's services, innovation, and expertise in digital transformation.",
    image: "/images/xtmx.png",
    demoLink: "https://xtransmatrix.com",
    codeLink: "https://github.com/TLoksai/XTMX",
  },
  {
    title: "E-commerce Platform",
    description:
      "A modern and scalable e-commerce platform built with React, Node.js, and MongoDB. It features seamless user authentication, secure payment integration, and an intuitive shopping experience.",
    image: "/images/ecommerce.png",
    demoLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-b from-[#b9d5d6] to-white py-12">
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mt-12 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#138086] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#0F6B6B]"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#138086] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#0F6B6B]"
                  >
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
