import Image from "next/image";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

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
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl bg-card shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-55 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-text-muted">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-gray-200/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm hover:text-primary"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm hover:text-primary"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#home"
            className="inline-block px-6 py-3 rounded-full border hover:bg-card transition"
          >
            View all projects →
          </a>
        </div>

      </div>
    </section>
  );
}
