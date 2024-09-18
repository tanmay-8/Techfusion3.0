import React from "react";
import "./JellyFish2.css";
const JellyFish2 = () => {
    return (
        <div className="datouwang2">
            <div className="arms2">
                <div
                    className="arm2"
                    style={{ "--scaleX": 1, "--scaleY": 1, "--rotate": 3 }}
                ></div>
                <div
                    className="arm2"
                    style={{ "--scaleX": 1, "--scaleY": 1.1, "--rotate": 2 }}
                ></div>
                <div
                    className="arm2"
                    style={{ "--scaleX": 1, "--scaleY": 1.2, "--rotate": 1 }}
                ></div>
                <div
                    className="arm2"
                    style={{ "--scaleX": -1, "--scaleY": 1.15, "--rotate": 0 }}
                ></div>
                <div
                    className="arm2"
                    style={{ "--scaleX": -1, "--scaleY": 1.1, "--rotate": 0 }}
                ></div>
                <div
                    className="arm2"
                    style={{ "--scaleX": -1, "--scaleY": 1, "--rotate": -1 }}
                ></div>
                <div
                    className="arm2"
                    style={{ "--scaleX": -1, "--scaleY": 1.15, "--rotate": -2 }}
                ></div>
                <div
                    className="arm2"
                    style={{
                        "--scaleX": 0.5,
                        "--scaleY": 1.15,
                        "--rotate": -3,
                    }}
                ></div>
            </div>
            <div className="tentacles2">
                <div className="tentacle2"></div>
                <div className="tentacle2"></div>
                <div className="tentacle2"></div>
                <div className="tentacle2"></div>
                <div className="tentacle2"></div>
            </div>
            <div className="guts2"></div>
            <div className="body2">
                <div className="base2"></div>
            </div>
            <div className="eyes2">
                <div className="eye2 left2">
                    <div className="eyelid2"></div>
                </div>
                <div className="eye2 right2">
                    <div className="eyelid2"></div>
                </div>
            </div>
        </div>
    );
};

export default JellyFish2;
