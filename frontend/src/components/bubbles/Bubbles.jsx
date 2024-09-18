import React, { useEffect, useState, useCallback } from "react";

const Bubble = ({ position, size, duration, onAnimationEnd }) => {
    return (
        <div
            className="bubble"
            style={{
                bottom: `${position.bottom}%`,
                left: `${position.left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
            }}
            onAnimationEnd={onAnimationEnd}
        >
            <div className="dot"></div>
        </div>
    );
};

const Bubbles = () => {
    const [bubbles, setBubbles] = useState([]);

    const generateBubble = useCallback(() => {
        const fromBottom = Math.floor(Math.random() * 100);
        const fromLeft = Math.floor(Math.random() * 100);
        const size = Math.floor(Math.random() * 30) + 20; // 20-50px
        const duration = Math.floor(Math.random() * 10) + 5; // 5-15s

        if (bubbles.length >= 20) {
            return;
        }
        return {
            id: Math.random(),
            position: { bottom: fromBottom, left: fromLeft },
            size,
            duration,
        };
    }, []);

    const addBubble = useCallback(() => {
        setBubbles((prevBubbles) => [...prevBubbles, generateBubble()]);
    }, [generateBubble]);

    const removeBubble = useCallback(
        (id) => {
            setBubbles((prevBubbles) =>
                prevBubbles.filter((bubble) => bubble.id !== id)
            );
            addBubble(); // Generate a new bubble when one is removed
        },
        [addBubble]
    );

    useEffect(() => {
        // Initial bubbles
        for (let i = 0; i < 20; i++) {
            addBubble();
        }
    }, [addBubble]);

    return (
        <div className="absolute min-h-full w-full overflow-hidden bubbles-container">
            {bubbles.map((bubble) => (
                <Bubble
                    key={bubble.id}
                    position={bubble.position}
                    size={bubble.size}
                    duration={bubble.duration}
                    onAnimationEnd={() => removeBubble(bubble.id)}
                />
            ))}
        </div>
    );
};

export default Bubbles;
