import React from "react";
import "./JellyFish1.css";

const JellyFish1 = () => {
    return (
        <div className="datouwang">
            <div className="arms">
                <div
                    className="arm"
                    style={{ "--scaleX": 1, "--scaleY": 1, "--rotate": 3 }}
                ></div>
                <div
                    className="arm"
                    style={{ "--scaleX": 1, "--scaleY": 1.1, "--rotate": 2 }}
                ></div>
                <div
                    className="arm"
                    style={{ "--scaleX": 1, "--scaleY": 1.2, "--rotate": 1 }}
                ></div>
                <div
                    className="arm"
                    style={{ "--scaleX": -1, "--scaleY": 1.15, "--rotate": 0 }}
                ></div>
                <div
                    className="arm"
                    style={{ "--scaleX": -1, "--scaleY": 1.1, "--rotate": 0 }}
                ></div>
                <div
                    className="arm"
                    style={{ "--scaleX": -1, "--scaleY": 1, "--rotate": -1 }}
                ></div>
                <div
                    className="arm"
                    style={{ "--scaleX": -1, "--scaleY": 1.15, "--rotate": -2 }}
                ></div>
                <div
                    className="arm"
                    style={{
                        "--scaleX": 0.5,
                        "--scaleY": 1.15,
                        "--rotate": -3,
                    }}
                ></div>
            </div>
            <div className="tentacles">
                <div className="tentacle"></div>
                <div className="tentacle"></div>
                <div className="tentacle"></div>
                <div className="tentacle"></div>
                <div className="tentacle"></div>
            </div>
            <div className="guts"></div>
            <div className="body">
                <div className="base"></div>
            </div>
            <div className="eyes">
                <div className="eye left">
                    <div className="eyelid"></div>
                </div>
                <div className="eye right">
                    <div className="eyelid"></div>
                </div>
            </div>
        </div>
    );
};

export default JellyFish1;
