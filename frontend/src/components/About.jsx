import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import TechfusionLogo from "../assets/techfusion.png";
import Image from "next/image";
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
            className="py-20 w-full flex justify-center items-center text-left text-white px-5 md:px-20 z-5"
        >
            <div className="bg-[#308de4]/40 shadow-lg shadow-[#132e47] backdrop-blur-lg border border-[#308de4] rounded-2xl p-6 z-10">
                <Image src={TechfusionLogo} alt="About" width={150} height={150} className="mx-auto rounded-full mb-6" />
                <h2 className="text-2xl font-bold font-title text-center">
                    Welcome to Techfusion 2k24
                </h2>
                <p className="mt-4 font-body text-center max-w-[900px]">
                    Techfusion 2k24, hosted by the Student's Association of
                    Information Technology (SAIT), Walchand College of
                    Engineering, Sangli, is a wave of technology, innovation,
                    and creativity. This year's oceanic theme reflects the
                    vastness of knowledge and exploration, as we dive deep into
                    new horizons in technology.
                    <br></br>
                    With 4 dynamic sub-events, Techfusion 2k24 offers students
                    the chance to explore creativity and face challenges that
                    push them to their limits. Each ripple of innovation here
                    creates waves of impact, as we sail through unbounded
                    opportunities in this limitless ocean of knowledge.
                </p>
            </div>
        </motion.div>
    );
};

export default About;
