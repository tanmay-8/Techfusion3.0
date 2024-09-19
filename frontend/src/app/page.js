"use client";
import React from "react";
import Hero from "@/components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import About from "@/components/About";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsors";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Bubbles from "@/components/bubbles/Bubbles";
import JellyFish1 from "@/components/jellyfishes/JellyFish1";
import JellyFish2 from "@/components/jellyfishes/JellyFish2";
import Image from "next/image";
import BottomImg from "@/assets/bottom.png";

const App = () => {
    const scroll = typeof window !== "undefined" && new LocomotiveScroll({});
    return (
        <div className=" relative  font-main overflow-x-hidden overflow-hidden ">
            <Bubbles count={20} />
            <JellyFish1 />
            <JellyFish2 />
            <Hero />
            <About />
            <Events />
            <Sponsors />
            <Register />
            <Footer />
            <Image
                src={BottomImg}
                alt="bottom"
                className="absolute w-full -bottom-20 left-0 -z-10"
            />
        </div>
    );
};

export default App;
