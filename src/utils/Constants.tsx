import { Components } from 'react-markdown';

// Layout Constants
export const HEADER_HEIGHT = 80; // Height of the fixed header in pixels
export const SCROLL_DETECTION_OFFSET = 100; // Offset for scroll position detection to account for fixed header

export const NAVIGATION_ITEMS = [
  { id: 'projects', label: 'Projects', icon: '🚀' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'links', label: 'Links', icon: '🔗' }
];

export const workExperience = [
  {
    title: "Web Development Engineer (Freelance)",
    companyName: "HumAIn Co. Ltd.",
    startDate: "Dec 2024",
    endDate: "Feb 2025",
    description:
      "Frontend revamp and full-stack development for b-align platform using modern web technologies.",
    contributions: [
      "Revamped the front-end for b-align using React, TypeScript, and Tailwind CSS",
      "Migrated a complex Django codebase, ensuring smooth integration and stability",
      "Built dynamic, scalable components, and backend features in React and Django",
      "Contributed 48 clean pull requests in a 6-member team, delivering on tight deadlines",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Git",
    ],
  },
  {
    title: "Web Development Engineer (Freelance)",
    companyName: "Ashvini Divodasa",
    location: "Hyderabad, India",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    description:
      "Full-stack website development with booking, scheduling, and payment integration features.",
    contributions: [
      "Built a full-stack website using React.js (frontend) and Go (backend), featuring booking, scheduling, and payment integration with automatic refunds",
      "Developed a custom CMS for administrators to manage content seamlessly",
      "Integrated Firebase for storage and frontend hosting, and deployed backend via Render, ensuring smooth and reliable operations",
    ],
    techStack: [
      "React.js",
      "Go",
      "Firebase",
      "Render",
    ],
  },
  {
    title: "Programmer Analyst I",
    companyName: "Amazon India",
    location: "Hyderabad, India",
    startDate: "Apr 2022",
    endDate: "Aug 2023",
    description:
      "Full-stack development and infrastructure optimization for internal utility systems, achieving significant productivity gains.",
    contributions: [
      "Developed new features using Java and Spring Boot for an internal utility website, boosting cross-team productivity by 150%",
      "Debugged client-integrated Java codebases, improving system stability and support turnaround",
      "Conducted code reviews in Java and JSP, ensuring quality, and promoting team-wide knowledge sharing",
      "Built automation tools in Python, increasing team productivity by 50% through simplified workflows",
      "Contributed to $10,000 IMR savings by optimising AWS infrastructure and guiding 60+ clients on API rate limiting for peak traffic",
      "Collaborated with cross-functional teams and project managers to resolve system issues, and ensure smooth, on-time project delivery",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "JSP",
      "Python",
      "AWS",
    ],
  },
  {
    title: "Tech Administrator",
    companyName: "ChessBase India",
    location: "Mumbai, India",
    startDate: "May 2020",
    endDate: "Feb 2022",
    description:
      "Backend development and UI/UX improvements for chess platform, significantly enhancing performance and user engagement.",
    contributions: [
      "Built backend APIs using Go, improving platform performance by 25%",
      "Developed a CMS with Go, enhancing backend efficiency by 400%",
      "Revamped UI/UX with React.js, increasing user engagement by 10%",
    ],
    techStack: [
      "Go",
      "React.js",
    ],
  },
];

export const githubRepositories = [
  {
    owner: "knganesh97",
    repo: "skillzcollab-assignment",
    description: "Assignment project for SkillzCollab",
  },
  {
    owner: "knganesh97",
    repo: "dookan-assignment",
    description: "Assignment project for Dookan",
  },
  {
    owner: "knganesh97",
    repo: "portfolio-kng",
    description: "Personal portfolio website",
  },
  // Add more repositories as needed
];

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