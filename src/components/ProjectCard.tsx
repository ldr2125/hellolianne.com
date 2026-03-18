import Image from "next/image";
import { Project } from "@/data/projects";

const statusConfig = {
  live: { label: "Live" },
  wip: { label: "In progress" },
  experiment: { label: "Experiment" },
} as const;

function PreviewPlaceholder({ url }: { url: string }) {
  const domain = url.replace(/^https?:\/\//, "");
  return (
    <div className="w-full h-full bg-surface flex items-end p-5 overflow-hidden">
      <span className="font-mono text-[clamp(1.1rem,4vw,1.5rem)] text-border leading-none tracking-tight select-none truncate">
        {domain}
      </span>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const status = project.status ? statusConfig[project.status] : null;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-border hover:border-text transition-all duration-300 bg-bg overflow-hidden"
    >
      {/* preview */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <PreviewPlaceholder url={project.url} />
        )}
        {/* overlay arrow */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-mono text-xs text-text bg-bg border border-border px-2 py-1">
            ↗ visit
          </span>
        </div>
      </div>

      {/* card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-text leading-tight group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          {status && (
            <span className="font-mono text-[10px] text-muted border border-border px-2 py-0.5 shrink-0 mt-0.5">
              {status.label}
            </span>
          )}
        </div>

        <p className="text-sm text-muted leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-muted border border-border px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
