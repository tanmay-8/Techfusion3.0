import React from "react";
import Event from "./Event";
const Events = () => {
    const events = [{}, {}, {}, {}];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 place-items-center w-full ">  
            {events.map((event, ind) => {
                return <Event key={ind} event={event} />;
            })}
        </div>
    );
};

export default Events;
