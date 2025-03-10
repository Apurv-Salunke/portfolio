import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { name: 'Home', id: 'home', icon: '⌂' },
    { name: 'Projects', id: 'projects', icon: '⚡' },
    { name: 'Experience', id: 'experience', icon: '✧' },
    { name: 'Skills', id: 'skills', icon: '⚔' },
    { name: 'Contact', id: 'contact', icon: '⊡' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });

      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${
        isScrolled ? 'w-[90%] sm:w-[400px]' : 'w-[95%] sm:w-[500px]'
      }`}
    >
      <nav className={`cyber-card rounded-2xl px-2 py-2 transition-all duration-300 ${
        isScrolled ? 'bg-opacity-95' : 'bg-opacity-70'
      }`}>
        <ul className="flex items-center justify-around">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative group px-3 py-2 rounded-xl transition-all duration-300
                  ${activeSection === item.id ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}
                `}
              >
                <span className="block text-center text-lg mb-1">{item.icon}</span>
                <span className="block text-xs font-medium tracking-wider">{item.name}</span>
                
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-xl bg-primary/10 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 -z-10" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
} 