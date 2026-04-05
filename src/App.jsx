import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Button from './components/UI/Button';
import About from './components/portfolio/About';
import Education from './components/portfolio/Education';
import Skills from './components/portfolio/Skills';
import Projects from './components/portfolio/Project'; 
import Achievements from './components/portfolio/Achievement';
import heroImage from './assets/hero.png'; 
import Card from './components/UI/Card';

const App = () => {
  const contactLinks = [
    { label: 'Github', icon: '🐙', href: 'https://github.com/jaden01-2006' },
    { label: 'Facebook', icon: '👤', href: 'https://facebook.com/jadencasiple' },
    { label: 'Instagram', icon: '📸', href: 'https://instagram.com/en.jaden' }
  ];

  return (
    <div className="bg-[#F9F9FB] min-h-screen font-sans">
      <Header />
      <main className="container mx-auto max-w-[1000px] px-6 py-12">
        
        {/* Hero Section Cloned from Image */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 mb-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-7xl font-extrabold text-gray-800 m-0 mb-4 leading-tight">
              Hi, I'm <br /> <span className="text-[#F06292]">Jaden Casiple</span>
            </h1>
            <p className="text-2xl font-semibold text-gray-600 mb-6">
              BSIT Student & Aspiring Developer ✨
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
              I'm passionate about learning, building projects, and improving my skills every day. 
              I love turning ideas into simple, meaningful web applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#projects"><Button>View My Projects →</Button></a>
              <a href="#contact"><Button variant="secondary">Contact Me ✉️</Button></a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-[#F06292]/5 rounded-full blur-2xl"></div>
            <img src={heroImage} alt="Jaden" className="relative w-80 h-80 rounded-full object-cover border-[10px] border-white shadow-xl z-10" />
            <span className="absolute left-[-40px] top-5 text-4xl text-[#F06292] opacity-50 z-20">♡</span>
            <span className="absolute right-[-20px] top-[40%] w-4 h-4 rounded-full bg-[#F06292] opacity-40 z-20"></span>
          </div>
        </section>

        <About />
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Education />
          <Skills />
        </div>
        <Projects />
        <Achievements />

        {/* Contact Section */}
        <section id="contact">
          <Card className="mt-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Let's Connect!</h2>
                <p className="text-gray-500 text-sm">I'd love to connect and collaborate!</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {contactLinks.map(link => (
                  <a key={link.label} href={link.href} className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl text-gray-600 hover:text-[#F06292] transition-all uppercase text-[10px] font-bold tracking-widest">
                    <span>{link.icon}</span> {link.label}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;