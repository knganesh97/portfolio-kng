'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { themes } from '@/config/themes';

export default function ThemeSwitcher() {
  const { themeId, mode, setThemeId, setMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg w-32 h-10">
        <span className="text-sm font-medium opacity-0">Loading...</span>
      </div>
    );
  }

  const currentTheme = themes[themeId];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
        aria-label="Change theme"
      >
        <span className="text-sm font-medium">{currentTheme.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-72 bg-card text-card-foreground rounded-lg shadow-lg border border-border z-50">
            <div className="p-4 space-y-4">
              {/* Theme selection */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Theme</h3>
                <div className="space-y-2">
                  {Object.values(themes).map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => {
                        setThemeId(theme.id as keyof typeof themes);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        themeId === theme.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      <div className="font-medium">{theme.name}</div>
                      <div className="text-xs opacity-80 mt-0.5">{theme.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mode toggle */}
              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold mb-2">Mode</h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setMode('light')}
                    className={`px-3 py-2 rounded-md transition-colors flex flex-col items-center justify-center gap-1 ${
                      mode === 'light'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">Light</span>
                  </button>
                  <button
                    onClick={() => setMode('dark')}
                    className={`px-3 py-2 rounded-md transition-colors flex flex-col items-center justify-center gap-1 ${
                      mode === 'dark'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <span className="text-xs">Dark</span>
                  </button>
                  <button
                    onClick={() => setMode('system')}
                    className={`px-3 py-2 rounded-md transition-colors flex flex-col items-center justify-center gap-1 ${
                      mode === 'system'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs">System</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
