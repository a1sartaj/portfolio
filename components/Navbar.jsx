"use client"

import { FaPaperPlane } from "react-icons/fa";
import HamBurgerMenu from "./HamBurgerMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

    return (
        <nav className="flex items-center justify-between max-w-7xl  mx-auto px-2 md:px-0">
            <a href="#home" className={`aladin text-[28px] md:text-3xl font-semibold bg-linear-to-r from-blue to-purple bg-clip-text text-transparent`}>a1Sartaj.in</a>


            <ul className="hidden md:flex gap-1 lg:gap-10 text-lg transition-all duration-300 ease-in"  >
                {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
                    <li
                        key={item}
                        className="px-3 py-1 rounded-full hover:bg-gray-200/40  transition" >
                        <a href={`#${item.toLowerCase()}`}>{item}</a></li>

                ))}
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
