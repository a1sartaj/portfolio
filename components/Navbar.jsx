"use client"

import { FaPaperPlane } from "react-icons/fa";
import HamBurgerMenu from "./HamBurgerMenu";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {

    const pathname = usePathname();

    const isHome = pathname === "/";
    const isProjectDetail = pathname.startsWith("/projects/");

    return (
        <nav className="flex items-center justify-between max-w-7xl  mx-auto px-2 md:px-0">
            <a href="#home" className={`aladin text-[28px] md:text-3xl font-semibold bg-linear-to-r from-blue to-purple bg-clip-text text-transparent`}>a1Sartaj.in</a>


            <ul className="hidden md:flex gap-1 lg:gap-10 text-lg transition-all duration-300 ease-in"  >

                {isHome && (
                    <>
                        <a className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="#home">Home</a>
                        <a className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="#about">About</a>
                        <a className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="#skills">Skills</a>
                        <a className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="#projects">Projects</a>
                        <a className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="#contact">Contact</a>
                    </>
                )}

                {!isHome && !isProjectDetail && (
                    <>
                        <Link className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="/">Home</Link>
                        <Link className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="/projects">Projects</Link>
                        <Link className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="/#contact">Contact</Link>
                    </>
                )}

                {isProjectDetail && (
                    <>
                        <Link className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="/projects">← Back to Projects</Link>
                        <Link className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="/">Home</Link>
                        <Link className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" href="/#contact">Contact</Link>
                    </>
                )}
            </ul>

            {/* HamburgerMenu */}
            <HamBurgerMenu />

            <div className="flex items-center   gap-2">
                <ThemeToggle />

                {/* hover:bg-none hover:bg-white */}
                <button className={`hidden md:flex gap-2 items-center px-4 py-2 text-white text-lg rounded-full bg-linear-to-r from-blue  to-purple hover:bg-none hover:bg-white hover:text-black transition-all duration-300 ease-in cursor-pointer hover:scale-105 `}>Hire me <FaPaperPlane /></button>

            </div>
        </nav>
    );
}
