const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React (Basic)"] },
    { title: "Backend", skills: ["Node.js", "Express (Basic)", "PHP", "SQL"] },
    { title: "Tools", skills: ["Git", "GitHub", "Figma", "VS Code", "XAMPP"] }
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">💻</span>
        <h2 className="text-3xl font-extrabold text-portfolio-text m-0">Technical Skills</h2>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-portfolio-pink mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm font-medium text-gray-700 hover:border-portfolio-pink/30 hover:bg-white transition-all shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;