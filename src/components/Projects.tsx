import React from "react";
import { githubRepositories } from "@/utils/Constants";
import CardContainer from "@/components/ui/CardContainer";
import ProjectCard from "@/components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="mb-12">
      <CardContainer>
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 card-container-fg">Projects</h2>
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
            />
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default Projects;