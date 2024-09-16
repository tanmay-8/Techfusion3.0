import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Event = ({ event, ind }) => {
    const eventRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.intersectionRatio > 0.4);
            },
            {
                root: null,
                threshold: [0.4],
            }
        );

        if (eventRef.current) {
            observer.observe(eventRef.current);
        }

        return () => {
            if (eventRef.current) {
                observer.unobserve(eventRef.current);
            }
        };
    }, []);
    return (
        <motion.div
            ref={eventRef}
            initial={{ opacity: 0, x: ind % 2 === 0 ? -100 : 100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : ind % 2 === 0 ? -100 : 100,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex w-[300px] md:w-[380px] min-h-[400px] flex-col overflow-hidden rounded-2xl bg-[#073c60]/50 ring-1 ring-zinc-[#156b92]/10"
        >
            <div className="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
                <Image src={event.image} alt={event.title} height={300} />
            </div>
            <div className="mt-auto w-full space-y-4 px-8 pb-8">
                <h3 className="text-xl font-semibold text-zinc-200">
                    {event.title}
                </h3>
                <p className="max-w-sm text-zinc-400/80">{event.description}</p>
            </div>
        </motion.div>
    );
};

export default Event;
