import Link from "next/link";
import type { Project } from "@/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowIcon } from "@/components/ui/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col justify-between hover:border-fg-subtle hover:-translate-y-1 transition-all duration-300">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <Badge>{project.category}</Badge>
            <ArrowIcon className="h-4 w-4 -rotate-45 text-fg-subtle transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
          </div>
          <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-fg-muted">
            {project.summary}
          </p>
        </div>
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-4">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-tabular text-lg font-semibold text-fg">{metric.value}</p>
                <p className="text-xs text-fg-subtle">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </Card>
    </Link>
  );
}
