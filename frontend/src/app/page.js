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
        <div className=" relative  font-main overflow-x-hidden">
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
