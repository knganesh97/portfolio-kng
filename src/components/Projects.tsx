'use client'
import React, { useState } from "react";
import { githubRepositories } from "@/utils/Constants";
import CardContainer from "@/components/ui/CardContainer";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import GitHubIcon from "@/components/icons/GitHubIcon";

const Projects: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    owner: string;
    repo: string;
  } | null>(null);

  const handleViewDetails = (owner: string, repo: string) => {
    setSelectedProject({ owner, repo });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="mb-12">
      <CardContainer>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <GitHubIcon size={36} className="card-container-fg" />
            <h2 className="text-4xl font-bold card-container-fg">Projects</h2>
          </div>
          <p className="text-lg card-container-fg opacity-80">
            Explore my GitHub repositories and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {githubRepositories.map((repository, index) => (
            <ProjectCard
              key={index}
              repo={repository.repo}
              owner={repository.owner}
              description={repository.description}
              onViewDetails={() => handleViewDetails(repository.owner, repository.repo)}
            />
          ))}
        </div>
      </CardContainer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          open={modalOpen}
          onClose={closeModal}
          owner={selectedProject.owner}
          repo={selectedProject.repo}
        />
      )}
    </div>
  );
};

export default Projects;