"use client";

import React from "react";

interface ShowgirlBackgroundProps {
  mode: "light" | "dark";
}

export const ShowgirlBackground: React.FC<ShowgirlBackgroundProps> = ({
  mode,
}) => {
  // Light mode: sage green (#a8c9a3)
  // Dark mode: rustic brown (#6b3326)
  const backgroundColor = mode === "light" ? "#a8c9a3" : "#6b3326";

  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ backgroundColor }}
    />
  );
};
