import React, { useState, useEffect } from "react";
import CardContainer from "@/components/ui/CardContainer";
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "@/utils/Constants";
import ExternalLink from "@/components/ui/ExternalLink";

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
        setError(""); // Clear previous errors
        
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
        
        // Decode base64 content
        let readmeContent = "";
        if (data.encoding === "base64" && data.content) {
          try {
            readmeContent = atob(data.content.replace(/\n/g, ""));
          } catch (decodeError) {
            console.error("Error decoding base64 content:", decodeError);
            readmeContent = data.content;
          }
        } else {
          readmeContent = data.content || "";
        }
        
        setReadme(readmeContent);
      } catch (err) {
        console.error("Error fetching README:", err);
        setError(
          "Sorry, we couldn't load the project README at this time. Please try again later."
        );
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
            <h2 className="text-2xl font-bold card-container-fg">{repo}</h2>
            <ExternalLink
              href={`https://github.com/${owner}/${repo}`}
              className="text-accent hover:text-accent/80 transition-colors"
              ariaLabel={`Open ${repo} on GitHub`}
            />
          </div>

          {loading && (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
            </div>
          )}

          {error && (
            <div className="text-destructive text-center py-4">
              {error}
            </div>
          )}

          {!loading && !error && readme && (
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown components={markdownComponents}>
                {readme}
              </ReactMarkdown>
            </div>
          )}
        </div>
    </CardContainer>
  );
};

export default Project;