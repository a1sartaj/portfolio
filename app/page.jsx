import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <>
            <header className="sticky top-0 z-50  bg-bg py-2 ">
                <Navbar />
            </header>
            <main className="max-w-7xl mx-auto px-2 md:px-0" >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    )
}