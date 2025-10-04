'use client'
import React from "react";
import Link from "@/components/ui/Link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur-md shadow-sm flex items-center justify-between px-10 py-3 transition-shadow border-b
      "
      style={{
        background: "var(--header-bg)",
        borderColor: "var(--header-border)",
      }}
    >
    <Link href="/" className="flex items-center group" style={{ textDecoration: "none" }}>
      <Image
        src="/favicon.ico"
        alt="SkillzCollab Logo"
        width={44}
        height={44}
        className="rounded-full mr-4 shadow border-2"
        style={{
          borderColor: "var(--header-logo-border)",
        }}
        priority // This ensures the logo loads immediately
      />
    <span
        className="text-2xl font-bold tracking-wide font-sans"
        style={{
            color: "var(--header-title)",
            fontFamily: "var(--font-geist-sans), sans-serif",
        }}
    >
        Full Stack Developer
    </span>
    </Link>
      <nav className="flex gap-6">
        <Link
          href="/projects"
          className="
            font-semibold text-base px-4 py-2 rounded-md transition-colors focus:outline-none
            hidden sm:inline-block
          "
          style={{
            color: "var(--header-link)",
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.background = "var(--header-link-bg-hover)";
            (e.target as HTMLElement).style.color = "var(--header-link-hover)";
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.background = "transparent";
            (e.target as HTMLElement).style.color = "var(--header-link)";
          }}
        >
          My Projects
        </Link>
      </nav>
    </header>
  );
};

export default Header;