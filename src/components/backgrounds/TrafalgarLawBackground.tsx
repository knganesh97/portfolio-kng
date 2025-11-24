"use client";

import React from "react";
import { HeartPiratesJollyRoger } from "@/components/icons/HeartPiratesJollyRoger";

// Custom hook for responsive icon count
const useResponsiveIconCount = () => {
  const [iconCount, setIconCount] = React.useState(150);

  React.useEffect(() => {
    const updateIconCount = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setIconCount(10); // Mobile phones
      } else if (width < 768) {
        setIconCount(50); // Small tablets
      } else if (width < 1024) {
        setIconCount(100); // Tablets
      } else {
        setIconCount(150); // Laptops/Desktops
      }
    };

    // Set initial count
    updateIconCount();

    // Update on resize
    window.addEventListener('resize', updateIconCount);
    return () => window.removeEventListener('resize', updateIconCount);
  }, []);

  return iconCount;
};

export const TrafalgarLawBackground: React.FC = () => {
  const iconCount = useResponsiveIconCount();

  // Generate random positions and sizes for the jolly rogers with collision detection
  const jollyRogers = React.useMemo(() => {
    const items: Array<{
      id: number;
      top: number;
      left: number;
      size: number;
      opacity: number;
      rotation: number;
    }> = [];
    
    const minDistance = 8; // Minimum distance between icons (in % of viewport)
    const maxAttempts = 100; // Maximum attempts to place an icon
    
    // Helper function to check if two circles overlap
    const hasCollision = (
      x1: number,
      y1: number,
      size1: number,
      x2: number,
      y2: number,
      size2: number
    ): boolean => {
      const radius1 = size1 / 2;
      const radius2 = size2 / 2;
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      // Convert pixel sizes to viewport percentage equivalent (approximate)
      const minSeparation = minDistance + (radius1 + radius2) / 10;
      return distance < minSeparation;
    };
    
    for (let i = 0; i < iconCount; i++) {
      let placed = false;
      let attempts = 0;
      
      while (!placed && attempts < maxAttempts) {
        const newItem = {
          id: i,
          top: Math.random() * 90 + 5, // Keep within 5-95% to avoid edges
          left: Math.random() * 90 + 5,
          size: 40 + Math.random() * 80, // Size between 40 and 120
          opacity: 0.05 + Math.random() * 0.1, // Opacity between 0.05 and 0.15
          rotation: Math.random() * 360,
        };
        
        // Check collision with all existing items
        const collides = items.some((existing) =>
          hasCollision(
            newItem.left,
            newItem.top,
            newItem.size,
            existing.left,
            existing.top,
            existing.size
          )
        );
        
        if (!collides) {
          items.push(newItem);
          placed = true;
        }
        
        attempts++;
      }
    }
    
    return items;
  }, [iconCount]); // Regenerate when icon count changes

  return (
    <>
      {/* Background layer */}
      <div
        className="fixed inset-0 w-full h-full bg-background"
        style={{ 
          transition: "background-color 0.3s ease",
          zIndex: -10
        }}
      />
      {/* Jolly Rogers layer */}
      <div
        className="pointer-events-none fixed inset-0 w-full h-full overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {jollyRogers.map((jr) => (
          <div
            key={jr.id}
            className="absolute"
            style={{
              top: `${jr.top}%`,
              left: `${jr.left}%`,
              opacity: jr.opacity,
              transform: `rotate(${jr.rotation}deg)`,
            }}
          >
            <HeartPiratesJollyRoger size={jr.size} className="foreground" />
          </div>
        ))}
      </div>
    </>
  );
};
