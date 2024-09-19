import { useState } from "react";

const ShinyButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
            <motion.span
                className="relative z-10 mix-blend-difference"
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
            >
                Register Now
            </motion.span>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
                initial={{ x: "100%", opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.4 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />
        </motion.button>
    );
};

export default ShinyButton;
