import React from 'react';
import Card from '../UI/Card';

const About = () => (
  <Card className="mb-8">
    <div className="flex items-center gap-4 mb-6 pb-2 border-b-2 border-gray-50">
      <span className="text-3xl">👤</span>
      <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
    </div>
    <div className="text-gray-600 space-y-4 text-left">
      <p>Hello! I'm currently a student pursuing Information Technology. I enjoy exploring web development and creating simple but meaningful systems.</p>
      <p className="font-semibold text-gray-800">I'm currently learning:</p>
      <ul className="space-y-2">
        {['Frontend & Backend Development', 'Database Management', 'UI/UX Design'].map(item => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-[#F06292]">❤️</span> {item}
          </li>
        ))}
      </ul>
      <p><span className="text-[#F06292] font-bold">Goal:</span> To become a full-stack developer and build real-world applications.</p>
    </div>
  </Card>
);

export default About;