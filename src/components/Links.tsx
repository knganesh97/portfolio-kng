'use client'
import React from 'react';
import Card from '@/components/ui/Card';
import { GitHubIcon, ExternalLinkIcon } from '@/components/icons';
import { socialLinks as baseSocialLinks } from '@/utils/Constants';

// Define icons for social links
const getIconForLink = (name: string) => {
  switch (name) {
    case 'GitHub':
      return <GitHubIcon className="w-6 h-6" />;
    case 'LinkedIn':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'Email':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      );
    case 'Portfolio':
      return <ExternalLinkIcon className="w-6 h-6" />;
    case 'Chess Profile':
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.8 5.2L18.4 3.8l-1.4 1.4L19.8 5.2z M13 1h-2v3h2V1z M4.2 5.2L6 3.4L4.6 2L2.8 3.8L4.2 5.2z M22 11v2h-3v-2H22z M5 11v2H2v-2H5z M10 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2S10 13.1 10 12z M12 18c-2.8 0-5-2.2-5-5h-1c0 3.3 2.7 6 6 6s6-2.7 6-6h-1C17 15.8 14.8 18 12 18z"/>
        </svg>
      );
    default:
      return <ExternalLinkIcon className="w-6 h-6" />;
  }
};

// Create social links with icons
const socialLinks = baseSocialLinks.map(link => ({
  ...link,
  icon: getIconForLink(link.name)
}));

const categoryColors = {
  Professional: "bg-blue-100 text-blue-800 border-blue-200",
  Social: "bg-purple-100 text-purple-800 border-purple-200", 
  Portfolio: "bg-green-100 text-green-800 border-green-200",
  Contact: "bg-orange-100 text-orange-800 border-orange-200"
};

const Links: React.FC = () => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <span className="text-4xl">🔗</span>
        Links
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialLinks.map((link, index) => (
          <Card 
            key={index}
            className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            body={
              <div 
                className="p-6 h-full flex flex-col"
                onClick={() => handleLinkClick(link.url)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleLinkClick(link.url);
                  }
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-primary flex-shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {link.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full border ${categoryColors[link.category]}`}>
                        {link.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {link.description}
                </p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground font-mono truncate">
                    {link.url.replace(/^https?:\/\//, '')}
                  </span>
                  <ExternalLinkIcon className="w-4 h-4 text-primary opacity-60" />
                </div>
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Links;