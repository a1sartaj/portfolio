import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {

    const [dark, setDark] = useState(false)

    const toggleTheme = () => {
        const newTheme = !dark;
        setDark(newTheme)

        if (newTheme) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

    }


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark')
            setDark(true)
        } else if (!savedTheme) {
            const prefersTheme = window.matchMedia("(prefers-color-scheme : dark)").matches;

            if (prefersTheme) {
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
                setDark(true)
            }
        }
    }, [])

    return (
        <button onClick={toggleTheme} className='p-2 rounded-full bg-card text-text transition hover:scale-105 cursor-pointer ' >
            {dark ? <FaSun /> : <FaMoon />}
        </button>
    )
}

export default ThemeToggle
