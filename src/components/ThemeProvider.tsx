'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes, defaultThemeId } from '@/config/themes';

type ThemeMode = 'light' | 'dark';
type ThemeId = keyof typeof themes;

interface ThemeContextType {
  themeId: ThemeId;
  mode: ThemeMode;
  setThemeId: (themeId: ThemeId) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY_THEME = 'portfolio-theme';
const STORAGE_KEY_MODE = 'portfolio-theme-mode';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>(defaultThemeId);
  const [mode, setModeState] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) as ThemeId | null;
    const savedMode = localStorage.getItem(STORAGE_KEY_MODE) as ThemeMode | null;
    
    if (savedTheme && themes[savedTheme]) {
      setThemeIdState(savedTheme);
    }
    
    if (savedMode) {
      setModeState(savedMode);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setModeState(prefersDark ? 'dark' : 'light');
    }
    
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const theme = themes[themeId];
    const colors = mode === 'dark' ? theme.dark : theme.light;

    // Apply theme colors as CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      if (typeof value === 'object') {
        // Handle color palettes (orange, green, blue)
        Object.entries(value).forEach(([shade, color]) => {
          root.style.setProperty(`--color-${key}-${shade}`, String(color));
        });
      } else {
        // Handle semantic and component colors
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--color-${cssVar}`, String(value));
      }
    });

    // Set data attributes for theme and mode
    root.setAttribute('data-theme', themeId);
    root.setAttribute('data-mode', mode);
    
    // Add/remove dark class for Tailwind compatibility
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeId, mode, mounted]);

  const setThemeId = (newThemeId: ThemeId) => {
    setThemeIdState(newThemeId);
    localStorage.setItem(STORAGE_KEY_THEME, newThemeId);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY_MODE, newMode);
  };

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ themeId, mode, setThemeId, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
