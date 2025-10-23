import RolesList from "@/components/RolesList";
import { workExperience } from "@/utils/Constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Ganesh Kantimahanthi
        </h1>
        <p className="text-xl text-foreground opacity-80">
          Software Engineer & Full Stack Developer
        </p>
      </div>

      <RolesList roles={workExperience} />
    </div>
  );
}
