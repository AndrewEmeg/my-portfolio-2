"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <div className="absolute h-screen w-screenbg-gradient-to-r from-cyan-500 to-blue-500">
            <div>here&apos;s to the vertical menu</div>
            <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-10"
                >
                    <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </span>
        </div>
    ) : (
        <div className="bg-gradient-to-br from-brand-200 to-teal-300 text-white flex justify-between items-center p-12 font-jet font-semibold ">
            <Link
                href="/"
                className="text-3xl font-bold items-center tracking-tighter"
            >
                Desdev
            </Link>
            <nav className="hidden sm:flex gap-8 text-2xl font-bold items-center tracking-tighter">
                <Link href="/projects" className="pseudo">
                    Projects
                </Link>
                {/* <Link href="/blog" className="pseudo">
                    Blog
                </Link> */}
                <Link
                    target="_blank"
                    href="https://flowcv.com/resume/4rnvb9ae2l"
                    className="pseudo"
                >
                    Resume
                </Link>
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/andrewemeghebo"
                    className="pseudo"
                >
                    LinkedIn
                </Link>

                {/* <span onClick={}> */}
            </nav>
            <span
                onClick={() => setIsOpen(!isOpen)}
                className="block sm:hidden text-white cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        </div>
    );
};

export default Header;
