import React from 'react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-3xl shadow-sm p-8 border border-gray-100 ${className}`}>
    {children}
  </div>
);

export default Card;