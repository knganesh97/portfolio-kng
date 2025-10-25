import RolesList from "@/components/RolesList";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import { workExperience } from "@/utils/Constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-6 relative">
      <div className="max-w-6xl mx-auto lg:pr-52"> {/* Add right padding for sidebar space */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Ganesh Kantimahanthi
          </h1>
          <p className="text-xl text-foreground opacity-80">
            Software Engineer & Full Stack Developer
          </p>
        </div>

        <div id="projects">
          <Projects />
        </div>
        
        <div id="experience">
          <RolesList roles={workExperience} />
        </div>
      </div>

      {/* Sidebar - only visible on larger screens */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
    </div>
  );
}
