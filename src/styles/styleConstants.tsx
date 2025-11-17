import { Components } from 'react-markdown';

// Layout Constants
export const HEADER_HEIGHT = 80; // Height of the fixed header in pixels
export const SCROLL_DETECTION_OFFSET = 100; // Offset for scroll position detection to account for fixed header

// Define proper component types that match ReactMarkdown's expectations
export const markdownComponents: Components = {
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
      className="text-primary hover:text-primary/80 underline transition-colors"
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
  code: ({ children }) => {
    // Handle tree structure characters in inline code
    const handleTreeStructure = (content: string) => {
      return content
        .replace(/â\s*ââ\s*/g, '├── ')
        .replace(/â\s*ââ\s*/g, '│   ')
        .replace(/â\s*ââ\s*/g, '└── ')
        .replace(/â/g, '│')
        .replace(/ââ/g, '├─')
        .replace(/ââ/g, '└─');
    };

    // Extract and fix text content
    const getTextContent = (node: any): string => {
      if (typeof node === 'string') return handleTreeStructure(node);
      if (Array.isArray(node)) return node.map(getTextContent).join('');
      if (node?.props?.children) return getTextContent(node.props.children);
      return '';
    };

    const content = getTextContent(children);

    return (
      <code className="bg-muted text-foreground px-1 py-0.5 rounded text-sm" style={{ 
        fontFamily: '"SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", Menlo, Consolas, monospace',
        fontFeatureSettings: '"liga" 0'
      }}>
        {content || children}
      </code>
    );
  },
  pre: ({ children }) => {
    // Handle potential tree structure content
    const handleTreeStructure = (content: string) => {
      // Replace common broken UTF-8 sequences with proper box-drawing characters
      return content
        .replace(/â\s*ââ\s*/g, '├── ')
        .replace(/â\s*ââ\s*/g, '│   ')
        .replace(/â\s*ââ\s*/g, '└── ')
        .replace(/â/g, '│')
        .replace(/ââ/g, '├─')
        .replace(/ââ/g, '└─');
    };

    // Extract text content and fix encoding issues
    const getTextContent = (node: any): string => {
      if (typeof node === 'string') return handleTreeStructure(node);
      if (Array.isArray(node)) return node.map(getTextContent).join('');
      if (node?.props?.children) return getTextContent(node.props.children);
      return '';
    };

    const content = getTextContent(children);
    
    return (
      <pre className="bg-muted text-foreground p-4 rounded-lg overflow-x-auto text-sm mb-4" style={{ 
        fontFamily: '"SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", Menlo, Consolas, monospace',
        fontFeatureSettings: '"liga" 0',
        whiteSpace: 'pre',
        wordWrap: 'normal',
        lineHeight: '1.5'
      }}>
        {content || children}
      </pre>
    );
  },
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