import { skills } from "@/data/skills";

export default function Skills() {
    return (
        <section id="skills" className="flex items-center pt-24 md:pt-0 min-h-[calc(100dvh-60px)]"
        >
            <div className="w-full max-w-7xl mx-auto px-2 md:px-0">

                <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                    Skills
                </p>

                <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                    What I work with
                </h2>

                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {skills.map((group) => (
                        <div
                            key={group.category}
                            className="rounded-2xl bg-card p-6 shadow"
                        >
                            <h3 className="text-xl font-semibold mb-4">
                                {group.category}
                            </h3>

                            <ul className="space-y-2">
                                {group.items.map((skill) => (
                                    <li key={skill} className="text-lg">
                                        • {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
