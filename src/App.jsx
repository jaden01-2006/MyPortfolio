import React from 'react';
// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Button from './components/UI/Button';

// Portfolio Sections
import About from './components/Portfolio/About';
import Education from './components/Portfolio/Education';
import Skills from './components/Portfolio/Skills';
import Projects from './components/Portfolio/Project'; 
import Achievements from './components/Portfolio/Achievement';

// Assets
import heroImage from './assets/hero.png'; 

// Unified 'Let's Connect' section
import Card from './components/UI/Card';

const App = () => {
  const contactLinks = [
    { label: 'Email', name: 'jaden.casiple@email.com', icon: '✉️', href: 'mailto:jaden.casiple@email.com' },
    { label: 'Github', name: 'github.com/jaden01-2006', icon: '🐙', href: 'https://github.com/jaden01-2006' },
    { label: 'Facebook', name: 'facebook.com/jadencasiple', icon: '👤', href: 'https://www.facebook.com/profile.php?id=61584166781479' },
    { label: 'Instagram', name: 'instagram.com/en.jaden', icon: '📸', href: 'https://www.instagram.com/en.jaden?igsh=MWp5MGtneTJlZmtjNw==' }
  ];

  return (
    <div className="bg-portfolio-bg text-portfolio-text min-h-screen font-sans selection:bg-portfolio-pink-light selection:text-portfolio-pink-dark selection:text-portfolio-pink-dark">
      <Header />

      <main className="container mx-auto py-12 px-0">
        <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 mb-12 max-w-[1400px] mx-auto px-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-7xl font-extrabold text-portfolio-text m-0 mb-3 leading-tight">
              Hi, I'm <span className="text-portfolio-pink">Jaden Casiple</span>
            </h1>
            <p className="text-3xl font-semibold text-portfolio-text-muted m-0 mb-6 leading-snug">
              BSIT Student & Aspiring Developer ✨
            </p>
            <p className="text-xl text-portfolio-text-muted mb-10 max-w-lg leading-relaxed">
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
          
          <div className="relative">
            <div className="absolute -inset-4 bg-portfolio-pink/10 rounded-full blur-2xl decor-fade"></div>
            
            <img 
              src={heroImage} 
              alt="Jaden Casiple Portrait" 
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-[10px] border-white shadow-xl z-10" 
            />
            
            <span className="absolute left-[-40px] top-5 text-4xl text-portfolio-pink opacity-50 z-20 decor-fade">♡</span>
            <span className="absolute right-[-20px] top-[40%] w-4 h-4 rounded-full bg-portfolio-pink opacity-40 z-20 decor-fade"></span>
          </div>
        </section>

        <About />

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 px-10">
          <Education />
          <Skills />
        </div>

        <Projects />
        <Achievements />

        {/* Connected Let's Connect Section */}
        <section id="contact">
          <Card className='mt-0'>
            <div className="flex flex-col xl:grid xl:grid-cols-4 gap-8 items-center text-center xl:text-left max-w-[1400px] mx-auto">
              
              <div className="xl:col-span-1">
                <h2 className="text-4xl font-extrabold text-portfolio-text m-0 mb-2">
                  Let's Connect!
                </h2>
                <p className="text-portfolio-text-muted m-0 leading-relaxed text-sm">
                  I'd love to connect and collaborate!
                </p>
              </div>

              <div className="xl:col-span-3 flex flex-wrap justify-center xl:justify-end gap-3 w-full">
                {contactLinks.map(link => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-portfolio-bg border border-gray-100 px-5 py-3 rounded-lg text-portfolio-text-muted hover:text-portfolio-pink-dark flex items-center gap-2.5 font-medium transition-all hover:border-portfolio-pink/30 hover:shadow-sm hover:no-underline whitespace-nowrap"
                  >
                    <span className='text-xl'>{link.icon}</span> 
                    <span className="text-xs font-semibold uppercase tracking-wider">{link.label}</span>
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