import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background logic moved to GlobalBackground for site-wide consistency */}

            {/* Content */}
            <div className="relative z-10 container-custom text-center">
                <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-fadeIn">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-title leading-tight drop-shadow-sm">
                        Welkom bij <br />
                        <span className="italic text-bronze">Zorgzaam Geregeld</span>
                    </h1>

                    <p className="text-xl md:text-3xl text-gold font-serif italic mt-4">
                        Jouw rust in de wirwar van zorg
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

