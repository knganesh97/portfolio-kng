import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
