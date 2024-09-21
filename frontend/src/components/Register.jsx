"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import QrImg from "@/assets/qr.jpeg";
import QrImg2 from "@/assets/qr2.jpeg";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

const CustomAlert = ({ isOpen, onClose, title, message, isSuccess }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className={`relative w-full max-w-md p-6 rounded-lg shadow-lg ${
                        isSuccess ? "bg-cyan-600" : "bg-red-600"
                    }`}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-white hover:text-gray-200"
                        aria-label="Close alert"
                    >
                        <X size={24} />
                    </button>
                    <h2 className="text-2xl font-bold mb-4 text-white">
                        {title}
                    </h2>
                    <p className="text-white">{message}</p>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default function Register() {
    const imageUploadApi =
        process.env.NEXT_PUBLIC_BACKEND_URL + "/participant/uploadimage";
    const formSubmitApi =
        process.env.NEXT_PUBLIC_BACKEND_URL + "/participant/register";
    const formRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [alertState, setAlertState] = useState({
        isOpen: false,
        title: "",
        message: "",
        isSuccess: false,
    });

    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            whatsapp: "",
            college: "",
            year: "",
            events: {
                codeduet: false,
                codecrush: false,
                cloudverse: false,
                bidtobuild: false,
            },
            transaction: "",
            screenshot: null,
            collegeIdPhoto: null,
        },
    });

    const selectedEvents = useWatch({
        control,
        name: "events",
    });

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
            codecrush: 50,
            cloudverse: 150,
            bidtobuild: 200,
        };
        const amount = Object.entries(selectedEvents)
            .filter(([, isSelected]) => isSelected)
            .reduce((acc, [event]) => acc + prices[event], 0);
        setTotalAmount(amount);
    }, [selectedEvents]);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            // Helper function to handle image upload
            const uploadImage = async (image) => {
                const formData = new FormData();
                formData.append("transactionImage", image);
                const response = await fetch(imageUploadApi, {
                    method: "POST",
                    body: formData,
                });
                if (!response.ok) throw new Error("Image upload failed");
                return response.json();
            };

            const [transactionImageResponse, collegeIdImageResponse] =
                await Promise.all([
                    uploadImage(data.screenshot),
                    uploadImage(data.collegeIdPhoto),
                ]);

            const submitData = {
                name: data.name,
                email: data.email,
                phone: data.whatsapp,
                college: data.college,
                year: parseInt(data.year),
                events: Object.entries(data.events)
                    .filter(([, isSelected]) => isSelected)
                    .map(([event]) => {
                        const eventMap = {
                            codeduet: "CodeDuet",
                            codecrush: "CodeCrush",
                            cloudverse: "CloudVerse",
                            bidtobuild: "Bid2Build",
                        };
                        return eventMap[event];
                    }),
                amount: totalAmount,
                transactionLink: transactionImageResponse.transactionLink,
                transactionID: data.transaction,
                IDCardLink: collegeIdImageResponse.transactionLink,
            };

            const response = await fetch(formSubmitApi, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submitData),
            });

            if (!response.ok) throw new Error("Registration failed");

            setAlertState({
                isOpen: true,
                title: "Registration Successful!",
                message: "Thank you for registering. We'll contact you soon.",
                isSuccess: true,
            });
        } catch (error) {
            setAlertState({
                isOpen: true,
                title: "Registration Failed",
                message:
                    error.message ||
                    "There was an error processing your registration. Please try again.",
                isSuccess: false,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const closeAlert = () => {
        setAlertState((prev) => ({ ...prev, isOpen: false }));
    };

    return (
        <div
            className="overflow-hidden w-full px-4 md:px-8 py-24 space-y-6 font-body flex flex-col justify-center items-center"
            id="registerForm"
        >
            <CustomAlert
                isOpen={alertState.isOpen}
                onClose={closeAlert}
                title={alertState.title}
                message={alertState.message}
                isSuccess={alertState.isSuccess}
            />
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
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-[#1a3c5b]/30 shadow-lg shadow-[#132e47]/50 backdrop-blur-xl border-none rounded-2xl overflow-hidden"
                >
                    <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {[
                                {
                                    id: "name",
                                    label: "Name",
                                    placeholder:
                                        "Enter name of all team members",
                                    validation: {
                                        required: "Name is required",
                                    },
                                },
                                {
                                    id: "email",
                                    label: "Email",
                                    placeholder: "Enter your email",
                                    type: "email",
                                    validation: {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    },
                                },
                                {
                                    id: "whatsapp",
                                    label: "WhatsApp No.",
                                    placeholder:
                                        "Your WhatsApp number (no country code)",
                                    validation: {
                                        required: "WhatsApp number is required",
                                        pattern: {
                                            value: /^[6-9]\d{9}$/,
                                            message: "Invalid phone number",
                                        },
                                    },
                                },
                                {
                                    id: "college",
                                    label: "College Name",
                                    placeholder: "Your college name",
                                    validation: {
                                        required: "College name is required",
                                    },
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
                                    <Controller
                                        name={field.id}
                                        control={control}
                                        rules={field.validation}
                                        render={({
                                            field: { onChange, value },
                                        }) => (
                                            <Input
                                                id={field.id}
                                                type={field.type || "text"}
                                                placeholder={field.placeholder}
                                                className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200 placeholder:text-gray-400"
                                                onChange={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                    {errors[field.id] && (
                                        <p className="text-red-500 text-sm">
                                            {errors[field.id].message}
                                        </p>
                                    )}
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
                            <Controller
                                name="year"
                                control={control}
                                rules={{
                                    required:
                                        "Please select your year of study",
                                }}
                                render={({ field }) => (
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200">
                                            <SelectValue placeholder="Select year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {[
                                                "First Year",
                                                "Second Year",
                                                "Third Year",
                                                "Fourth Year",
                                                "Diploma First Year",
                                                "Diploma Second Year",
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
                                )}
                            />
                            {errors.year && (
                                <p className="text-red-500 text-sm">
                                    {errors.year.message}
                                </p>
                            )}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 50,
                            }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="space-y-2"
                        >
                            <Label
                                htmlFor="collegeIdPhoto"
                                className="text-gray-200"
                            >
                                College ID Photo
                            </Label>
                            <Controller
                                name="collegeIdPhoto"
                                control={control}
                                rules={{
                                    required: "College ID photo is required",
                                }}
                                render={({ field }) => (
                                    <Input
                                        id="collegeIdPhoto"
                                        type="file"
                                        onChange={(e) =>
                                            field.onChange(e.target.files[0])
                                        }
                                        className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200 placeholder:text-gray-400 cursor-pointer"
                                    />
                                )}
                            />
                            {errors.collegeIdPhoto && (
                                <p className="text-red-500 text-sm">
                                    {errors.collegeIdPhoto.message}
                                </p>
                            )}
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
                                        price: 50,
                                    },
                                    {
                                        id: "cloudverse",
                                        name: "CloudVerse",
                                        price: 150,
                                    },
                                    {
                                        id: "bidtobuild",
                                        name: "Bid to Build",
                                        price: 200,
                                    },
                                ].map((event) => (
                                    <div
                                        key={event.id}
                                        className="flex items-center space-x-2 bg-[#1a3c5b]/30 p-3 rounded-lg"
                                    >
                                        <Controller
                                            name={`events.${event.id}`}
                                            control={control}
                                            render={({ field }) => (
                                                <Checkbox
                                                    id={event.id}
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            )}
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
                            {Object.values(selectedEvents).every(
                                (v) => v === false
                            ) && (
                                <p className="text-red-500 text-sm">
                                    Please select at least one event
                                </p>
                            )}
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
                            <div className="w-full gap-6 md:flex justify-center items-center">
                                <Image
                                    src={QrImg}
                                    alt="QR Code for payment"
                                    width={200}
                                    height={200}
                                    className="bg-white rounded-lg mx-auto"
                                />
                                <Image
                                    src={QrImg2}
                                    alt="QR Code for payment"
                                    width={200}
                                    height={200}
                                    className="bg-white rounded-lg mx-auto mt-4 md:mt-0"
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
                                <Controller
                                    name="transaction"
                                    control={control}
                                    rules={{
                                        required: "Transaction ID is required",
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="transaction"
                                            placeholder="Enter transaction ID"
                                            className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200 placeholder:text-gray-400"
                                        />
                                    )}
                                />
                                {errors.transaction && (
                                    <p className="text-red-500 text-sm">
                                        {errors.transaction.message}
                                    </p>
                                )}
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
                                <Controller
                                    name="screenshot"
                                    control={control}
                                    rules={{
                                        required:
                                            "Payment screenshot is required",
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            id="screenshot"
                                            type="file"
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.files[0]
                                                )
                                            }
                                            className="bg-[#1a3c5b]/50 border-[#2a5075] text-gray-200 placeholder:text-gray-400 cursor-pointer"
                                        />
                                    )}
                                />
                                {errors.screenshot && (
                                    <p className="text-red-500 text-sm">
                                        {errors.screenshot.message}
                                    </p>
                                )}
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
                            transition={{ duration: 0.5, delay: 1 }}
                            className="w-full flex justify-center"
                        >
                            <Button
                                disabled={isLoading}
                                type="submit"
                                className="w-full sm:w-auto px-8 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold text-lg rounded-lg transition-colors duration-300"
                            >
                                {isLoading ? "Registering..." : "Register"}
                            </Button>
                        </motion.div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
