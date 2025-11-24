import React from 'react';

interface HeartPiratesJollyRogerProps {
  className?: string;
  size?: number;
}

export const HeartPiratesJollyRoger: React.FC<HeartPiratesJollyRogerProps> = ({
  className = '',
  size = 100,
}) => {
  const cx = 100;
  const cy = 100;
  const radius = 80;
  
  // Generate 6 arcs with gaps at 0°, 60°, 120°, 180°, 240°, 300°
  // Each arc spans 40° (from 10° to 50° relative to each gap)
  const generateArc = (startAngle: number) => {
    // Convert degrees to radians
    const start = (startAngle * Math.PI) / 180;
    const end = ((startAngle + 40) * Math.PI) / 180;
    
    // Calculate start and end points
    const x1 = cx + radius * Math.sin(start);
    const y1 = cy - radius * Math.cos(start);
    const x2 = cx + radius * Math.sin(end);
    const y2 = cy - radius * Math.cos(end);
    
    // SVG arc: rx ry x-axis-rotation large-arc-flag sweep-flag x y
    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`;
  };
  
  const arcs = [10, 70, 130, 190, 250, 310].map(angle => generateArc(angle));

  // Generate line segments from main circle circumference to midpoint of each arc
  const generateArcCenterLine = (startAngle: number) => {
    // Midpoint of the arc is at startAngle + 20° (middle of the 40° arc)
    const centerAngle = ((startAngle + 20) * Math.PI) / 180;
    
    // Start point on main circle circumference (radius 60)
    const x1 = cx + 60 * Math.sin(centerAngle);
    const y1 = cy - 60 * Math.cos(centerAngle);
    
    // End point at the midpoint of the arc (radius 80, which is the arc radius)
    const x2 = cx + 80 * Math.sin(centerAngle);
    const y2 = cy - 80 * Math.cos(centerAngle);
    
    return { x1, y1, x2, y2 };
  };
  
  const arcCenterLines = [10, 70, 130, 190, 250, 310].map(angle => generateArcCenterLine(angle));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >

      {/* Main circle outline */}
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="10" />

      {/* Arcs with 6 gaps */}
      {arcs.map((d, i) => (
        <path 
          key={i}
          d={d} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="10" 
          strokeLinecap="round" 
        />
      ))}

      {/* Line segments from center to arc midpoints */}
      {arcCenterLines.map((line, i) => (
        <line 
          key={i}
          x1={line.x1} 
          y1={line.y1} 
          x2={line.x2} 
          y2={line.y2} 
          stroke="currentColor" 
          strokeWidth="10" 
        />
      ))}

      {/* Vertical diameter line */}
      <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="10" />
      
      {/* Four perpendicular line segments on the right half, evenly distributed */}
      {/* y positions: 64, 88, 112, 136 (24 units apart) */}
      <line x1="100" y1="64" x2="151" y2="64" stroke="currentColor" strokeWidth="10" />
      <line x1="100" y1="88" x2="155" y2="88" stroke="currentColor" strokeWidth="10" />
      <line x1="100" y1="112" x2="155" y2="112" stroke="currentColor" strokeWidth="10" />
      <line x1="100" y1="136" x2="151" y2="136" stroke="currentColor" strokeWidth="10" />
      
      {/* Small dot left of center */}
      <circle cx="82" cy="100" r="4" fill="currentColor" />

      {/* Large dots left of center */}
      <circle cx="70" cy="76" r="12" fill="currentColor" />
      <circle cx="70" cy="124" r="12" fill="currentColor" />
    </svg>
  );
};

export default HeartPiratesJollyRoger;
