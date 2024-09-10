import React, { useRef, useEffect, useState } from "react";
import Timer from "./ui/Timer";
import ShinyButton from "./ui/ShinyButton";
import { motion } from "framer-motion";

const Hero = () => {
    const heroRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Check if the midpoint of the component is in view
                setIsVisible(entry.intersectionRatio > 0.4);
            },
            {
                root: null, // relative to the viewport
                threshold: [0.4], // trigger when 50% of the component is in view
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={heroRef}
            data-scroll
            data-scroll-section
            data-scroll-speed="-.3"
            className="h-screen flex flex-col items-center justify-center space-y-16"
            initial={{ opacity: 0, y: -100, scale: 0.9 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : -50,
                scale: isVisible ? 1 : 0.95,
            }}
            transition={{
                duration: 0.8, // smoother and slightly faster
                ease: "easeInOut", // easing for smooth in-out effect
            }}
        >
            <div>
                <h1 className="text-4xl md:text-8xl text-center text-white font-extrabold font-title mb-1">
                    Techfusion&nbsp; 3.0
                </h1>
                <h2 className="text-lg md:text-2xl text-center text-white font-medium font-title">
                    Students' Association of Information Technology WCE, Sangli
                </h2>
            </div>
            <Timer />
            <ShinyButton />
        </motion.div>
    );
};

export default Hero;
