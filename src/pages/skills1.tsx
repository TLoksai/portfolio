import { FaReact, FaGitAlt, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFigma, SiFastapi, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "java", icon: <SiNextdotjs className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "Python", icon: <FaPython className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "Figma", icon: <SiFigma className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#138086] text-5xl transition-transform duration-300 hover:scale-110" /> },
];

const Skills = () => {
    return (
      <section className="bg-gradient-to-b from-[#b9d5d6] to-white py-40">
        <div className="container mx-auto text-center px-6 md:px-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Tools</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg mb-16">
            Technologies and tools I use to build scalable and efficient web applications. 
            My expertise includes front-end frameworks, backend APIs, UI/UX design, and version control.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105"
              >
                {skill.icon}
                <p className="mt-4 text-lg font-semibold text-gray-900">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default Skills;
