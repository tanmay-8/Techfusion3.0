"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden font-title mt-6"
        >
            <motion.div
                className="text-center z-10 px-4 sm:px-6 lg:px-8"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 },
                }}
            >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold md:font-extrabold text-white mb-4">
                    Techfusion 2K24
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-100 font-light mb-8">
                    Students' Association of Information Technology WCE, Sangli
                </h2>
                <Timer />
                <ShinyButton />
            </motion.div>
        </motion.div>
    );
};

const Timer = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const target = new Date(now.getFullYear(), 9, 5); // First day of next month
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const m = Math.floor((difference / 1000 / 60) % 60);
            const s = Math.floor((difference / 1000) % 60);

            setTime({ days: d, hours: h, minutes: m, seconds: s });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center space-x-4 mb-8">
            {Object.entries(time).map(([key, value]) => (
                <div key={key} className="flex flex-col items-center">
                    <div className="text-4xl sm:text-5xl font-bold text-white bg-[#308de4]/40 bg-opacity-50 rounded-lg p-3 backdrop-blur-sm">
                        00
                    </div>
                    <div className="text-blue-100 text-sm mt-2 capitalize">
                        {key}
                    </div>
                </div>
            ))}
        </div>
    );
};

const ShinyButton = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#308de4]/40 to-[#308de4]/40  rounded-full overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:shadow-[#308de4]/30 focus:outline-none focus:ring-2 focus:ring-[#2792f6] focus:ring-opacity-50 mt-4"
            onClick={() => {
                document
                    .getElementById("registerForm")
                    .scrollIntoView({ behavior: "smooth" });
            }}
        >
            <motion.span
                className="relative z-10"
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
            >
                Register Now
            </motion.span>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
                initial={{ x: "100%", opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.4 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </motion.button>
    );
};

export default Hero;
