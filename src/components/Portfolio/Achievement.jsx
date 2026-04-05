import React from 'react';
import Card from '../UI/Card';

const Achievements = () => {
  const achievementItems = [
    { icon: '🎉', text: 'Participated in Hackathon 2025' },
    { icon: '📜', text: 'Completed Online Courses (Udemy / Coursera)' },
    { icon: '🛠️', text: 'Built 5+ Personal Projects' }
  ];

  return (
    <Card title="Achievements & Activities" icon="🏆">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievementItems.map((item, idx) => (
          <div key={idx} className="bg-[#fff8fb] border border-[#fee1ea] rounded-card p-6 flex items-start gap-4 transition hover:bg-[#ffeef4]">
            <span className="text-3xl text-portfolio-pink">{item.icon}</span>
            <p className="text-portfolio-pink-dark m-0 font-medium leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Achievements;