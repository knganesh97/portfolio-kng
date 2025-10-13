import React, { useState, useEffect } from "react";
import CardContainer from "@/components/ui/CardContainer";
import ReactMarkdown from "react-markdown";
import { Components } from 'react-markdown';

type ProjectProps = {
  owner: string;
  repo: string;
  className?: string;
};

// Define proper component types that match ReactMarkdown's expectations
const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-foreground mb-6 border-b border-border pb-2">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-medium text-foreground mb-2 mt-4">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-muted-foreground mb-4 leading-relaxed">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-muted-foreground">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground mb-4 bg-muted/30 py-2">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-muted text-foreground px-1 py-0.5 rounded font-mono text-sm">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-muted text-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">
      {children}
    </pre>
  ),
  img: ({ src, alt }) => {
    // Ensure src is a valid string
    if (!src || typeof src !== 'string') return null;

    // GitHub README images are always external, so use regular img
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt || ""}
        className="max-w-full h-auto rounded-lg shadow-sm mb-4"
        loading="lazy"
        onError={(e) => {
          // Hide broken images gracefully
          e.currentTarget.style.display = 'none';
        }}
      />
    );
  },
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border-collapse border border-border">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-4 py-2 text-muted-foreground">
      {children}
    </td>
  ),
  hr: () => <hr className="border-border mb-6 mt-6" />,
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