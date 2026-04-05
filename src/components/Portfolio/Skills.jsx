import React from 'react';
import Card from '../UI/Card';

const Skills = () => {
  const skillGroups = [
    { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'React (Basic)'] },
    { title: 'Backend', skills: ['Node.js', 'Express (Basic)'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'Figma', 'VS Code'] }
  ];

  return (
    <Card title="Skills" icon="💻">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map(group => (
          <div key={group.title}>
            <p className="text-base font-bold text-portfolio-text-muted mb-4 uppercase tracking-wider">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map(skill => (
                <span key={skill} className="bg-white border border-gray-200 text-portfolio-text px-3.5 py-1.5 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Skills;