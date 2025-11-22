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
  {
    title: "AI-Powered VS Code Extension (Upcoming)",
    role: "Developer",
    description: "In Development: Build an intelligent VS Code extension that helps developers write cleaner, faster, and bug-free code using AI.",
    techStack: "TypeScript + VS Code API + Integration with LLMs",
    image: "/images/symbol.png",
    liveUrl: "#", // Not live yet
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <section className="bg-gradient-to-b from-[#b9d5d6] to-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Showcase</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the breadth of my work across different technologies and industries
          </p>
        </div>

        <div className="space-y-12">
          {displayedProjects.map((project, index) => (
            <div key={index} className={`bg-white rounded-3xl shadow-xl overflow-hidden transition transform hover:scale-102 hover:shadow-2xl ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex`}>
              <div className="md:w-1/2">
                <img src={project.image} alt={project.title} className="w-full h-96 md:h-full object-contain bg-gray-50" />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <span className="inline-block text-sm font-medium text-green-600 bg-green-50 px-4 py-2 rounded-full mb-6 w-fit">
                  {project.role}
                </span>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">{project.description}</p>
                <div className="bg-green-50 rounded-xl p-6 mb-8">
                  <p className="text-sm font-semibold text-gray-900 mb-3">🛠️ Tech Stack</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.techStack}</p>
                </div>
                <div>
                  {project.liveUrl !== "#" && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <FaExternalLinkAlt className="mr-3" />
                      Explore Project
                    </a>
                  )}
                  {project.liveUrl === "#" && (
                    <span className="inline-block text-gray-400 font-medium px-8 py-4 border border-gray-300 rounded-xl bg-gray-50">Under Development</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 5 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-10 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll ? 'Show Less Projects' : 'View More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
