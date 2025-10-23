'use client'
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-5 text-center text-sm border-t-2 shadow-lg footer-bg">
      © {currentYear} Ganesh Kantimahanthi. All rights reserved.
    </footer>
  );
};

export default Footer;