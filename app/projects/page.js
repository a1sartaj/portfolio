// "use client"

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
    return (
        <section className="min-h-[calc(100dvh-60px)] pt-24">
            <div className="max-w-7xl mx-auto px-2 md:px-0">

                <h1 className="text-4xl font-bold mb-12">All Projects</h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>


            </div>
        </section>
    );
}
