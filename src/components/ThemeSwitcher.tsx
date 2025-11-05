'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { themes } from '@/config/themes';
import { SunIcon, MoonIcon, MonitorIcon, ChevronDownIcon } from './icons';
import ThemeModeButton from './ui/ThemeModeButton';
import ThemeOptionButton from './ui/ThemeOptionButton';
import DropdownBackdrop from './ui/DropdownBackdrop';

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

  const handleCloseDropdown = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
        aria-label="Change theme"
      >
        <span className="text-sm font-medium">{currentTheme.name}</span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <DropdownBackdrop onClick={handleCloseDropdown} />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-72 bg-card text-card-foreground rounded-lg shadow-lg border border-border z-50">
            <div className="p-4 space-y-4">
              {/* Theme selection */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Theme</h3>
                <div className="space-y-2">
                  {Object.values(themes).map((theme) => (
                    <ThemeOptionButton
                      key={theme.id}
                      isActive={themeId === theme.id}
                      onClick={() => setThemeId(theme.id as keyof typeof themes)}
                      name={theme.name}
                      description={theme.description}
                    />
                  ))}
                </div>
              </div>

              {/* Mode toggle */}
              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-semibold mb-2">Mode</h3>
                <div className="grid grid-cols-3 gap-2">
                  <ThemeModeButton
                    isActive={mode === 'light'}
                    onClick={() => setMode('light')}
                    icon={<SunIcon />}
                    label="Light"
                  />
                  <ThemeModeButton
                    isActive={mode === 'dark'}
                    onClick={() => setMode('dark')}
                    icon={<MoonIcon />}
                    label="Dark"
                  />
                  <ThemeModeButton
                    isActive={mode === 'system'}
                    onClick={() => setMode('system')}
                    icon={<MonitorIcon />}
                    label="System"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
