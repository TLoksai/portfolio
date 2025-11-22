import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Knowsy.game – Social Trivia Gaming Platform",
    role: "Lead Full-Stack & Mobile Developer",
    description: "Building a real-time multiplayer trivia game for a US-based client. Single-handedly converted the web app into Android & iOS apps using Capacitor. Implemented full end-to-end automation testing with Playwright. Built secure backend APIs with Python FastAPI + Swagger.",
    techStack: "React + TypeScript + Vite + TailwindCSS + Supabase + Capacitor + Python FastAPI + Swagger + Playwright",
    image: "/images/knowsy.png",
    liveUrl: "https://knowsy.game",
  },
  {
    title: "PRSTC Boys Hostel – Complete Hostel Management App",
    role: "Full-Stack Mobile Developer (Solo Founder-Developer)",
    description: "Built entirely alone from idea to Play Store. Features separate student & admin logins with role-based dashboards, real-time attendance tracking, complaints, payments, notices, mess menu. Fully automated CI/CD pipeline with zero bugs in production.",
    techStack: "React Native + Expo + Supabase + EAS Build",
    image: "/images/15.jpg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.prstchostel",
  },
  {
    title: "Xtrans Matrix – Corporate Website + Backend APIs",
    role: "Full-Stack Developer",
    description: "Designed and developed the complete company website. Built and deployed REST APIs using Python FastAPI with auto-generated Swagger docs. Deployed backend on Render with proper environment variables and security.",
    techStack: "React + TailwindCSS + Python FastAPI + Swagger + Render",
    image: "/images/xtmx.png",
    liveUrl: "https://xtransmatrix.com",
  },
  {
    title: "Darshan Singh Choudhary – Political Campaign Website",
    role: "Front-End Developer",
    description: "Created awareness website during election campaign. Fast, mobile-first, fully responsive design with SEO optimization. Helped reach thousands of voters with clean UI and fast loading.",
    techStack: "React + Responsive Design + SEO Optimization",
    image: "/images/dharshan.png",
    liveUrl: "https://darshansinghchoudhary.org",
  },
  {
    title: "DCOEIISC – College Official Website",
    role: "Front-End Developer (Company Project)",
    description: "Delivered modern, fully responsive institutional website with department pages, events, admissions section.",
    techStack: "React",
    image: "/images/iisc.png",
    liveUrl: "https://dcoeiisc.com",
  },
  {
    title: "AITank AI – AI Startup Landing & Product Site",
    role: "Front-End Developer (Company Project)",
    description: "Built professional landing and product site for AI startup. Active participant in monthly office demo events & presentations.",
    techStack: "React",
    image: "/images/aitank.png",
    liveUrl: "https://aitank.ai",
  },
  {
    title: "Collaborative Frameworks – Founder's Personal Brand Site",
    role: "Website Developer (Personal Help Project)",
    description: "Built professional portfolio site for company founder.",
    techStack: "Wix",
    image: "/images/collaborativeframeworks.png",
    liveUrl: "https://collaborativeframeworks.com",
  },
  {
    title: "EpicQ – Freelance Client Project",
    role: "Freelance Full-Stack Developer",
    description: "Delivered high-performance, pixel-perfect business website.",
    techStack: "React + Fully Responsive Design",
    image: "/images/epicq.png",
    liveUrl: "https://epicq.co.in",
  },
  {
    title: "Warm Ambiance – Friend's Business Website",
    role: "Website Developer (Side Project)",
    description: "Helped friend launch online presence for home decor business.",
    techStack: "React",
    image: "/images/warmambiance.png",
    liveUrl: "https://warmambiance.com",
  },
  {
    title: "Python + Selenium Data Scraping Engine",
    role: "Automation Engineer",
    description: "Built multiple custom web scrapers for e-commerce vendors. Extract product details, prices, images, reviews automatically. Output structured data in JSON, CSV, and formatted PDFs. Used in production by company for competitor analysis.",
    techStack: "Python + Selenium + JSON/CSV/PDF Export",
    image: "/images/python.png",
    liveUrl: "#", // No live URL, perhaps internal
  },
  {
    title: "Personal Portfolio Website",
    role: "Full-Stack Developer",
    description: "A modern, responsive portfolio website showcasing my skills, projects, and experience. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.",
    techStack: "React + TypeScript + Tailwind CSS + Vite",
    image: "/images/porfolio.png",
    liveUrl: "#", // Current website
  },
  
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A curated collection of my recent work, showcasing technical expertise and innovative solutions across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-64 object-contain bg-gray-50" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <span className="inline-block text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-4">
                  {project.role}
                </span>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-gray-900 mb-1">🚀 Key Technologies</p>
                  <p className="text-xs text-gray-600 font-medium">{project.techStack}</p>
                </div>
                <div className="text-center">
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-teal-600 hover:text-teal-700 font-semibold text-sm px-4 py-2 border border-teal-600 rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-200">
                      <FaExternalLinkAlt className="mr-2" />
                      View Live
                    </a>
                  )}
                  {project.liveUrl === "#" && (
                    <span className="inline-block text-gray-400 font-medium text-sm px-4 py-2 border border-gray-300 rounded-lg">In Development</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-lg"
            >
              {showAll ? 'View Less' : 'View More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
