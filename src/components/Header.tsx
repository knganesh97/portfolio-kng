'use client'
import React, { useState, useEffect } from "react";
import Link from "@/components/ui/Link";
import { NAVIGATION_ITEMS } from "@/utils/Constants";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/utils/scrollUtils";
import { MenuIcon, CloseIcon } from "@/components/icons";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 backdrop-blur-md shadow-md flex items-center justify-between px-10 py-4 transition-all duration-300 border-b-2 header-bg ${
          scrolled ? 'header-scrolled' : ''
        }`}
        style={{
          backgroundColor: scrolled 
            ? 'rgba(var(--color-header-bg-rgb), 0.85)' 
            : 'rgba(var(--color-header-bg-rgb), 0.95)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        }}
      >
        <Link href="/" className="flex items-center group no-underline">
          <span
            className="text-2xl font-bold tracking-wide font-sans header-title"
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            Full Stack Developer
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 rounded-full transition-all duration-200 focus:outline-none header-link"
            aria-label="Open menu"
          >
            <MenuIcon width={24} height={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-[60] sm:hidden bg-black/30"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-64 transform transition-transform duration-300 ease-in-out sm:hidden border-l header-bg ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: 'var(--color-header-border)' }}>
          <h2 className="text-lg font-semibold header-title">
            Menu
          </h2>
          <button
            onClick={closeSidebar}
            className="p-2 rounded-full transition-all duration-200 header-link"
            aria-label="Close menu"
          >
            <CloseIcon width={20} height={20} />
          </button>
        </div>
        <nav className="p-4">
          {isHomepage ? (
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id, closeSidebar)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/10 text-left group"
                >
                  <span className="text-lg" role="img" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="font-medium text-sm">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground text-center py-8">
              Navigation available on homepage
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;