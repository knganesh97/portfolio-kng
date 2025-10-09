import RolesList from "@/components/RolesList";
import { workExperience } from "@/utils/Constants";

export default function Home() {
  return (
    <div className="p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Ganesh Kantimahanthi
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Software Engineer & Full Stack Developer
        </p>
      </div>

      <RolesList roles={workExperience} />
    </div>
  );
}
