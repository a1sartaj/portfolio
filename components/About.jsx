import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="flex flex-col gap-14 md:gap-4 md:flex-row pt-24 md:pt-0 items-center justify-between min-h-[calc(100dvh-60px)] ">


            {/* Image */}
            <div className="flex w-full justify-center md:justify-star">
                <Image
                    src="/images/about.png"
                    alt="Sartaj Alam"
                    width={420}
                    height={420}
                    className="rounded-2xl shadow-lg object-cover"
                />
            </div>

            {/* Content */}
            <div className="w-full " >
                <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                    About Me
                </p>

                <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                    Who am I?
                </h2>

                <p className="mt-6 text-lg">
                    I'm a MERN Stack Developer focused on building responsive and
                    scalable web applications using modern web technologies.
                </p>

                <p className="mt-4 text-lg">
                    I work with React, Node.js, Express, and MongoDB, and I enjoy
                    writing clean, maintainable, and performance-oriented code.
                </p>

                <ul className="mt-6 space-y-2 text-lg">
                    <li>• MERN Stack Developer</li>
                    <li>• BCA (IGNOU)</li>
                    <li>• Looking for MERN Stack opportunities</li>
                </ul>
            </div>


        </section>
    );
}
