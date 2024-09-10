import { useEffect, useRef, useState } from "react";
import Sponsor1 from "../assets/sponsor1.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Sponsors = () => {
    const sponsors = [
        { src: Sponsor1, alt: "Sponsor 1" },
        { src: Sponsor1, alt: "Sponsor 2" },
        { src: Sponsor1, alt: "Sponsor 3" },
    ];

    const sponsorsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.intersectionRatio > 0.3);
            },
            {
                root: null,
                threshold: 0.3,
            }
        );

        if (sponsorsRef.current) {
            observer.observe(sponsorsRef.current);
        }

        return () => {
            if (sponsorsRef.current) {
                observer.unobserve(sponsorsRef.current);
            }
        };
    }, []);

    return (
        <div className="pt-28 pb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-white font-title">
                Our Sponsors
            </h1>
            <motion.div 
                ref={sponsorsRef}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex  justify-center items-center gap-8 md:gap-12">
                {sponsors.map((sponsor, index) => (
                    <motion.div
                        key={index}
                        className="w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-lg flex items-center justify-center p-4"

                    >
                        <Image
                            src={sponsor.src}
                            alt={sponsor.alt}
                            width={100}
                            height={100}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Sponsors;
