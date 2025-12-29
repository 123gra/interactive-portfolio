import React from "react";
import {
  Atom,
  TestTube,
  Server,
  GitBranch,
  Database,
  Cloud,
  Paintbrush,
} from "lucide-react";

interface Skill {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "React", category: "Frontend", icon: <Atom /> },
    { name: "TypeScript", category: "Language", icon: <Atom /> },
    { name: "Playwright", category: "QA Automation", icon: <TestTube /> },
    { name: "Node.js", category: "Backend", icon: <Server /> },
    { name: "PostgreSQL", category: "Database", icon: <Database /> },
    { name: "CI / CD", category: "DevOps", icon: <GitBranch /> },
    { name: "AWS Basics", category: "Cloud", icon: <Cloud /> },
    { name: "Tailwind CSS", category: "Styling", icon: <Paintbrush /> },
  ];

  return (
    <section
      id="skills"
      className="relative z-10 py-24 px-6 bg-white/5 backdrop-blur-xl border-y border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Skills & Tools
        </h2>

        <p className="text-xl text-gray-300 text-center mb-16">
          Full-Stack Development • UI Engineering • QA Automation
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-8 rounded-2xl bg-white/10 border border-white/20 hover:border-emerald-400/60 hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4 text-emerald-400 group-hover:text-emerald-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {skill.name}
              </h3>
              <p className="text-gray-300 text-sm">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
