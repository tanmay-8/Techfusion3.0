import React from "react";
import Timer from "./ui/Timer";
import ShinyButton from "./ui/ShinyButton";

const Hero = () => {
    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.3"
            className="h-screen flex flex-col items-center justify-center space-y-16"
        >
            <div>
                <h1 className="text-4xl md:text-8xl text-center text-white font-extrabold font-title ">
                    Techfusion&nbsp; 3.0
                </h1>
                <h2 className="text-2xl text-center text-white font-semibold font-title">
                    Students' Association of Information Technology WCE, Sangli
                </h2>
            </div>
            <Timer />
            <ShinyButton />
        </div>
    );
};

export default Hero;
