interface Skill {
  name: string;
  category: string;
  icon: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "React.js", category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", category: "Language", icon: "🔷" },
    { name: "JavaScript", category: "Language", icon: "🟨" },
    { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Django", category: "Backend", icon: "🐍" },
    { name: ".NET Core", category: "Backend", icon: "⚙️" },
    { name: "Playwright", category: "Automation", icon: "⚡" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "AWS / Azure", category: "Cloud", icon: "☁️" },
    { name: "CI/CD Pipelines", category: "DevOps", icon: "🔄" }
  ];

  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-black text-center mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Tools
        </h2>

        <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto mb-20">
          Full Stack Development • UI Engineering • Automation • Cloud
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/10 border border-white/20 hover:border-cyan-400 hover:bg-white/20 transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-300 text-lg">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
