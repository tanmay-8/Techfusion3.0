import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
const Event = ({ event, ind }) => {
    const eventRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const router =  useRouter();

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
            className="flex w-[300px] md:w-[380px] min-h-[400px] flex-col overflow-hidden rounded-2xl
             bg-[#073c60]/30   backdrop-blur-lg shadow-[#132e47] shadow-md z-10 cursor-pointer transition-all hover:scale-105 max-h-[521px]"
        >
            <div className="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
                <Image src={event.image} alt={event.title} height={400} className="max-w-w-[300px] md:max-w-[380px]" />
            </div>
            <div className="mt-auto w-full space-y-4 px-8 pb-2">
                <h3 className="text-xl font-semibold text-zinc-200">
                    {event.title}
                </h3>
                <p className="max-w-sm text-zinc-400/80">{event.description}</p>
            </div>
            <Button
                variant="outline"
                className="mt-4 ml-8 mb-4 w-fit bg-[#1a3c5b] text-zinc-200 hover:bg-[#2a5075] hover:text-zinc-100 border-[#2a5075] transition-colors duration-300"
                onClick={() => {
                    router.push(`/events/${event.id}`);
                }}
            >
                Read More
                <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
        </motion.div>
    );
};

export default Event;
