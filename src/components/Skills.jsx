import { FaReact, FaPython, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiAngular, SiVite } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Angular', icon: <SiAngular className="text-red-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Python', icon: <FaPython className="text-blue-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f172a] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-pink-500">Tecnologías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <p className="text-sm mt-1">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;