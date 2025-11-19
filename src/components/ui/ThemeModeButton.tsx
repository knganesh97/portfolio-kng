import React from 'react';

interface ThemeModeButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

export default function ThemeModeButton({ isActive, onClick, icon, label }: ThemeModeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-md transition-colors flex flex-col items-center justify-center gap-1 ${
        isActive
          ? 'theme-mode-btn-active-bg theme-mode-btn-active-fg'
          : 'hover:theme-mode-btn-hover-bg'
      }`}
      aria-label={`Switch to ${label} mode`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}
