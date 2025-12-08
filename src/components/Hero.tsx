import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: 'url("/images/handen.jpg")' }}
            ></div>

            {/* Contrast Improvements:
                1. Heavier base overlay
                2. Additional gradient for text readability
            */}
            <div className="absolute inset-0 bg-[#F7F4F2] opacity-85"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4F2] via-transparent to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 container-custom text-center">
                <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fadeIn">
                    <span className="block text-bronze uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4 opacity-90">
                        Persoonlijke Zorg & Ondersteuning
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-title leading-tight drop-shadow-sm">
                        Welkom bij <br />
                        {/* Changed to text-bronze for better contrast against lightest beige, or kept dark if needed. 
                            User asked for "clearer contrast". Bronze (#B69D85) is darker than Champagne (#C2A079). 
                            Even better: Use the dark title color but italicized for style. */}
                        <span className="italic text-bronze">Zorgzaam Geregeld</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-text max-w-2xl mx-auto leading-relaxed font-light">
                        Uw partner voor rust, structuur en persoonlijke ondersteuning in het dagelijks leven.
                    </p>

                    <div className="pt-8">
                        {/* Utilizing the darker 'bronze' color for the button to stand out more */}
                        <Link to="/contact" className="btn-primary bg-bronze hover:bg-gold shadow-xl shadow-bronze/20 text-white border-none">
                            Neem contact op
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

