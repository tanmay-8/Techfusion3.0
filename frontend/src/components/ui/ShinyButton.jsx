const ShinyButton = () => {
    return (
        <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-8 py-5 text-lg bg-[#073c60] text-white font-medium rounded-full leading-none flex items-center justify-center space-x-6 transition-all duration-200">
                <span>Register Now</span>
            </button>
        </div>
    );
};

export default ShinyButton;
