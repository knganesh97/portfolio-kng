'use client'
import React from "react";
import { githubRepositories } from "@/utils/Constants";
import CardContainer from "@/components/ui/CardContainer";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const ProjectsPage: React.FC = () => {
  const router = useRouter();

  const handleViewRepo = (repoName: string) => {
    router.push(`/project/${repoName}`);
  };

  return (
    <div className="p-6">
      <CardContainer>
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore my GitHub repositories and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {githubRepositories.map((repository, index) => (
            <Card
              key={index}
              header={
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold">{repository.repo}</h2>
                  <a
                    href={`https://github.com/${repository.owner}/${repository.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 transition-colors"
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
                  <p className="text-gray-600 dark:text-gray-300">
                    {repository.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Owner:</span> {repository.owner}
                  </div>
                </div>
              }
              footer={
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => handleViewRepo(repository.repo)}
                >
                  View Details
                </Button>
              }
              className="h-full"
            />
          ))}
        </div>
      </CardContainer>
    </div>
  );
};

export default ProjectsPage;