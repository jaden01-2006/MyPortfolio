import React from 'react';
import Card from '../UI/Card';

const Education = () => {
  const subjectItems = ['Web Development', 'Database Systems', 'Networking'];

  return (
    <Card title="Education" icon="🎓">
      <h3 className="text-xl font-semibold mb-1 text-portfolio-text">
        Bachelor of Science in Information Technology
      </h3>
      <p className="text-portfolio-text-muted mb-2">Western Institute of Technology</p>
      <p className="text-portfolio-text-muted mb-3 flex items-center gap-2">
        <span className='text-sm'>📅</span> 2022 - Present
      </p>
      
      <p className="font-semibold mb-2">Relevant Subjects:</p>
      <ul className="list-none p-0 m-0 space-y-2.5">
        {subjectItems.map(item => (
          <li key={item} className="relative pl-6 text-portfolio-text before:content-['●'] before:text-portfolio-pink before:absolute before:left-0 before:top-0.5 before:text-sm">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Education;