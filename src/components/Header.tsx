'use client'
import React, { useState, useEffect } from "react";
import Link from "@/components/ui/Link";

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

        <nav className="flex items-center gap-6">
          <Link
            href="/projects"
            className="font-semibold text-base px-4 py-2 rounded-full transition-all duration-200 focus:outline-none hidden sm:inline-block header-link"
          >
            My Projects
          </Link>

          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 rounded-full transition-all duration-200 focus:outline-none header-link"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
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
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <Link
            href="/projects"
            className="block font-semibold text-base px-4 py-3 rounded-full transition-all duration-200 header-link"
            onClick={closeSidebar}
          >
            My Projects
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;