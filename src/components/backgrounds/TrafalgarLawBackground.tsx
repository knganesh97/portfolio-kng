"use client";

import React from "react";
import { HeartPiratesJollyRoger } from "@/components/icons/HeartPiratesJollyRoger";

export const TrafalgarLawBackground: React.FC = () => {
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
    const count = 150; // Number of jolly roger icons
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
    
    for (let i = 0; i < count; i++) {
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
  }, []);

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
            <HeartPiratesJollyRoger size={jr.size} />
          </div>
        ))}
      </div>
    </>
  );
};
