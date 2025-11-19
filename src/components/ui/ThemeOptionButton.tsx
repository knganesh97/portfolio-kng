import React from 'react';

interface ThemeOptionButtonProps {
  isActive: boolean;
  onClick: () => void;
  name: string;
  description: string;
}

export default function ThemeOptionButton({ isActive, onClick, name, description }: ThemeOptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
        isActive
          ? 'theme-option-btn-active-bg theme-option-btn-active-fg'
          : 'hover:theme-option-btn-hover-bg'
      }`}
      aria-label={`Switch to ${name} theme`}
    >
      <div className="font-medium">{name}</div>
      <div className="text-xs opacity-80 mt-0.5">{description}</div>
    </button>
  );
}
