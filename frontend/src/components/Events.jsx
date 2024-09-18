import React from "react";
import Event from "./Event";
import CloudVerseImg from "../assets/cloudverse.jpeg";
import CodeDuetImg from "../assets/codeduet.jpg";
import CodeCrushImg from "../assets/codecrush.jpg";
import BidToBuildImg from "../assets/bidtobuild.jpg";

const Events = () => {
    const events = [
        {
            image: CloudVerseImg,
            title: "CloudVerse",
            description:
                "CloudVerse is a one-day event on AWS, offering practical cloud computing insights and skills for real-world use.",
        },
        {
            image: CodeDuetImg,
            title: "CodeDuet",
            description:
                "CodeDuet is a pair coding contest that tests teamwork and coding skills through challenging, time-bound problem-solving rounds.",
        },
        {
            image: CodeCrushImg,
            title: "CodeCrush",
            description:
                "CodeCrush is an online coding contest with Novice and Expert tracks, featuring questions from easy to hard for students to showcase and improve their skills.",
        },
        {
            image: BidToBuildImg,
            title: "BidToBuild",
            description:
                "Bid 2 Build is an IPL-style auction event where participants build their cricket team through strategic bidding. It tests cricket knowledge and decision-making skills in an exciting format.",
        },
    ];
    return (
        <div className="mt-24" id="events">
            <h1 className="text-4xl font-bold text-center text-white py-8 font-title">
                Events
            </h1>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 p-4 place-items-center w-fit mx-auto min-h-screen font-body">
                {events.map((event, ind) => {
                    return <Event key={ind} ind={ind} event={event} />;
                })}
            </div>
        </div>
    );
};

export default Events;
