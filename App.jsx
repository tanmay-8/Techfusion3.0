import React from "react";
import Hero from "./Components/Hero";
import LocomotiveScroll from "locomotive-scroll";
import About from "./Components/About";
import Events from "./Components/Events";
import Sponsors from "./Components/Sponsors";
import Register from "./Components/Register";
import Footer from "./Components/Footer";

const App = () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        getDirection: true,
        getSpeed: true,
        smoothMobile: true,
        inertia: 0.75,
        class: "is-inview",
        lerp: 0.1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2.5,
        scrollFromAnywhere: true,
        resetNativeScroll: true,
        tablet: {
            smooth: true,
        },
        smartphone: {
            smooth: true,
        },
    });
    return (
        <div className="h-[500vh] relative bg-primary font-main">
            <div class="absolute top-0 -z-10 h-full w-full bg-white">
                <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
            </div>
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
