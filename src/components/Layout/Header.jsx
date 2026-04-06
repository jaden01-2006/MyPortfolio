import React, { useState } from 'react';
import Button from '../UI/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements & Activities', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-portfolio-card-bg sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="text-2xl font-extrabold text-portfolio-pink hover:no-underline">
            Jaden Casiple <span className='text-xs font-serif'>♡</span>
          </a>
        </div>
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8 p-0 m-0 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="font-medium text-portfolio-text hover:text-portfolio-pink transition-colors hover:no-underline whitespace-nowrap"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block flex-shrink-0">
          <a href="#contact" className="hover:no-underline">
            <Button 
              className="bg-portfolio-pink hover:bg-portfolio-pink-dark text-white px-6 py-2.5 rounded-xl font-bold shadow-sm transition-all active:scale-95 border-none whitespace-nowrap"
            >
              Let's Connect
            </Button>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-portfolio-text focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span> // Close Icon
            ) : (
              <span className="text-2xl">☰</span> // Hamburger Icon
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-semibold text-portfolio-text hover:text-portfolio-pink py-2 border-b border-gray-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="mt-4">
              <Button className="w-full bg-portfolio-pink text-white py-3 rounded-xl font-bold">
                Let's Connect
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;