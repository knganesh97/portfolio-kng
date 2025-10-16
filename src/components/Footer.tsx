import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-4 text-center bg-footer-bg text-footer-text text-sm border-t border-footer-border">
    © {new Date().getFullYear()} Ganesh Kantimahanthi. All rights reserved.
  </footer>
);

export default Footer;