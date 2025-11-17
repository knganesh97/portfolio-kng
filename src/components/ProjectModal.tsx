'use client'
import React, { useEffect } from "react";
import ProjectReadMe from "@/components/ProjectReadMe";
import Button from "@/components/ui/Button";
import ExternalLink from "@/components/ui/ExternalLink";
import { CloseIcon } from "@/components/icons";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  owner: string;
  repo: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, owner, repo }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background border border-border rounded-lg shadow-xl w-full h-full max-w-4xl max-h-[90vh] flex flex-col animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-foreground">{repo}</h2>
            <ExternalLink
              href={`https://github.com/${owner}/${repo}`}
              className="text-accent hover:text-accent/80 transition-colors"
              ariaLabel={`Open ${repo} on GitHub`}
            />
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="p-2 h-auto hover:bg-destructive/10 hover:text-destructive transition-colors"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          <ProjectReadMe 
            owner={owner}
            repo={repo}
            className=""
            showHeader={false}
            useCardContainer={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;