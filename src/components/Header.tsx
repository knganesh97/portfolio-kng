'use client'
import React, { useState, useEffect } from "react";
import Link from "@/components/ui/Link";
import { MenuIcon } from "@/components/icons";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import MobileSidebar from "@/components/MobileSidebar";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        <nav className="flex items-center gap-4">
          <div className="hidden sm:block">
            <ThemeSwitcher />
          </div>
          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 rounded-full transition-all duration-200 focus:outline-none header-link"
            aria-label="Open menu"
          >
            <MenuIcon width={24} height={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;