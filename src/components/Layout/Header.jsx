import React from 'react';
import Button from '../UI/Button';

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-portfolio-card-bg sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto max-w-[1000px] px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold text-portfolio-pink hover:no-underline">
          Jaden Casiple <span className='text-xs font-serif'>♡</span>
        </a>
        
        <nav>
          <ul className="flex gap-6 p-0 m-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="font-medium text-portfolio-text hover:text-portfolio-pink transition-colors hover:no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <a href="#contact" className="hover:no-underline">
          <Button variant="outline" className="px-5 py-2.5">Let's Connect</Button>
        </a>
      </div>
    </header>
  );
};

export default Header;