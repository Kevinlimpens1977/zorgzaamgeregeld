import { Link } from 'react-router-dom';
import { Home as HomeIcon, Package, Truck, Heart, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ReviewCarousel from '../components/ReviewCarousel';
import { useState } from 'react';
import daanImage from '../assets/danielle.jpg';

const Home = () => {
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    const services = [
        {
            title: "Huishoudelijke ondersteuning",
            description: "Van stofzuigen tot boodschappen doen – ik neem de dagelijkse taken over zodat jij kunt uitrusten.",
            icon: <HomeIcon size={28} strokeWidth={1} />,
        },
        {
            title: "Opruimen & structuur",
            description: "Chaos in huis? Ik help je met opruimen, sorteren en een systeem creëren dat bij jou past.",
            icon: <Package size={28} strokeWidth={1} />,
        },
        {
            title: "Verhuisklaar maken",
            description: "Een verhuizing kan overweldigend zijn. Ik pak in, regel en zorg dat alles soepel verloopt.",
            icon: <Truck size={28} strokeWidth={1} />,
        },
        {
            title: "Vervuilde woningen reinigen",
            description: "Ook bij ernstige vervuiling pak ik het aan – zonder oordeel, met respect en professionaliteit.",
            icon: <Sparkles size={28} strokeWidth={1} />,
        },
        {
            title: "Mantelzorg-ondersteuning",
            description: "Zorg jij voor een naaste? Ik ondersteun jou, zodat je even kunt ademhalen.",
            icon: <Heart size={28} strokeWidth={1} />,
        },
        {
            title: "Gezelschap & Aandacht",
            description: "Een luisterend oor, een wandeling of samen een kopje koffie. Persoonlijke aandacht staat voorop.",
            icon: <Heart size={28} strokeWidth={1} />,
        },
    ];

    return (
        <div className="min-h-screen">
            <Hero />

            {/* Intro Section - Minimalist & Spacious */}
            <section className="section-padding relative bg-base">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-title italic leading-tight">
                            Soms loopt het leven over..
                        </h2>
                        <div className="divider-vertical"></div>
                        <p className="text-lg md:text-xl text-text font-light leading-relaxed">
                            Mantelzorgen voor een naaste, jouw eigen huishouden bijhouden, de administratie niet laten liggen, spullen die zich opstapelen of een verhuizing die ineens sneller gaat dan je had gedacht…
                        </p>
                        <p className="text-lg md:text-xl text-text font-light leading-relaxed mt-4">
                            Zorgzaam Geregeld helpt je overzicht terug te krijgen. Met praktische hulp die écht ontlast
                        </p>
                        <p className="text-lg md:text-xl text-text font-light leading-relaxed mt-4">
                            Zorgzaam Geregeld…
                        </p>
                        <p className="text-lg md:text-xl text-text font-bold leading-relaxed mt-4">
                            Omdat NIEMAND dit alleen hoeft te dragen!
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section - Elegant Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-title mb-4">Hoe kan ik jou helpen?</h2>
                        <div className="w-24 h-[1px] bg-champagne mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}
                                className="h-full"
                            >
                                <ServiceCard {...service} isHovered={hoveredService === index} />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Link to="/diensten" className="btn-secondary">
                            Meer info over mijn diensten
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Me Section - Round Photo Layout */}
            <section className="section-padding bg-surface overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Image Column */}
                        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[1px] border-gold p-3 relative">
                                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                                    <img
                                        src={daanImage}
                                        alt="Danielle"
                                        className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-110"
                                    />
                                </div>
                                {/* Decorative circle */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 border border-champagne/30 rounded-full -z-10 animate-pulse"></div>
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="order-1 lg:order-2 text-center lg:text-left">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Over Mij</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-title mb-8">
                                Persoonlijk, warm <br /> <span className="italic text-champagne">& professioneel.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-text/80 font-light leading-relaxed">
                                <p>
                                    Ik ben geen grote organisatie; ik ben jouw persoonlijke partner in zorg. Met jarenlange ervaring en een hart voor mensen, bied ik betrouwbare ondersteuning, altijd zonder oordeel.
                                </p>
                                <p>
                                    Mijn aanpak is simpel: ik kijk naar wat er nodig is en pak het aan. Of het nu gaat om praktische hulp of emotionele steun.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link to="/over-mij" className="btn-text">
                                    Leer mij beter kennen
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / Divider Section */}
            <section className="py-24 bg-base text-center">
                <div className="container-custom">
                    <div className="divider-gold max-w-2xl mx-auto"></div>
                    <blockquote className="font-serif text-2xl md:text-3xl text-title italic max-w-4xl mx-auto leading-relaxed">
                        "Jij verdient ruimte in je hoofd, <br /> ik regel de rest."
                    </blockquote>
                    <div className="divider-gold max-w-2xl mx-auto"></div>
                </div>
            </section>

            {/* For Who Section - Clean List */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4">Mijn Doelgroep</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-title mb-12">
                        ik bied ondersteuning voor:
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {[
                            "Ouderen",
                            "Mantelzorgers"
                        ].map((item, index) => (
                            <div key={index} className="px-8 py-4 border border-surface rounded-full text-text hover:border-gold hover:text-gold hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-default">
                                <span className="font-light tracking-wide">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Minimalist */}
            <section className="section-padding bg-taupe text-white text-center">
                <div className="container-custom">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                        Klaar voor meer rust?
                    </h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto font-light text-white/90">
                        Laten we vrijblijvend kennismaken. Samen ontdekken we hoe ik jou het beste kan ondersteunen.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-taupe px-10 py-4 rounded-sm transition-all duration-300 hover:bg-champagne hover:text-white uppercase tracking-widest text-sm font-bold">
                        Neem contact op
                    </Link>
                </div>
            </section>

            <ReviewCarousel />
        </div>
    );
};

export default Home;
