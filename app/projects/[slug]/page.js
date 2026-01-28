import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section className="pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-2 md:px-0 space-y-20">

        {/* ================= HERO ================= */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            {project.title}
          </h1>

          {project.shortDescription && (
            <p className="text-lg text-text-muted">
              {project.shortDescription}
            </p>
          )}

          {(project.github || project.live) && (
            <div className="flex gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 underline"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          )}
        </div>

        {/* ================= IMAGE ================= */}
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={500}
            className="rounded-2xl"
          />
        )}

        {/* ================= PROBLEM ================= */}
        {project.problem && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              What Problem Does It Solve?
            </h2>
            <p className="text-text-muted">
              {project.problem}
            </p>
          </section>
        )}

        {/* ================= SOLUTION ================= */}
        {project.description && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Solution Overview
            </h2>
            <p className="text-text-muted">
              {project.description}
            </p>
          </section>
        )}

        {/* ================= FEATURES ================= */}
        {project.features?.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Key Features
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* ================= TECH STACK ================= */}
        {project.tech?.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm bg-gray-200/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* ================= DEPLOYMENT ================= */}
        {project.deployment && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Deployment
            </h2>
            <ul className="space-y-1 text-text-muted">
              {project.deployment.frontend && (
                <li>Frontend: {project.deployment.frontend}</li>
              )}
              {project.deployment.backend && (
                <li>Backend: {project.deployment.backend}</li>
              )}
              {project.deployment.database && (
                <li>Database: {project.deployment.database}</li>
              )}
            </ul>
          </section>
        )}

        {/* ================= FUTURE ================= */}
        {project.futureImprovements?.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Future Improvements
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              {project.futureImprovements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

      </div>
    </section>
  );
}
