"use client";

import React from "react";

export const ShowgirlBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 -z-10 w-full h-full bg-background"
      style={{ transition: "background-color 0.3s ease" }}
    />
  );
};
