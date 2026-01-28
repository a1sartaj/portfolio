// "use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {

    return (
        <div className="rounded-2xl bg-card shadow hover:shadow-lg transition overflow-hidden">

            {/* Image with hover overlay */}
            <div className="relative group overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-55 object-cover group-hover:blur-[1px] group-hover:scale-105 transition"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition cursor-pointer"
                    >
                        View Details
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold">
                    {project.title}
                </h3>

                <p className="mt-3 text-sm text-text-muted h-10 overflow-hidden">
                    {project.shortDescription}
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

                {/* External Links */}
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
    );
}
