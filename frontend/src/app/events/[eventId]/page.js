"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ChevronUp, Calendar, Users, Contact, Clock, CreditCard } from "lucide-react";
import Bubbles from "@/components/bubbles/Bubbles";
import { useRouter } from "next/navigation";

export default function Component({ params }) {
    const id = params.eventId;
    const [isVisible, setIsVisible] = useState(false);
    const [expandedSections, setExpandedSections] = useState({
        contents: true,
    });
    const contentRef = useRef(null);
    const router = useRouter();

    const eventData = {
        cloudverse: {
            title: "CloudVerse",
            description:
                "CloudVerse is a one-day event on AWS, offering practical cloud computing insights and skills for real-world use.",
            contents: [
                "1. Basics of Cloud Computing & why it is needed",
                "2. Architecture of Cloud",
                "3. Cloud service providers & introduction to AWS",
                "4. Service and deployment models",
                "5. Hypervisor & Virtualization",
                "6. AWS Services such as S3, EC2, Lambda,IAM with Handson",
                "7. Overview of other AWS Services",
            ],
            images: [
                "https://sait-techfusion-2-0.vercel.app/assets/image%205-7d9fa071.svg",
                "https://sait-techfusion-2-0.vercel.app/assets/image%206-f8cf2f30.svg",
            ],
            date: "6th October 2024",
            timing: {
                "Basics Of Cloud Computing": "9:00 AM - 01:00 PM",
                "AWS Services": "02:00 PM - 05:00 PM",
            },
            contact: [
                {
                    Name: "Aditya Aparadh",
                    Contact: "8208056203",
                },
                {
                    Name: "Tanmay Shingde",
                    Contact: "7507488201",
                },
            ],
            fees: "₹ 149 per person",
        },
        codeduet: {
            title: "Code Duet",
            description:
                "CodeDuet is a pair coding contest that tests teamwork and coding skills through challenging, time-bound problem-solving rounds.",
            contents: [
                "*Round 1*",
                "1. Code Duet round 1 is a mandatory round for all teams.",
                "2. The round will be held on HackerEarth and consist of C/C++ MCQ Questions.",
                "3. The difficulty level of questions will vary from easy to hard.",
                "4. Each team can use their own laptop or will be provided with one PC for a level playing field.",
                "5. Any team caught engaging in malpractice will be disqualified immediately.",
                "*Round 2*",
                "1. Round 2 is a pattern coding round.",
                "2. This round will be held on HackerEarth .",
                "3. All programming languages are supported.",
                "4. Each team can use their laptop or be provided with one PC for a level playing field.",
                "5. Malpractice will result in disqualification immediately.",
                "*Round 3*",
                "1. Round 3 is the final round of the competition and will be held on HackerEarth.",
                "2. The round duration is 2 hour.",
                "3. It will consist of simple input/output questions, where participants write code to satisfy the given input/output relations.",
                "4. Teams can use their own laptops or be provided with a PC.",
                "5. Malpractice will result in disqualification.",
            ],
            images: [
                "https://sait-techfusion-2-0.vercel.app/assets/image%203-aae2413c.svg",
                "https://res.cloudinary.com/drdt2romn/image/upload/fl_preserve_transparency/v1726727187/istockphoto-1180078592-612x612-removebg-preview_iwshfg.jpg",
            ],
            date: "5th October 2024",
            timing: {
                "Round 1": "11 AM - 12 PM",
                "Round 2": "01 PM - 01:30 PM",
                "Round 3": "02:30 PM - 05:30 PM",
            },
            contact: [
                {
                    Name: "Mahemud Borgave",
                    Contact: "7775841645",
                },
                {
                    Name: "Satej Sawant",
                    Contact: "7058519790",
                },
            ],
            fees: "₹ 149 per team",
        },
        codecrush: {
            title: "CodeCrush",
            description:
                "CodeCrush is an online coding contest with Novice and Expert tracks, featuring questions from easy to hard for students to showcase and improve their skills.",
            contents: [
                "*Novice Track*",
                "1. Reserved for first-year degree, first-year diploma, second-year diploma students.",
                "*Expert Track*",
                "1. Open to students in their second, third, and final years of degree, and third-year diploma students.",
                "2. Contest will take place on HackerEarth, where participants will have 2 hours to complete coding questions.",
                "3. Top three performers will receive prizes, with a special recognition for the top female participant.",
                "4. The contest is entirely online and participants can join from any location.",
            ],
            images: [
                "https://sait-techfusion-2-0.vercel.app/assets/image%207-8d9fa071.svg",
                "https://sait-techfusion-2-0.vercel.app/assets/image%208-f8cf2f30.svg",
            ],
            date: "6th October 2024",
            timing: {
                "Novice Track": "09:00 PM - 11:00 PM",
                "Expert Track": "09:00 PM - 11:00 PM",
            },
            contact: [
                {
                    Name: "Mahemud Borgave",
                    Contact: "7775841645",
                },
            ],
            fees: "₹ 49 per person",
        },
        bidtobuild: {
            title: "Bid 2 Build",
            description:
                "Bid 2 Build is an IPL-style auction event where participants build their cricket team through strategic bidding, testing cricket knowledge and decision-making skills.",
            contents: [
                "*Round 1: Cricket Quiz*",
                "1. Teams of 2 to 4 players.",
                "2. General knowledge quiz on cricket.",
                "3. Correct answers score 4 points, wrong answers score -2.",
                "*Round 2: Retention Team*",
                "1. Teams are given credits and must build a team of 5 players within the given credit.",
                "2. Teams are restricted to a maximum of 1 foreign player.",
                "*Round 3: Dream Team Auction*",
                "1. Teams bid for players to form a squad of 11 players.",
                "2. Squads must include specific player roles such as a wicketkeeper, captain, and vice-captain.",
                "3. Teams must stay within their allocated budget.",
            ],
            images: [
                "https://sait-techfusion-2-0.vercel.app/assets/image%209-f8cf2f30.svg",
                "https://sait-techfusion-2-0.vercel.app/assets/image%2010-8d9fa071.svg",
            ],
            date: "5th October 2024",
            timing: {
                "Round 1": "09:00 AM - 10:00 AM",
                "Round 2": "10:30 AM - 11:30 AM",
                "Round 3": "12:00 PM - 02:00 PM",
            },
            contact: [
                {
                    Name: "Atharv Khot",
                    Contact: "8767865692",
                },
            ],
            fees: "₹ 199 per team",
        },
    };

    const event = eventData[id] || eventData.cloudverse;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.intersectionRatio > 0.1);
            },
            {
                root: null,
                threshold: [0.1],
            }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, []);

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="min-h-screen w-full px-4 md:px-8 py-24 space-y-8 font-body flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            <Bubbles count={10} />
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-center text-white font-title mb-4 tracking-wider"
            >
                {event.title}
            </motion.h1>
            <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full max-w-4xl"
            >
                <div className="bg-[#1a3c5b]/40 shadow-xl shadow-cyan-900/30 backdrop-blur-xl border border-cyan-800/30 rounded-3xl overflow-hidden">
                    <div className="p-6 md:p-8 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-6 rounded-2xl shadow-inner"
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
                                Event Overview
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {event.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleSection("contents")}
                            >
                                <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300">
                                    Details
                                </h2>
                                {expandedSections.contents ? (
                                    <ChevronUp className="text-cyan-300" />
                                ) : (
                                    <ChevronDown className="text-cyan-300" />
                                )}
                            </div>
                            <AnimatePresence>
                                {expandedSections.contents && (
                                    <motion.ul
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-3 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-2xl shadow-inner"
                                    >
                                        {event.contents.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                                className={`text-left ${
                                                    item.includes("*")
                                                        ? "font-bold text-xl text-cyan-400"
                                                        : "text-gray-300"
                                                }`}
                                                dangerouslySetInnerHTML={{
                                                    __html: item.replace(
                                                        /\*/g,
                                                        ""
                                                    ),
                                                }}
                                            />
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-6 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
                                    <Calendar className="mr-2" /> Date
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    {event.date}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-6 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
                                    <CreditCard className="mr-2" /> Fees
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    {event.fees}
                                </p>
                            </motion.div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-6 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
                                    <Clock className="mr-2" /> Timing
                                </h3>
                                {Object.entries(event.timing).map(
                                    ([key, value], index) => (
                                        <p
                                            key={index}
                                            className="text-gray-300 text-lg mt-2"
                                        >
                                            <span className=" font-bold">
                                                {key} :{" "}
                                            </span>
                                            {value}
                                        </p>
                                    )
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-6 rounded-2xl shadow-lg"
                            >
                                <h3 className="text-2xl font-semibold text-cyan-300 mb-4 flex items-center">
                                    <Users className="mr-2" /> Contact
                                </h3>
                                {event.contact.map((contact, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-300 text-lg"
                                    >
                                        {contact.Name}: {contact.Contact}
                                    </p>
                                ))}
                            </motion.div>
                        </div>

                        <div className="w-full flex justify-center">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                className="bg-cyan-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl mx-auto duration-300 transform hover:-translate-y-0.5 hover:scale-105 transition-all"
                                onClick={() => {
                                    router.push("/rulebook.pdf");
                                }}
                            >
                                Rule Book
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
