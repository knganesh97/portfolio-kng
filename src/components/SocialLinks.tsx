'use client'
import React from 'react';
import { GitHubIcon, ExternalLinkIcon, LinkedInIcon, EmailIcon } from '@/components/icons';
import { socialLinks as baseSocialLinks } from '@/utils/Constants';

// Define icons for social links
const getIconForLink = (name: string) => {
  switch (name) {
    case 'GitHub':
      return <GitHubIcon className="w-5 h-5" />;
    case 'LinkedIn':
      return <LinkedInIcon className="w-5 h-5" />;
    case 'Email':
      return <EmailIcon className="w-5 h-5" />;
    default:
      return <ExternalLinkIcon className="w-5 h-5" />;
  }
};

// Create social links with icons
const socialLinks = baseSocialLinks.map(link => ({
  ...link,
  icon: getIconForLink(link.name)
}));

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {socialLinks.map((link, index) => (
        <button
          key={index}
          onClick={() => handleLinkClick(link.url)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 hover:bg-card border border-border/30 hover:border-border transition-all duration-300 hover:scale-105 group"
          title={link.description}
        >
          <div className="text-primary group-hover:scale-110 transition-transform">
            {link.icon}
          </div>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {link.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SocialLinks;