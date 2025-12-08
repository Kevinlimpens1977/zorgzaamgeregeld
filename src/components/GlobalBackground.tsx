const GlobalBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none">
            {/* Background Image - Fixed */}
            <div
                className="absolute inset-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: 'url("/images/handen.jpg")' }}
            ></div>

            {/* Overlays to match the Home/Hero style */}
            {/* 1. Heavy base overlay for fade */}
            <div className="absolute inset-0 bg-[#F7F4F2] opacity-85"></div>

            {/* 2. Gradient for text readability at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4F2] via-transparent to-transparent"></div>
        </div>
    );
};

export default GlobalBackground;
