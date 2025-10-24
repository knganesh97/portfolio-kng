'use client'
import React, { useState, useEffect } from 'react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'experience'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationItems = [
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'experience', label: 'Experience', icon: '💼' }
  ];

  return (
    <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 ${className}`}>
      <nav className="relative bg-card/90 backdrop-blur-md border-2 border-border rounded-2xl p-4 shadow-lg">
        {/* Navigation indicator line - positioned behind the buttons */}
        <div className="absolute left-2 top-4 bottom-4 w-1 bg-border/30 rounded-full">
          <div 
            className={`
              w-full h-12 bg-primary rounded-full transition-all duration-500 ease-out absolute
            `}
            style={{
              transform: activeSection === 'experience' ? 'translateY(60px)' : 'translateY(12px)'
            }}
          />
        </div>

        <div className="relative flex flex-col space-y-3 pl-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300
                hover:bg-primary/20 hover:scale-105
                ${activeSection === item.id 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-card-foreground hover:text-primary'
                }
              `}
              aria-label={`Navigate to ${item.label} section`}
            >
              <span className="text-lg" role="img" aria-hidden="true">
                {item.icon}
              </span>
              <span className="font-medium text-sm whitespace-nowrap">
                {item.label}
              </span>
              <div className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeSection === item.id 
                  ? 'bg-primary-foreground' 
                  : 'bg-transparent group-hover:bg-primary/40'
                }
              `} />
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;