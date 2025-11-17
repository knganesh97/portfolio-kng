'use client'
import React, { useState, useEffect } from "react";
import Link from "@/components/ui/Link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



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

        <nav className="flex items-center">
          <ThemeSwitcher />
        </nav>
      </header>
    </>
  );
};

export default Header;