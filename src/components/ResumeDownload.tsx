'use client';

import Button from "@/components/ui/Button";
import { DownloadFileIcon } from "@/components/icons";

export default function ResumeDownload() {
  return (
    <div className="mb-16 flex justify-center">
      <a 
        href="/resume.pdf"
        download="resume.pdf"
        className="inline-block"
      >
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
        >
          <DownloadFileIcon />
          Download Resume
        </Button>
      </a>
    </div>
  );
}