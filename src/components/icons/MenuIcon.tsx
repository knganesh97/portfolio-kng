import React from 'react';

interface MenuIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const MenuIcon: React.FC<MenuIconProps> = ({ 
  className, 
  width = 24, 
  height = 24 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
};

export default MenuIcon;
