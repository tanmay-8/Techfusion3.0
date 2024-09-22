import { useEffect, useRef, useState } from "react";
import Sponsor1 from "../assets/sponsor1.png";
import Sponsor2 from "../assets/sponsor2.jpeg";
import Sponsor3 from "../assets/sponsor3.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Sponsors = () => {
    const sponsors1 = [
        { src: Sponsor1, alt: "Sponsor 1" },
        { src: Sponsor2, alt: "Sponsor 2" },
    ];

    const sponsors2 = [{ src: Sponsor3, alt: "Sponsor 3" }];

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
            <h1 className="text-2xl md:text-4xl font-bold text-center text-white font-title my-6">
                Sponsors
            </h1>
            <h1 className="text-xl md:text-2xl  text-center text-white font-body my-6">
                Title Sponsors
            </h1>
            <div
                ref={sponsorsRef}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isVisible ? 1 : 0,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex  justify-center items-center gap-8 md:gap-12"
            >
                {sponsors1.map((sponsor, index) => (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: isVisible ? 1 : 0,
                            opacity: isVisible ? 1 : 0,
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        key={index}
                        className="rounded-lg  flex items-center justify-center "
                    >
                        <Image
                            src={sponsor.src}
                            alt={sponsor.alt}
                            width={index != 0 ? 130 : 150}
                            height={index != 0 ? 130 : 150}
                            className="rounded-lg"
                        />
                    </motion.div>
                ))}
            </div>
            <h1 className="text-xl md:text-2xl  text-center text-white font-body mt-12">
                Media Partner
            </h1>
            <div
                ref={sponsorsRef}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isVisible ? 1 : 0,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex  justify-center items-center gap-8 md:gap-12 mt-6"
            >
                {sponsors2.map((sponsor, index) => (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: isVisible ? 1 : 0,
                            opacity: isVisible ? 1 : 0,
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        key={index}
                        className="rounded-lg  flex items-center justify-center "
                    >
                        <Image
                            src={sponsor.src}
                            alt={sponsor.alt}
                            width={index != 0 ? 130 : 150}
                            height={index != 0 ? 130 : 150}
                            className="rounded-lg"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;
