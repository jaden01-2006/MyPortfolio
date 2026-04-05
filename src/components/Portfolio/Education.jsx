const Education = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-3xl">🎓</span>
        <h2 className="text-3xl font-extrabold text-portfolio-text m-0">Education</h2>
      </div>

      <div className="relative pl-8 border-l-2 border-gray-100 ml-2">
        {/* Timeline Dot */}
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-portfolio-pink border-4 border-white shadow-sm"></div>
        
        <h3 className="text-xl font-bold text-portfolio-text mb-1">
          Bachelor of Science in Information Technology
        </h3>
        <p className="text-portfolio-pink font-semibold mb-2">Western Institute of Technology</p>
        <span className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-500 mb-6">
          🗓️ 2022 - PRESENT
        </span>

        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Key Focus Areas:</h4>
        <ul className="grid grid-cols-1 gap-y-2">
          {["Web Development", "Database Systems", "Networking", "System Analysis"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-gray-600 font-medium">
              <span className="text-portfolio-pink text-xs">●</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Education;