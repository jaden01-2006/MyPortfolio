import React from 'react';

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 flex items-center gap-2";
  const variants = {
    primary: "bg-[#F06292] hover:bg-[#ec407a] text-white shadow-md",
    secondary: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;