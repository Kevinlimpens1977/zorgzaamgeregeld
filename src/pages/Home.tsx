import { Link } from 'react-router-dom';
import { Home as HomeIcon, Package, Truck, Sparkles, Heart, Handshake, ShieldCheck, Star, Check } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    const services = [
        {
            title: "Huishoudelijke ondersteuning",
            description: "Van stofzuigen tot boodschappen doen – ik neem de dagelijkse taken over zodat jij kunt uitrusten.",
            icon: <HomeIcon size={32} />,
            features: [
                "Schoonmaak en stofzuigen",
                "Was en strijk",
                "Boodschappen doen",
                "Maaltijden bereiden"
            ]
        },
        {
            title: "Opruimen & structuur",
            description: "Chaos in huis? Ik help je met opruimen, sorteren en een systeem creëren dat bij jou past.",
            icon: <Package size={32} />,
            features: [
                "Kasten en ruimtes organiseren",
                "Spullen sorteren en doneren",
                "Structuur aanbrengen",
                "Overzicht creëren"
            ]
        },
        {
            title: "Verhuisklaar maken",
            description: "Een verhuizing kan overweldigend zijn. Ik pak in, regel en zorg dat alles soepel verloopt.",
            icon: <Truck size={32} />,
            features: [
                "Inpakken en labelen",
                "Coördinatie verhuizing",
                "Uitpakken op nieuwe locatie",
                "Inrichten nieuwe woning"
            ]
        },
        {
            title: "Vervuilde woningen reinigen",
            description: "Ook bij ernstige vervuiling pak ik het aan – zonder oordeel, met respect en professionaliteit.",
            icon: <Sparkles size={32} />,
            features: [
                "Grondige reiniging",
                "Desinfectie",
                "Afvalverwerking",
                "Herstel leefbaarheid"
            ]
        },
        {
            title: "Mantelzorg-ondersteuning",
            description: "Zorg jij voor een naaste? Ik ondersteun jou, zodat je even kunt ademhalen.",
            icon: <Heart size={32} />,
            features: [
                "Respijtzorg",
                "Praktische ondersteuning",
                "Administratieve hulp",
                "Emotionele steun"
            ]
        }
    ];

    return (
        <div>
            <Hero />

            {/* Intro Section */}
            <section className="section-padding bg-beige-light">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center animate-fadeIn">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-brown mb-6">
                            Welkom bij Zorgzaam Geregeld
                        </h2>
                        <p className="text-lg md:text-xl text-dark-brown/80 leading-relaxed mb-4">
                            Soms is het leven gewoon te veel. Te druk, te chaotisch, te zwaar.
                            Of misschien zorg je voor een ander en kom je zelf niet meer toe aan rust.
                        </p>
                        <p className="text-lg md:text-xl text-dark-brown/80 leading-relaxed mb-8">
                            Ik ben er om jou te ontlasten. Met warme aandacht, professionele handen en
                            een no-nonsense aanpak pak ik aan wat jij even niet kunt. Zodat jij weer
                            kunt ademhalen.
                        </p>
                        <div className="flex justify-center">
                            <Link to="/aanpak" className="btn-secondary">
                                Weet je niet zeker wat je nodig hebt? Doe de quiz
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-sandstone">
                <div className="container-custom">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-brown text-center mb-12">
                        Mijn Diensten
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/diensten" className="btn-primary">
                            Bekijk alle diensten
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Me Section */}
            <section className="section-padding bg-beige-light">
                <div className="container-custom">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-brown text-center mb-12">
                        Waarom kiezen voor mij?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 card bg-white/50 border-none shadow-none">
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <Handshake size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-dark-brown mb-3">
                                Persoonlijk & Betrokken
                            </h3>
                            <p className="text-dark-brown/80">
                                Geen grote organisatie, maar één persoon die écht voor je klaarstaat.
                                Ik luister, begrijp en handel.
                            </p>
                        </div>
                        <div className="text-center p-6 card bg-white/50 border-none shadow-none">
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <ShieldCheck size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-dark-brown mb-3">
                                Ervaren & Professioneel
                            </h3>
                            <p className="text-dark-brown/80">
                                Jarenlange ervaring in mantelzorg en huishoudelijke ondersteuning.
                                Ik weet wat er komt kijken.
                            </p>
                        </div>
                        <div className="text-center p-6 card bg-white/50 border-none shadow-none">
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <Star size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif font-semibold text-dark-brown mb-3">
                                Zonder Oordeel
                            </h3>
                            <p className="text-dark-brown/80">
                                Wat de situatie ook is – ik kom zonder oordeel. Met respect,
                                warmte en een praktische aanpak.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Who Section */}
            <section className="section-padding bg-gradient-to-br from-card-bg to-sandstone">
                <div className="container-custom">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-brown text-center mb-12">
                        Voor wie?
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Mantelzorgers die even willen ademhalen",
                                "Ouderen die hulp nodig hebben in huis",
                                "Mensen met een beperking",
                                "Drukke gezinnen die ondersteuning zoeken",
                                "Mensen in een moeilijke levensfase",
                                "Iedereen die praktische hulp kan gebruiken"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start bg-beige-light p-4 rounded-lg shadow-soft hover:shadow-md transition-shadow">
                                    <Check size={20} className="text-dark-brown mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-dark-brown font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-dark-brown text-beige-light">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-beige-light">
                        Klaar voor een kennismaking?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-beige-light/90">
                        Neem vrijblijvend contact op. We bespreken jouw situatie en kijken samen
                        hoe ik je het beste kan helpen.
                    </p>
                    <Link to="/contact" className="btn-primary bg-beige-light text-dark-brown hover:bg-sandstone hover:text-dark-brown shadow-none">
                        Plan een kennismaking
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
