import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Register() {
    const formRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedEvents, setSelectedEvents] = useState({
        codeduet: false,
        codecrush: false,
        cloudverse: false,
        bidtobuild: false,
    });
    const [totalAmount, setTotalAmount] = useState(0);

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

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const prices = {
            codeduet: 150,
            codecrush: 60,
            cloudverse: 100,
            bidtobuild: 80,
        };
        const total = Object.entries(selectedEvents).reduce(
            (sum, [event, isSelected]) => {
                return isSelected ? sum + prices[event] : sum;
            },
            0
        );
        setTotalAmount(total);
    }, [selectedEvents]);

    const handleEventChange = (event) => {
        setSelectedEvents((prev) => ({
            ...prev,
            [event]: !prev[event],
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className="overflow-hidden w-full px-4 md:px-8 py-24 space-y-6 font-body flex flex-col justify-center items-center" id="registerForm">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-bold text-center text-white font-title mb-4"
            >
                Register Now
            </motion.h1>
            <motion.div
                ref={formRef}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full max-w-7xl"
            >
                <div className="bg-[#1a3c5b]/30 shadow-lg shadow-[#132e47]/50 backdrop-blur-xl border-none rounded-2xl overflow-hidden">
                    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {[
                                {
                                    id: "name",
                                    label: "Name",
                                    placeholder:
                                        "Enter name of all team members",
                                },
                                {
                                    id: "email",
                                    label: "Email",
                                    placeholder: "Enter your email",
                                    type: "email",
                                },
                                {
                                    id: "whatsapp",
                                    label: "WhatsApp No.",
                                    placeholder:
                                        "Your WhatsApp number (no country code)",
                                },
                                {
                                    id: "college",
                                    label: "College Name",
                                    placeholder: "Your college name",
                                },
                            ].map((field) => (
                                <motion.div
                                    key={field.id}
                                    initial={{
                                        opacity: 0,
                                        x:
                                            field.id === "name" ||
                                            field.id === "whatsapp"
                                                ? -50
                                                : 50,
                                    }}
                                    animate={{
                                        opacity: isVisible ? 1 : 0,
                                        x: isVisible
                                            ? 0
                                            : field.id === "name" ||
                                              field.id === "whatsapp"
                                            ? -50
                                            : 50,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay:
                                            0.1 *
                                            [
                                                "name",
                                                "email",
                                                "whatsapp",
                                                "college",
                                            ].indexOf(field.id),
                                    }}
                                    className="space-y-2"
                                >
                                    <Label
                                        htmlFor={field.id}
                                        className="text-gray-200"
                                    >
                                        {field.label}
                                    </Label>
                                    <Input
                                        id={field.id}
                                        type={field.type || "text"}
                                        placeholder={field.placeholder}
                                        className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200 placeholder:text-gray-400"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 50,
                            }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="space-y-2"
                        >
                            <Label htmlFor="year" className="text-gray-200">
                                Year of Study
                            </Label>
                            <Select>
                                <SelectTrigger className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200">
                                    <SelectValue placeholder="Select year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[
                                        "First Year",
                                        "Second Year",
                                        "Third Year",
                                        "Fourth Year",
                                    ].map((year, index) => (
                                        <SelectItem
                                            key={index + 1}
                                            value={String(index + 1)}
                                        >
                                            {year}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 50,
                            }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="space-y-4"
                        >
                            <Label className="text-gray-200 text-lg font-semibold">
                                Select Events
                            </Label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        id: "codeduet",
                                        name: "CodeDuet",
                                        price: 150,
                                    },
                                    {
                                        id: "codecrush",
                                        name: "CodeCrush",
                                        price: 60,
                                    },
                                    {
                                        id: "cloudverse",
                                        name: "CloudVerse",
                                        price: 100,
                                    },
                                    {
                                        id: "bidtobuild",
                                        name: "Bid to Build",
                                        price: 80,
                                    },
                                ].map((event) => (
                                    <div
                                        key={event.id}
                                        className="flex items-center space-x-2 bg-[#1a3c5b]/30 p-3 rounded-lg"
                                    >
                                        <Checkbox
                                            id={event.id}
                                            checked={selectedEvents[event.id]}
                                            onCheckedChange={() =>
                                                handleEventChange(event.id)
                                            }
                                        />
                                        <label
                                            htmlFor={event.id}
                                            className="text-sm font-medium text-gray-200 flex-grow"
                                        >
                                            {event.name}
                                        </label>
                                        <span className="text-cyan-400 font-semibold">
                                            ₹{event.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 50,
                            }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="space-y-4 bg-[#1a3c5b]/50 p-4 rounded-lg"
                        >
                            <div className="flex justify-between items-center">
                                <Label className="text-gray-200 text-xl font-semibold">
                                    Total Amount:
                                </Label>
                                <span className="text-2xl font-bold text-cyan-400">
                                    ₹{totalAmount}
                                </span>
                            </div>
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/placeholder.svg?height=200&width=200"
                                    alt="QR Code for payment"
                                    width={200}
                                    height={200}
                                    className="bg-white p-2 rounded-lg"
                                />
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: isVisible ? 1 : 0,
                                    y: isVisible ? 0 : 50,
                                }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="space-y-2"
                            >
                                <Label
                                    htmlFor="transaction"
                                    className="text-gray-200"
                                >
                                    Transaction Id
                                </Label>
                                <Input
                                    id="transaction"
                                    placeholder="Enter transaction ID"
                                    className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200 placeholder:text-gray-400"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: isVisible ? 1 : 0,
                                    y: isVisible ? 0 : 50,
                                }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="space-y-2"
                            >
                                <Label
                                    htmlFor="screenshot"
                                    className="text-gray-200"
                                >
                                    Payment Screenshot
                                </Label>
                                <Input
                                    id="screenshot"
                                    type="file"
                                    className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200 placeholder:text-gray-400 cursor-pointer"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="p-4 md:p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                scale: isVisible ? 1 : 0.5,
                            }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="w-full flex justify-center"
                        >
                            <Button
                                onClick={(e) => {
                                    onSubmit(e);
                                }}
                                className="w-full sm:w-auto px-8 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-lg rounded-lg transition-colors duration-300"
                            >
                                Submit
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
