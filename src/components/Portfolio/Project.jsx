import React from 'react';
import Card from '../UI/Card';

const Projects = () => {
  const data = [
    { 
      title: 'Awesometodos',
      icon: '📝',
      tags: ['HTML', 'Express.js', 'Node.js','MongoDB', 'React.js'],
      desc: 'A full-featured CRUD system Notion style designed with MERN stack.',
      link: 'https://awesometodos-v3-1.onrender.com'
    },
    { 
      title: 'Audio Media Player',
      icon: '🎓',
      tags: ['Figma'],
      desc: 'An Audio Media Player prototype design.',
      link: 'https://www.figma.com/proto/Ebz3e6dsgDGdeFy1Ho9VYb/Untitled?node-id=3-2&p=f&t=CDzrh5eVwjDwRlMn-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1' // <-- Add your link here
    },
    { 
      title: 'Product Design Prototype',
      icon: '✨',
      tags: ['Figma'],
      desc: 'An interactive digital design prototype.',
      link: 'https://www.figma.com/proto/VZqseizqyDgA3z1c60gh0A/Untitled?node-id=6-2&p=f&t=Vnvz3pwXGnMgl316-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'
    }
  ];

  return (
  <section id="projects" className="scroll-mt-20 mb-8">
    <Card>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">📂 Projects</h2>
        <a
          href="https://github.com/jaden01-2006"
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#F06292] font-semibold text-sm hover:underline group"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          <span>View More on GitHub →</span>
        </a>
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
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#F06292] text-xs font-bold hover:underline"
              >
                See Project →
              </a>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Projects;