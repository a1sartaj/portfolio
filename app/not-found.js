"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-[70vh] flex items-center justify-center bg-bg text-text px-4">

            <div className="text-center max-w-xl">

                {/* 404 Heading */}
                <h1 className="text-7xl font-extrabold bg-linear-to-r from-(--color-blue) to-(--color-purple) text-transparent bg-clip-text">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-gray-500">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <Link href="/">
                    <button className="mt-6 px-6 py-3 rounded-xl text-white font-medium bg-linear-to-r from-(--color-blue) to-(--color-purple) hover:opacity-90 transition">
                        Go Back Home
                    </button>
                </Link>

            </div>
        </div>
    );
}