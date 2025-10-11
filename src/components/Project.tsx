import React, { useState, useEffect } from "react";
import CardContainer from "@/components/ui/CardContainer";
import ReactMarkdown from "react-markdown";

type ProjectProps = {
  owner: string;
  repo: string;
  className?: string;
};

const Project: React.FC<ProjectProps> = ({ owner, repo, className }) => {
  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/readme`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch README: ${response.statusText}`);
        }

        const data = await response.json();
        const readmeContent = atob(data.content);
        setReadme(readmeContent);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load README");
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [owner, repo]);

  return (
    <CardContainer className={className}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold">{repo}</h2>
          <a
            href={`https://github.com/${owner}/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {loading && (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-current"></div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center py-4">
            {error}
          </div>
        )}

        {!loading && !error && readme && (
          <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown>
              {readme}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default Project;