const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none">
            {/* Background Color for Mobile / Base */}
            <div className="absolute inset-0 bg-chocolate md:bg-base"></div>

            {/* Background Image - Fixed (Hidden on very small screens if color is preferred, but here we keep it with overlay) */}
            <div
                className="absolute inset-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: 'url("/images/handen.jpg")' }}
            ></div>

            {/* Overlays */}
            {/* 1. Base overlay - Lower opacity on mobile as requested (0.10-0.15) */}
            <div className="absolute inset-0 bg-chocolate md:bg-[#F7F4F2] opacity-15 md:opacity-65"></div>

            {/* 2. Gradient for text readability at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate md:from-[#F7F4F2] via-transparent to-transparent opacity-50"></div>
        </div>
    );
};

export default GlobalBackground;
