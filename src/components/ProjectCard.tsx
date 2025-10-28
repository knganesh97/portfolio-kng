'use client'
import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  repo: string;
  owner: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo, owner, description }) => {
  const router = useRouter();

  const handleViewRepo = () => {
    router.push(`/project/${repo}`);
  };

  return (
    <Card
      header={
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-card-foreground">{repo}</h3>
          <a
            href={`https://github.com/${owner}/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      }
      body={
        <div className="space-y-3">
          <p className="text-card-foreground opacity-90">
            {description}
          </p>
          <div className="text-sm text-card-foreground opacity-80">
            <span className="font-medium">Owner:</span> {owner}
          </div>
        </div>
      }
      footer={
        <Button
          variant="primary"
          className="w-full"
          onClick={handleViewRepo}
        >
          View Details
        </Button>
      }
      className="h-full"
    />
  );
};

export default ProjectCard;
