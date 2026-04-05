import React from 'react';

const Card = ({ children, className = '', title, icon }) => {
  return (
    <div className={`bg-portfolio-card-bg border-b border-gray-100 p-0 mb-0 shadow-none ${className}`}>
      <div className="max-w-[1400px] mx-auto px-10 py-16">
        {(title || icon) && (
          <div className="flex items-center gap-4 mb-10 pb-2.5 border-b-2 border-gray-100">
            {icon && <span className="text-4xl text-portfolio-pink decor-fade">{icon}</span>}
            {title && <h2 className="text-4xl font-bold text-portfolio-text m-0">{title}</h2>}
          </div>
        )}
        {children}
      </div>

    </div>
  );
};

export default Card;