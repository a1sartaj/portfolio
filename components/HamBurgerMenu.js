"use client";

import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const HamBurgerMenu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) {
            window.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="relative md:hidden" ref={menuRef}>
            {/* Hamburger Button */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="text-xl p-2"
            >
                <FaBars />
            </button>

            {/* Mobile Menu */}
            {open && (
                <ul className="absolute left-1/2 -translate-x-1/2  mt-4 w-64 bg-white text-black p-6 rounded-xl shadow-lg flex flex-col gap-4">

                    {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
                        <li key={item} >
                            <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
                        </li>

                    ))}

                    <button
                        onClick={() => setOpen(false)}
                        className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full bg-linear-to-r from-blue to-purple text-white transition hover:bg-none hover:bg-white hover:text-black " >
                        Hire me
                    </button>
                </ul>
            )}

            {/* <button
                className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full bg-linear-to-r from-blue to-purple text-white transition hover:bg-none hover:bg-white hover:text-black " >
                Hire me
            </button> */}

        </div>
    );
};

export default HamBurgerMenu;
