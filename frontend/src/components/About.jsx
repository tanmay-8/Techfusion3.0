import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                
                setIsVisible(entry.intersectionRatio > 0.3);
            },
            {
                root: null,
                threshold: [0.3], 
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);
    return (
        <motion.div
            data-scroll
            data-scroll-section
            ref={aboutRef}
            initial={{ opacity: 0, x: -100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -100,
            }}
            id="about"
            transition={{
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="py-20 w-full flex justify-center items-center text-center text-white px-5 md:px-20 z-5"
        >
            <div className="bg-[#1a3c5b]/40 shadow-lg shadow-[#132e47] backdrop-blur-lg border border-[#2a5075] rounded-2xl p-6 z-10">
                <h2 className="text-3xl font-bold font-title">
                    Welcome to Techfusion 3.0!
                </h2>
                <p className="mt-6 text-xl font-body max-w-[900px]">
                    Techfusion 3.0 is a celebration of technology, innovation,
                    and creativity like never before. Hosted by SAIT, we are
                    thrilled to bring you an electrifying event that will leave
                    you amazed! This year's theme is the cosmos, honoring our
                    nation's achievements in space exploration. Get ready for an
                    intergalactic adventure with 5 incredible subevents,
                    providing a platform for students to showcase their talents.
                    Join us on this stellar journey where the sky is not the
                    limit; it's just the beginning! Shoot for the moon and
                    beyond with Techfusion 2.0!
                </p>
            </div>
        </motion.div>
    );
};

export default About;
