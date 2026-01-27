import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaEnvelope, FaDownload } from "react-icons/fa";



export default function Hero() {
    return (
        <section id='home' className='relative flex flex-col gap-14 md:gap-0 md:flex-row pt-24 md:pt-0 items-center justify-between min-h-[calc(100dvh-60px)]' >

            {/*Left Div  */}
            <div className='max-w-xl'>
                <h1 className="aladin text-6xl lg:text-[80px] font-bold">
                    Hi, I'm <br /> <span className="text-primary">Sartaj Alam</span>
                </h1>

                <p className="mt-8 text-4xl lg:text-5xl text-text-muted">
                    MERN Stack Developer
                </p>

                <p className='max-w-lg mt-8' >
                    I build responsive and scalable web applications using MongoDB, Express, React, and Node.js.
                </p>

                <div className='flex gap-3 mt-8 text-2xl' >
                    <a href="https://linkedin.com/in/a1sartaj" target="_blank" className='hover:text-primary'><FaLinkedin /></a>
                    <a href="https://github.com/a1sartaj" target="_blank" className='hover:text-primary'><FaGithub /></a>
                    <a href="https://youtube.com/a1sartaj" target="_blank" className='hover:text-primary'><FaYoutube /></a>
                    <a href="https://instagram.com/a1sartaj" target="_blank" className='hover:text-primary'><FaInstagram /></a>
                </div>

                <div className='flex gap-2 mt-8'>
                    <a href='#contact'  className='flex items-center gap-1 p-4 lg:px-8  lg:py-6 bg-linear-to-r from-blue  to-purple hover:bg-none hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 ease-in cursor-pointer hover:scale-105' >
                        <FaEnvelope /> CONTACT ME
                    </a>

                    <a href='https://drive.google.com/file/d/1SxpflbSI-k6k_hC4VF9ld8nDoHcGZ44M/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='flex items-center gap-1 p-4 lg:px-8  lg:py-6 rounded-full border transition-all duration-300 ease-in hover:scale-105' >
                        <FaDownload /> DOWNLOAD CV
                    </a>
                </div>
            </div>

            {/* Right div */}
            <div className='flex justify-end items-end' >
                <Image src='/images/hero.png' width={600} height={600} alt='Sartaj Alam'  className="w-70 md:w-100 lg:w-150 h-auto" />
            </div>

        </section>
    );
}