import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="min-h-[calc(100dvh-60px)] flex items-center pt-24 md:pt-0 ">
            <div className="w-full max-w-7xl mx-auto px-2 md:px-0">

                <p className="uppercase tracking-widest text-sm text-primary font-semibold">
                    Contact
                </p>

                <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                    Get in touch
                </h2>

                <p className="mt-6 max-w-xl text-lg">
                    I'm currently open to new opportunities and collaborations.
                    Feel free to reach out if you have a project or role in mind.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-2">

                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <a
                            href="mailto:sartaj9806@gmail.com"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-card shadow hover:shadow-lg transition"
                        >
                            <FaEnvelope className="text-2xl text-primary" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-sm text-text-muted">
                                    sartaj9806@gmail.com
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/a1sartaj"
                            target="_blank"
                            className="flex items-center gap-4 p-6 rounded-2xl bg-card shadow hover:shadow-lg transition"
                        >
                            <FaLinkedin className="text-2xl text-primary" />
                            <div>
                                <p className="font-semibold">LinkedIn</p>
                                <p className="text-sm text-text-muted">
                                    Connect with me
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4">
                        <input type="text" placeholder="Your name" className="w-full p-4 rounded-lg text-text placeholder:text-text/40 bg-card border outline-none" />
                        <input type="email" placeholder="Your email" className="w-full p-4 rounded-lg  text-text placeholder:text-text/40 bg-card border outline-none" />
                        <textarea rows="4" placeholder="Your message" className="w-full p-4 rounded-lg  text-text placeholder:text-text/40 bg-card border outline-none" />

                        <button type="submit" className="px-6 py-3 rounded-full bg-primary  text-white hover:opacity-90 transition">
                            Send message
                        </button>
                    </form>

                </div>

            </div>
        </section>
    );
}
