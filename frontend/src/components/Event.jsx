"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Component({ event, ind }) {
    const eventRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const router = useRouter();

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
         bg-[#073c60]/30   backdrop-blur-lg shadow-[#132e47] shadow-md z-10 cursor-pointer hover:scale-105 max-h-[521px]"
            style={{
                boxShadow:
                    "0 4px 6px -1px rgba(19, 46, 71, 0.1), 0 2px 4px -1px rgba(19, 46, 71, 0.06)",
            }}
        >
            <div className="relative mb-4 flex h-full w-full items-center justify-center overflow-hidden [mask:linear-gradient(black_70%,transparent)]">
                <Image
                    src={event.image}
                    alt={event.title}
                    height={400}
                    width={380}
                    className="max-w-[300px] md:max-w-[380px] transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="mt-auto w-full space-y-4 px-8 pb-2">
                <h3 className="text-xl font-semibold text-zinc-200 transition-colors duration-300 group-hover:text-white">
                    {event.title}
                </h3>
                <p className="max-w-sm text-zinc-400/80 transition-colors duration-300 group-hover:text-zinc-300">
                    {event.description}
                </p>
            </div>
            <Button
                variant="outline"
                className="ml-8 mb-4 w-fit bg-[#1a3c5b] text-zinc-200 hover:bg-[#2a5075] hover:text-zinc-100 border-[#2a5075] transition-all duration-300 group-hover:bg-[#2a5075] group-hover:text-white group-hover:shadow-md"
                onClick={() => {
                    router.push(`/events/${event.id}`);
                }}
            >
                Read More
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
        </motion.div>
    );
}
