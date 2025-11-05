'use client'
import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ExternalLink from "@/components/ui/ExternalLink";
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
        <div className="flex items-center gap-2 w-full">
          <h3 className="text-xl font-semibold text-card-foreground truncate flex-1">{repo}</h3>
          <ExternalLink
            href={`https://github.com/${owner}/${repo}`}
            className="text-secondary hover:text-secondary/80 transition-colors flex-shrink-0"
            iconClassName="w-5 h-5"
            ariaLabel={`Open ${repo} on GitHub`}
          />
        </div>
      }
      body={
        <div className="space-y-3 flex flex-col h-full">
          <p className="text-card-foreground opacity-90 flex-grow">
            {description}
          </p>
          <div className="text-sm text-card-foreground opacity-80 flex-shrink-0">
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
    />
  );
};

export default ProjectCard;
