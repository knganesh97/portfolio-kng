import React from 'react';

interface SparkleIconProps {
  size: number;
  color: string;
  className?: string;
}

const SparkleIcon: React.FC<SparkleIconProps> = ({ size, color, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0L13.5 8.5L18 6L15 12L24 12L15 12L18 18L13.5 15.5L12 24L10.5 15.5L6 18L9 12L0 12L9 12L6 6L10.5 8.5L12 0Z"
        fill={color}
        style={{
          filter: `drop-shadow(0 0 ${size / 2}px ${color})`,
        }}
      />
    </svg>
  );
};

export default SparkleIcon;
