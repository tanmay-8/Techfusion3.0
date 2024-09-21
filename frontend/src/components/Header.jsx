import Link from "next/link";
import Logo from "@/assets/sait.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

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
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => {
                                document
                                    .getElementById("registerForm")
                                    .scrollIntoView({ behavior: "smooth" });
                            }}
                            className="border-cyan-800 hover:scale-105 transition-all border rounded-full text-white px-8 py-2 "
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
