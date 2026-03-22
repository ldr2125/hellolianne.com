import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-16 pb-32 pt-8">
      {/* section header */}
      <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-border">
        <h2 className="text-heading font-bold text-text">Projects</h2>
      </div>

      {/* card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
