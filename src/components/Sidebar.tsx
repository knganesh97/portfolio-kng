'use client'
import React, { useState, useEffect } from 'react';
import { NAVIGATION_ITEMS } from '@/utils/Constants';
import { SCROLL_DETECTION_OFFSET } from '@/styles/styleConstants';
import { scrollToSection } from '@/utils/scrollUtils';
import { MenuIcon, CloseIcon } from '@/components/icons';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [indicatorStyle, setIndicatorStyle] = useState<{ transform: string; height: string }>({
    transform: 'translateY(0px)',
    height: '48px'
  });

  const sections = React.useMemo(() => NAVIGATION_ITEMS.map(item => item.id), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_DETECTION_OFFSET; // Offset for better detection

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
  }, [sections]);

  // Update indicator position based on active section
  useEffect(() => {
    if (activeSection) {
      const buttonElement = document.querySelector(`[data-section="${activeSection}"]`);
      if (buttonElement) {
        const navElement = buttonElement.closest('nav');
        if (navElement) {
          // Get nav padding dynamically instead of hardcoding 16
          const navStyles = window.getComputedStyle(navElement);
          const navPaddingTop = parseInt(navStyles.paddingTop, 10) || 0;
          const navRect = navElement.getBoundingClientRect();
          const buttonRect = buttonElement.getBoundingClientRect();
          const relativeTop = buttonRect.top - navRect.top - navPaddingTop;
          
          setIndicatorStyle({
            transform: `translateY(${relativeTop}px)`,
            height: `${buttonRect.height}px`
          });
        }
      }
    }
  }, [activeSection]);

  const handleMenuToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsExpanded(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Mobile floating menu button - only visible on small screens */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={handleMenuToggle}
          className="bg-card/80 backdrop-blur-md border-2 border-border rounded-full p-3 shadow-lg hover:bg-card/90 transition-all duration-300 hover:scale-105"
          aria-label={isExpanded ? "Close navigation menu" : "Open navigation menu"}
        >
          {isExpanded ? (
            <CloseIcon className="text-foreground" width={20} height={20} />
          ) : (
            <MenuIcon className="text-foreground" width={20} height={20} />
          )}
        </button>
      </div>

      {/* Mobile expanded sidebar */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isExpanded ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsExpanded(false)}
        />
        
        {/* Compact sidebar panel - positioned similar to desktop but larger */}
        <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${isExpanded ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}`}>
          <nav className="relative bg-card/90 backdrop-blur-md border-2 border-border rounded-2xl p-4 shadow-lg min-w-max">
            {/* Navigation indicator line - positioned behind the buttons */}
            <div className="absolute left-2 top-4 bottom-4 w-1 bg-border/30 rounded-full">
              <div 
                className="w-full bg-primary rounded-full transition-all duration-500 ease-out absolute"
                style={indicatorStyle}
              />
            </div>

            <div className="relative flex flex-col space-y-3 pl-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  data-section={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`
                    group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300
                    hover:bg-primary/20 hover:scale-105
                    ${activeSection === item.id 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'text-foreground hover:text-primary'
                    }
                  `}
                  aria-label={`Navigate to ${item.label} section`}
                >
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
      </div>

      {/* Desktop sidebar - only visible on large screens */}
      <div className={`hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40 ${className}`}>
        <nav className="relative bg-card/90 backdrop-blur-md border-2 border-border rounded-2xl p-4 shadow-lg">
          {/* Navigation indicator line - positioned behind the buttons */}
          <div className="absolute left-2 top-4 bottom-4 w-1 bg-border/30 rounded-full">
            <div 
              className="w-full bg-primary rounded-full transition-all duration-500 ease-out absolute"
              style={indicatorStyle}
            />
          </div>

          <div className="relative flex flex-col space-y-3 pl-2">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                data-section={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300
                  hover:bg-primary/20 hover:scale-105
                  ${activeSection === item.id 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'text-foreground hover:text-primary'
                  }
                `}
                aria-label={`Navigate to ${item.label} section`}
              >
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
    </>
  );
};

export default Sidebar;