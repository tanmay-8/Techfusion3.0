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

const App = () => {
    const scroll = typeof window !== "undefined" && new LocomotiveScroll({});
    return (
        <div className=" relative bg-primary font-main p-4 overflow-x-hidden">
            <div className="absolute inset-0 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
            </div>
            <Header />
            <Hero />
            <About />
            <Events />
            <Sponsors />
            <Register />
            <Footer />
        </div>
    );
};

export default App;
