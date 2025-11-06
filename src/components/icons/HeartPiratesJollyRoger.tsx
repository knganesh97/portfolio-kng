import React from 'react';

interface HeartPiratesJollyRogerProps {
  className?: string;
  size?: number;
}

export const HeartPiratesJollyRoger: React.FC<HeartPiratesJollyRogerProps> = ({
  className = '',
  size = 100,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="100" cy="100" r="90" fill="#FFD700" />
      
      {/* Top hat/crown segments */}
      <rect x="90" y="15" width="20" height="35" fill="#2D2D2D" rx="3" />
      
      {/* Top left segment */}
      <rect
        x="50"
        y="35"
        width="15"
        height="30"
        fill="#2D2D2D"
        rx="3"
        transform="rotate(-25 57.5 50)"
      />
      
      {/* Top right segment */}
      <rect
        x="135"
        y="35"
        width="15"
        height="30"
        fill="#2D2D2D"
        rx="3"
        transform="rotate(25 142.5 50)"
      />
      
      {/* Main circle/head outline */}
      <circle cx="100" cy="105" r="55" fill="none" stroke="#2D2D2D" strokeWidth="8" />
      
      {/* Eyes */}
      <circle cx="80" cy="95" r="12" fill="#2D2D2D" />
      <circle cx="120" cy="95" r="12" fill="#2D2D2D" />
      
      {/* Nose */}
      <circle cx="100" cy="110" r="4" fill="#2D2D2D" />
      
      {/* Smile - vertical bars */}
      <rect x="70" y="120" width="10" height="35" fill="#2D2D2D" rx="2" />
      <rect x="87" y="120" width="10" height="35" fill="#2D2D2D" rx="2" />
      <rect x="104" y="120" width="10" height="35" fill="#2D2D2D" rx="2" />
      <rect x="121" y="120" width="10" height="35" fill="#2D2D2D" rx="2" />
      
      {/* Bottom circle segments */}
      <rect
        x="45"
        y="120"
        width="15"
        height="30"
        fill="#2D2D2D"
        rx="3"
        transform="rotate(-35 52.5 135)"
      />
      
      <rect
        x="140"
        y="120"
        width="15"
        height="30"
        fill="#2D2D2D"
        rx="3"
        transform="rotate(35 147.5 135)"
      />
      
      {/* Side segments - left */}
      <rect
        x="25"
        y="80"
        width="15"
        height="25"
        fill="#2D2D2D"
        rx="3"
        transform="rotate(-60 32.5 92.5)"
      />
      
      <rect
        x="30"
        y="105"
        width="15"
        height="25"
        fill="#2D2D2D"
        rx="3"
        transform="rotate(-75 37.5 117.5)"
      />
      
      {/* Side segments - right */}
      <rect
        x="160"
        y="80"
        width="15"
        height="25"
        fill="#2D2D2D"
        rx="3"
        transform="rotate(60 167.5 92.5)"
      />
      
      <rect
        x="155"
        y="105"
        width="15"
        height="25"
        fill="#2D2D2D"
        rx="3"
        transform="rotate(75 162.5 117.5)"
      />
    </svg>
  );
};

export default HeartPiratesJollyRoger;
