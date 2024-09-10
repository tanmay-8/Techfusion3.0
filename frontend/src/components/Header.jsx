import Link from "next/link";
import Logo from "@/assets/sait.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" text-gray-100 py-3 fixed top-0 z-20 backdrop-blur-md mx-auto w-[98%]">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-cyan-400"
                        >
                            <Image src={Logo} width={60}></Image>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <Link
                            href="/"
                            className="hover:scale-105 transition-all"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="hover:scale-105 transition-all"
                        >
                            About
                        </Link>
                        <Link
                            href="/events"
                            className="hover:scale-105 transition-all"
                        >
                            Events
                        </Link>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/register"
                            className="border-cyan-800 hover:scale-105 transition-all border rounded-full text-white px-8 py-2 "
                        >
                            Register
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-100 hover:scale-105 focus:outline-none"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="container mx-auto px-4 py-2 space-y-2">
                        <Link
                            href="/"
                            className="block hover:scale-105 transition-all"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block hover:scale-105 transition-all"
                        >
                            About
                        </Link>
                        <Link
                            href="/events"
                            className="block hover:scale-105 transition-all"
                        >
                            Events
                        </Link>
                        <Link
                            href="/register"
                            className="block bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-all"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
