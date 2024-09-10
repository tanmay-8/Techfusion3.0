import React from "react";

const Hero = () => {
    return (
        <div
            data-scroll
            data-scroll-section
            data-scroll-speed="-.3"
            className="h-screen flex flex-col items-center justify-center space-y-8"
        >
            <h1 className="text-4xl md:text-8xl text-center text-white font-bold uppercase ">
                Techfusion&nbsp; 3.0
            </h1>
            <h2 className="text-2xl text-center text-white font-semibold uppercase">
                Students' Association of Information Technology WCE, Sangli
            </h2>
            <button class="group relative rounded-full px-4 py-2 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow text-lg">
                <span class="absolute inset-0 overflow-hidden rounded-full">
                    <span class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div class="relative z-10 rounded-full bg-zinc-950 px-6 py-2 ring-1 ring-white/10">
                    <span class="block">Register Now</span>
                </div>
                <span class="absolute  left-[1.8rem] h-px w-[calc(100%-4rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
        </div>
    );
};

export default Hero;
