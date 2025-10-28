"use client";

import React, { useEffect, useState, useRef } from "react";

interface SparklesProps {
  color?: string;
  count?: number;
  minSize?: number;
  maxSize?: number;
  className?: string;
  brightnessBoost?: number;
  children?: React.ReactNode;
  disableAutoColor?: boolean;
}

interface SparkleType {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const Sparkles: React.FC<SparklesProps> = ({
  color,
  count = 20,
  minSize = 2,
  maxSize = 6,
  className = "",
  brightnessBoost = 1.3,
  children,
  disableAutoColor = false,
}) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        delay: Math.random() * 2,
        duration: Math.random() * 1.5 + 1,
      }));
    };

    setSparkles(generateSparkles());
  }, [count, minSize, maxSize]);

  const getColorAtPosition = (x: number, y: number): string => {
    if (color || disableAutoColor) return color || "rgb(255, 215, 0)";
    
    if (!containerRef.current) return "rgb(255, 215, 0)";

    try {
      // Get the element at the sparkle's position
      const rect = containerRef.current.getBoundingClientRect();
      const absX = rect.left + (x / 100) * rect.width;
      const absY = rect.top + (y / 100) * rect.height;
      
      // Get the element at this position
      const element = document.elementFromPoint(absX, absY);
      if (!element) return "rgb(255, 215, 0)";

      // Check if this element or any parent (within our container) has the no-sparkles marker
      let currentElement: Element | null = element;
      while (currentElement && currentElement !== containerRef.current.parentElement) {
        // Stop at our immediate parent - don't look beyond our Sparkles boundary
        if (currentElement === containerRef.current) break;
        
        if ((currentElement as HTMLElement).dataset?.noSparkles === "true") {
          return "transparent"; // Hide sparkle in no-sparkles zones
        }
        currentElement = currentElement.parentElement;
      }

      // Get the computed background color of this element or its parents
      currentElement = element;
      let bgColor = "rgba(0, 0, 0, 0)";
      
      while (currentElement && currentElement !== containerRef.current.parentElement) {
        // Stop at our container boundary
        if (currentElement === containerRef.current) break;
        
        const style = window.getComputedStyle(currentElement as HTMLElement);
        const bg = style.backgroundColor;
        
        // Check if background is not transparent
        if (bg && !bg.includes("rgba(0, 0, 0, 0)") && bg !== "transparent") {
          bgColor = bg;
          break;
        }
        
        currentElement = currentElement.parentElement;
      }

      // Parse RGB values and brighten them
      const rgbMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (rgbMatch) {
        const r = Math.min(255, Math.floor(parseInt(rgbMatch[1]) * brightnessBoost));
        const g = Math.min(255, Math.floor(parseInt(rgbMatch[2]) * brightnessBoost));
        const b = Math.min(255, Math.floor(parseInt(rgbMatch[3]) * brightnessBoost));
        return `rgb(${r}, ${g}, ${b})`;
      }
    } catch (error) {
      console.error("Error detecting color:", error);
    }

    return "rgb(255, 215, 0)";
  };

  // If children are provided, wrap them with sparkles
  if (children) {
    return (
      <div className={`relative ${className}`}>
        {children}
        <div 
          ref={containerRef} 
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ zIndex: 1 }}
        >
          {sparkles.map((sparkle) => {
            const sparkleColor = getColorAtPosition(sparkle.x, sparkle.y);
            
            // Don't render sparkles in no-sparkles zones
            if (sparkleColor === "transparent") return null;
            
            return (
              <div
                key={sparkle.id}
                className="absolute animate-sparkle"
                style={{
                  left: `${sparkle.x}%`,
                  top: `${sparkle.y}%`,
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                  animationDelay: `${sparkle.delay}s`,
                  animationDuration: `${sparkle.duration}s`,
                }}
              >
                <svg
                  width={sparkle.size}
                  height={sparkle.size}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0L13.5 8.5L18 6L15 12L24 12L15 12L18 18L13.5 15.5L12 24L10.5 15.5L6 18L9 12L0 12L9 12L6 6L10.5 8.5L12 0Z"
                    fill={sparkleColor}
                    style={{
                      filter: `drop-shadow(0 0 ${sparkle.size / 2}px ${sparkleColor})`,
                    }}
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // If no children, return just the sparkle overlay (legacy support)
  const defaultColor = color || "rgb(255, 215, 0)";
  
  return (
    <div 
      ref={containerRef} 
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L13.5 8.5L18 6L15 12L24 12L15 12L18 18L13.5 15.5L12 24L10.5 15.5L6 18L9 12L0 12L9 12L6 6L10.5 8.5L12 0Z"
              fill={defaultColor}
              style={{
                filter: `drop-shadow(0 0 ${sparkle.size / 2}px ${defaultColor})`,
              }}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Sparkles;

// NoSparkles component - wraps children that should not have sparkles
interface NoSparklesProps {
  children: React.ReactNode;
  className?: string;
}

export const NoSparkles: React.FC<NoSparklesProps> = ({ children, className = "" }) => {
  return (
    <div className={`no-sparkles ${className}`} data-no-sparkles="true">
      {children}
    </div>
  );
};