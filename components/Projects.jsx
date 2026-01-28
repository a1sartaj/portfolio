import Image from "next/image";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="min-h-[calc(100dvh-60px)] flex items-center pt-24 md:pt-0 ">

      <div className="w-full max-w-7xl mx-auto px-2 md:px-0">

        <p className="uppercase tracking-widest text-sm text-primary font-semibold">
          Projects
        </p>

        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
          Things I've Built
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 rounded-full border hover:bg-card transition"
          >
            View all projects →
          </Link>
        </div>

      </div>
    </section>
  );
}
