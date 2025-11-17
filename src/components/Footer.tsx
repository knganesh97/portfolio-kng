import React from "react";
import SocialLinks from '@/components/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 border-t-2 shadow-lg footer-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Links */}
        <SocialLinks className="mb-6" />
        
        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} Ganesh Kantimahanthi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;