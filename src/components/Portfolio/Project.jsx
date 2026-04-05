import React from 'react';
import Card from '../UI/Card';

const Projects = () => {
  const data = [
    { title: 'Simple To-Do App', icon: '📝', tags: ['HTML', 'CSS', 'JS'], desc: 'A beginner task manager to add and edit tasks.' },
    { title: 'Student Record System', icon: '🎓', tags: ['MERN', 'MongoDB'], desc: 'A CRUD system to manage student information.' },
    { title: 'Portfolio Website', icon: '✨', tags: ['React', 'Vite', 'Tailwind'], desc: 'My personal portfolio to showcase my skills.' }
  ];

  return (
    <section id="projects" className="scroll-mt-20 mb-8">
      <Card>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">📂 Projects</h2>
          <a href="https://github.com/jaden01-2006" className="text-[#F06292] font-semibold text-sm hover:underline">View More on GitHub →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((p, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow bg-[#FDFDFD]">
              <div className="w-12 h-12 bg-[#FCE4EC] rounded-xl flex items-center justify-center text-2xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(t => <span key={t} className="text-[10px] bg-gray-100 px-2 py-1 rounded-full uppercase font-bold text-gray-500">{t}</span>)}
              </div>
              <a href="#" className="text-[#F06292] text-xs font-bold hover:underline">Live Demo →</a>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Projects;