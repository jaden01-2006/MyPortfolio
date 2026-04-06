import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Button from './components/UI/Button';
import Card from './components/UI/Card';
import About from './components/Portfolio/About';
import Education from './components/Portfolio/Education';
import Skills from './components/Portfolio/Skills';
import Projects from './components/Portfolio/Project'; 
import Achievements from './components/Portfolio/Achievement';
import LoadingScreen from './components/UI/LoadingScreen';

import heroImage from './assets/hero.jpg';

// Social Icons Components
const SI_Linkedin = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" fill="#0A66C2" className={className}>
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.978 0 1.77-.773 1.77-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
  </svg>
);

const SI_Email = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" fill="#EA4335" className={className}>
    <title>Gmail</title>
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.57l8.073-6.077C21.691 2.279 24 3.434 24 5.457z"/>
  </svg>
);

const SI_Facebook = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" fill="#1877F2" className={className}>
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Moved outside to avoid unnecessary re-renders
const contactLinks = [
  { label: 'Email Me', icon: <SI_Email className="w-6 h-6" />, href: 'mailto:nenengjadencasiple01@gmail.com' },
  { label: 'GitHub', icon: <span className="text-2xl">🐙</span>, href: 'https://github.com/jaden01-2006' },
  { label: 'LinkedIn', icon: <SI_Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/jadencasiple/' },
  { label: 'Facebook', icon: <SI_Facebook className="w-6 h-6" />, href: 'https://www.facebook.com/profile.php?id=61584166781479' }
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-portfolio-bg text-portfolio-text min-h-screen font-sans selection:bg-portfolio-pink-light selection:text-portfolio-pink-dark scroll-smooth overflow-x-hidden">
      <Header />

      <main className="container mx-auto py-12 px-6 md:px-0">
        {/* Hero Section */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-12 py-10 md:py-20 mb-12 max-w-[1200px] mx-auto scroll-mt-24">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold text-portfolio-text m-0 mb-3 leading-tight">
              Hi, I'm <span className="text-portfolio-pink">Jaden Casiple</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-portfolio-text-muted m-0 mb-6 leading-snug">
              BSIT Student & Aspiring Developer ✨
            </p>
            <p className="text-lg md:text-xl text-portfolio-text-muted mb-10 max-w-lg leading-relaxed mx-auto md:mx-0">
              I'm passionate about learning, building projects, and improving my skills every day. 
              I love turning ideas into simple, meaningful web applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
              <a href="#projects" className="hover:no-underline">
                <Button className="bg-portfolio-pink hover:bg-portfolio-pink-dark text-white px-8 py-3.5 rounded-xl font-bold shadow-md transition-all active:scale-95 text-base">
                  View My Projects →
                </Button>
              </a>
              <a href="#contact" className="hover:no-underline">
                <Button variant="secondary" className="border-gray-200 px-8 py-3.5 rounded-xl flex items-center gap-2 font-semibold text-base">
                  Contact Me ✉️
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 bg-portfolio-pink/10 rounded-full blur-2xl decor-fade"></div>
            <img 
              src={heroImage}
              alt="Jaden Casiple Portrait"
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-[8px] md:border-[10px] border-white shadow-xl z-10" 
            />
            <span className="absolute left-[-30px] top-5 text-3xl md:text-4xl text-portfolio-pink opacity-50 z-20 decor-fade">♡</span>
          </div>
        </section>

        {/* Sections */}
        <div className="max-w-[1200px] mx-auto space-y-16">
          <section id="about" className="scroll-mt-24">
             <About />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <Education />
            <Skills />
          </div>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="achievements" className="scroll-mt-24">
            <Achievements />
          </section>

          {/* Contact Section - Responsive Fix Applied */}
          <section id="contact" className="scroll-mt-24 pb-12">
            <Card className='bg-[#fff5f5] shadow-sm border-none rounded-[40px] p-8 md:p-12'>
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="mb-6">
                    <span className="text-7xl md:text-8xl opacity-90">✉️</span>
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 m-0 mb-4 tracking-tight">
                      Let's Connect!
                    </h2>
                    <p className="text-gray-600 m-0 leading-relaxed text-lg md:text-xl font-medium max-w-sm">
                      I'd love to connect and collaborate on interesting projects!
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto">
                  {contactLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-4 bg-white border border-rose-50 px-6 py-4 rounded-2xl w-full md:min-w-[280px] shadow-sm transition-all hover:shadow-md hover:scale-[1.02] no-underline group"
                    >
                      <div className="flex items-center justify-center">
                        {link.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-800 group-hover:text-portfolio-pink">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;