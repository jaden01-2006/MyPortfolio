import React from 'react';

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "PHP", "SQL"] },
    { title: "Tools", skills: ["Git", "GitHub", "Figma", "VS Code", "XAMPP"] }
  ];

  return (
    /* Updated main card border to match the soft pink theme */
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100 h-full">
      <div className="flex items-center gap-4 mb-8">
        {/* Added the rounded-full pink icon background from the reference */}
        <div className="p-3 bg-rose-100/30 rounded-full">
          <span className="text-3xl">💻</span>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 m-0 tracking-tight">
          Technical Skills
        </h2>
      </div>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-rose-950/80 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-5 py-2.5 bg-rose-100/80 text-rose-950 rounded-xl text-sm font-semibold transition-all hover:bg-rose-200 shadow-sm"
                >
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