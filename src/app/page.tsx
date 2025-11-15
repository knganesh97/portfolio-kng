import RolesList from "@/components/RolesList";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Links from "@/components/Links";
import Sidebar from "@/components/Sidebar";
import ProfileHeader from "@/components/ProfileHeader";
import ResumeDownload from "@/components/ResumeDownload";
import { workExperience } from "@/utils/Constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-6 relative">
      <div className="max-w-6xl mx-auto lg:pr-52"> {/* Add right padding for sidebar space */}
        <ProfileHeader />
        
        <ResumeDownload />

        <div id="projects">
          <Projects />
        </div>
        
        <div id="experience">
          <RolesList roles={workExperience} />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="achievements">
          <Achievements />
        </div>

        <div id="links">
          <Links />
        </div>
      </div>

      {/* Sidebar - only visible on larger screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
    </div>
  );
}
