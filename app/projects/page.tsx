import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: "Projects — Damola Oyeyemi",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-2">
          A selection of apps I’ve built and shipped.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
