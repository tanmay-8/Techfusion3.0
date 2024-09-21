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
            <div className="bg-[#308de4]/40 shadow-lg shadow-[#132e47] backdrop-blur-lg border border-[#308de4] rounded-2xl p-6 z-10">
                <h2 className="text-3xl font-bold font-title">
                    Welcome to Techfusion 2k24
                </h2>
                <p className="mt-6 text-xl font-body max-w-[900px]">
                    Techfusion 2k24 is a tidal wave of technology, innovation,
                    and creativity, hosted by the Student's Association of
                    Information Technology (SAIT), Walchand College of
                    Engineering, Sangli. This year, we're diving into uncharted
                    waters with our oceanic theme, symbolizing the depth and
                    vastness of knowledge and exploration. Get ready to ride the
                    waves of innovation as we embark on a journey beneath the
                    surface to discover new horizons in technology.<br></br>
                    With 4 extraordinary sub-events, Techfusion 2k24 offers a
                    platform for students to plunge into creativity and immerse
                    themselves in challenges that will push them to the very
                    depths of their potential. Dive deep into a sea of
                    possibilities, where every ripple of innovation creates
                    waves of impact.<br></br>
                    Join us as we sail through unbounded opportunities—because
                    in Techfusion 2k24, the ocean of knowledge is limitless, and
                    we're charting a course for greatness!<br></br>
                </p>
            </div>
        </motion.div>
    );
};

export default About;
