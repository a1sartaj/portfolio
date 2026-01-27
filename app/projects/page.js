import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <section className="py-24">
            {/* <div className="max-w-7xl mx-auto px-2 md:px-0">

                <h1 className="text-4xl font-bold mb-12">All Projects</h1>

                <div className="grid gap-8 md:grid-cols-3">
                    {projects.map(project => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="rounded-2xl bg-card shadow hover:shadow-lg transition overflow-hidden"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={250}
                                className="w-full h-55 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-text-muted">
                                    {project.shortDesc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div> */}

            Hello All Project Page
        </section>
    );
}
