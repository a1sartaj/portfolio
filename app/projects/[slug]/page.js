
import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <section className="py-24">
            <div className="max-w-4xl mx-auto px-2">

                <h1 className="text-4xl font-bold">
                    {project.title}
                </h1>

                <p className="mt-6 text-lg">
                    {project.description}
                </p>

                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="rounded-2xl my-12"
                />

                <h2 className="text-2xl font-semibold mt-12">Challenges</h2>
                {/* <ul className="mt-4 space-y-2 list-disc list-inside">
                    {project.challenges.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul> */}

                <h2 className="text-2xl font-semibold mt-12">What I Learned</h2>
                {/* <ul className="mt-4 space-y-2 list-disc list-inside">
                    {project.learnings.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul> */}

                <div className="flex gap-4 mt-12">
                    <a href={project.github} target="_blank" className="underline">
                        GitHub
                    </a>
                    <a href={project.live} target="_blank" className="underline">
                        Live Demo
                    </a>
                </div>

            </div>
        </section>
    );
}
