import { FaReact, FaGitAlt, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFigma, SiFastapi, SiMongodb, SiSupabase, SiCapacitor, SiSelenium } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-teal-600 text-5xl" />, level: "Expert" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" />, level: "Advanced" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-5xl" />, level: "Expert" },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" />, level: "Advanced" },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-500 text-5xl" />, level: "Intermediate" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" />, level: "Intermediate" },
  { name: "Supabase", icon: <SiSupabase className="text-green-500 text-5xl" />, level: "Advanced" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-5xl" />, level: "Intermediate" },
  { name: "Capacitor", icon: <SiCapacitor className="text-blue-500 text-5xl" />, level: "Intermediate" },
  { name: "Selenium", icon: <SiSelenium className="text-gray-600 text-5xl" />, level: "Intermediate" },
  { name: "Figma", icon: <SiFigma className="text-purple-600 text-5xl" />, level: "Advanced" },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-5xl" />, level: "Expert" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in modern development tools and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                  {skill.level}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">{skill.name}</h3>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    skill.level === 'Expert' ? 'bg-gradient-to-r from-teal-500 to-teal-600 w-full' :
                    skill.level === 'Advanced' ? 'bg-gradient-to-r from-blue-500 to-blue-600 w-4/5' :
                    'bg-gradient-to-r from-purple-500 to-purple-600 w-3/5'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
