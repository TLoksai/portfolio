import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-[#42999E] text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#42999E] text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#42999E] text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#42999E] text-5xl" /> },
  { name: "Figma", icon: <SiFigma className="text-[#42999E] text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#42999E] text-5xl" /> },
];

const Skills = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6 md:px-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-900">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
