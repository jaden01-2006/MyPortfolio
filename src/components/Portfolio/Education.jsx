import React from 'react';

const Education = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-rose-100 h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-rose-100/30 rounded-full text-3xl">🎓</div>
        <h2 className="text-3xl font-extrabold text-gray-900 m-0">Education</h2>
      </div>

      <div className="pl-3 relative border-l-2 border-rose-100 ml-4">
        <div className="mb-10 pl-6">
          <h3 className="text-xl font-semibold text-black mb-1">Bachelor of Science in Information Technology</h3>
          <p className="text-lg font-medium text-black/90 mb-3">Western Institute of Technology</p>
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-950 px-3.5 py-2 rounded-lg text-sm font-semibold mb-6">
            📅 2022 - PRESENT
          </div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-black/60 mb-4">Key Focus Areas:</h4>
          <ul className="list-none space-y-3 p-0 text-sm font-medium">
            <li className="flex items-center gap-2.5"><span className="w-2 h-2 rounded-full bg-rose-600"></span>Web Development</li>
            <li className="flex items-center gap-2.5"><span className="w-2 h-2 rounded-full bg-rose-600"></span>Database Systems</li>
            <li className="flex items-center gap-2.5"><span className="w-2 h-2 rounded-full bg-rose-600"></span>Networking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// CRITICAL FIX: Add this line at the very bottom
export default Education;