import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-7xl mx-auto px-2 md:px-0 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <a href="#hero" className="font-semibold hover:text-primary transition">
          a1Sartaj.in
        </a>

        {/* Center (optional brand) */}
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Sartaj Alam. All rights reserved.
        </p>

        {/* Right (socials) */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/a1sartaj" target="_blank" className="hover:text-primary transition">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/a1sartaj" target="_blank" className="hover:text-primary transition">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}
