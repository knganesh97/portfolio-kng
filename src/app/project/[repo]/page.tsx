'use client'
import React from "react";
import Project from "@/components/Project";
import { githubRepositories } from "@/utils/Constants";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    repo: string;
  }>;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const resolvedParams = React.use(params);
  const { repo } = resolvedParams;
  
  // Find the repository in the constants to verify it exists
  const repository = githubRepositories.find(r => r.repo === repo);
  
  if (!repository) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Project 
        owner={repository.owner}
        repo={repository.repo}
        className="p-6"
      />
    </div>
  );
};

export default ProjectPage;