import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Github,
    Youtube,
} from "lucide-react";
import Logo from "@/assets/sait.png";
import Image from "next/image";
import BottomImg from "@/assets/bottom.png";

const Footer = () => {
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    const socialLinks = [
        {
            icon: <Youtube size={20} />,
            href: "https://www.youtube.com/channel/UC25efYQvKGZXJSmHXLUB1fA",
            label: "Twitter",
        },
        {
            icon: <Instagram size={20} />,
            href: "https://www.instagram.com/wce_sait/?hl=en",
            label: "Instagram",
        },
        {
            icon: <Linkedin size={20} />,
            href: "https://www.linkedin.com/in/wcesait/",
            label: "LinkedIn",
        },
    ];

    const footerLinks = [
        { text: "Home", href: "#home" },
        { text: "About Us", href: "#about" },
        { text: "Events", href: "#events" },
        { text: "Register", href: "#registerForm" },
    ];

    return (
        <motion.footer
            ref={footerRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#1a3c5b]/30 shadow-lg shadow-[#132e47]/50 backdrop-blur-xl border-none rounded-2xl text-gray-300 py-12 mt-32 font-body m-4 overflow-hidden z-50 mb-40"
        >
            <div className="container overflow-hidden mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-center md:items-start text-center md:text-left md:justify-between overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            x: isVisible ? 0 : -50,
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-cyan-700 mb-4">
                            <Image
                                src={Logo}
                                className="mx-auto md:mx-0"
                                alt="SAIT"
                                width={50}
                                height={50}
                            />
                            <span>SAIT</span>
                        </h2>
                        <p className="mb-4">
                            Beyond The Limitations, Next To Perfection
                        </p>
                        <div className="flex space-x-4 w-full justify-center md:justify-normal">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    aria-label={link.label}
                                    className="text-gray-400 hover:text-cyan-700 transition-colors duration-300"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            x: isVisible ? 0 : -50,
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold text-cyan-700 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link, index) => (
                                <motion.li key={index} whileHover={{ x: 5 }}>
                                    <button
                                        className="hover:text-cyan-700 transition-colors duration-300"
                                        onClick={() => {
                                            document
                                                .querySelector(link.href)
                                                .scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }}
                                    >
                                        {link.text}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: isVisible ? 1 : 0,
                            x: isVisible ? 0 : 50,
                        }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className="text-xl font-semibold text-cyan-700 mb-4">
                            Contact Us
                        </h3>
                        <form className="flex flex-col sm:flex-row">
                            <input
                                id="contactFormEmail"
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-md md:rounded-r-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-700 mb-2 sm:mb-0"
                                required
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-cyan-700 text-white px-4 py-2 rounded-md md:rounded-l-md rounded-r-md hover:bg-cyan-600 transition-colors duration-300 "
                                type="submit"
                                onClick={() => {
                                    const email =
                                        document.getElementById(
                                            "contactFormEmail"
                                        ).value;
                                    window.open(
                                        `mailto:wce.sait@walchandsangli.ac.in?subject=Query&body=Email: ${email}`
                                    );
                                }}
                            >
                                Send
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        x: isVisible ? 0 : -50,
                    }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-8 pt-8 border-t border-gray-800 text-center"
                >
                    <p>
                        &copy; {new Date().getFullYear()} SAIT. All rights
                        reserved.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
