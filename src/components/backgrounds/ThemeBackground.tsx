"use client";

import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { ShowgirlBackground } from "./ShowgirlBackground";
import { TrafalgarLawBackground } from "./TrafalgarLawBackground";
import Sparkles from "@/components/ui/Sparkles";

/**
 * ThemeBackground component
 * Renders the appropriate background component based on the current theme
 * Each theme can have its own custom background with animations/effects
 */
export const ThemeBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { themeId } = useTheme();

  // Showgirl theme gets sparkles
  if (themeId === "tloas") {
    return (
      <>
        <ShowgirlBackground />
        <Sparkles
          count={300}
          minSize={3}
          maxSize={18}
          brightnessBoost={1.5}
          className="relative"
        >
          {children}
        </Sparkles>
      </>
    );
  }
  
  // Trafalgar Law theme gets jolly roger background
  else if (themeId === "trafalgarlaw") {
    return (
      <>
        <TrafalgarLawBackground />
        {children}
      </>
    );
  }

  // Other themes get simple background
  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-background"
        style={{ transition: "background-color 0.3s ease" }}
      />
      {children}
    </>
  );
};
