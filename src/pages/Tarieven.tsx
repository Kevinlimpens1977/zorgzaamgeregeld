import { Ticket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';
import { useState } from 'react';

const Tarieven = () => {
    const [selectedPackage, setSelectedPackage] = useState(1); // Default to the highlighted package

    const packages = [
        {
            title: "Rust in Huis",
            price: "€35/uur",
            description: "Ideaal voor regelmatige huishoudelijke ondersteuning",
            features: [
                "Schoonmaak en stofzuigen",
                "Was en strijk",
                "Boodschappen doen",
                "Lichte maaltijdbereiding",
                "Flexibele planning",
                "Declarabel via PGB"
            ]
        },
        {
            title: "Volledige Ontzorging",
            price: "€45/uur",
            description: "Complete huishoudelijke en persoonlijke ondersteuning",
            features: [
                "Alle diensten van 'Rust in Huis'",
                "Administratieve ondersteuning",
                "Begeleiding bij afspraken",
                "Opruimen en organiseren",
                "Persoonlijke aandacht",
                "Prioriteit bij planning",
                "Declarabel via PGB"
            ],
            highlighted: true
        },
        {
            title: "Intensieve Thuisondersteuning",
            price: "Op maat",
            description: "Voor complexe situaties en intensieve zorg",
            features: [
                "Vervuilde woningen reinigen",
                "Verhuisklaar maken",
                "Mantelzorgondersteuning",
                "Respijtzorg",
                "Crisisinterventie",
                "Volledig maatwerk",
                "Vaak volledig via PGB"
            ]
        }
    ];

    return (
        <div className="bg-cream-bg">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-dark-contrast mb-4">
                        Heldere Tarieven
                    </h1>
                    <p className="text-xl text-dark-contrast/80 max-w-3xl mx-auto">
                        Transparante en eerlijke prijzen voor zorg en ondersteuning op maat.
                    </p>
                </div>
            </header>

            {/* Pricing Packages */}
            <section className="section-padding bg-light-gray/30">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {packages.map((pkg, index) => (
                            <PricingCard
                                key={index}
                                {...pkg}
                                isSelected={selectedPackage === index}
                                onSelect={() => setSelectedPackage(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Options & Info */}
            <section className="section-padding bg-cream-bg">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-dark-contrast">
                            Flexibele Mogelijkheden
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Maatwerk */}
                        <div className="text-center">
                            <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5 text-gold-accent">
                                <Sparkles size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-dark-contrast mb-2">Maatwerk</h3>
                            <p className="text-dark-contrast/70 mb-6">
                                Iedere situatie is uniek. We stellen samen een pakket op dat perfect aansluit bij jouw wensen.
                            </p>
                            <Link to="/contact" className="btn-secondary">
                                Bespreek jouw wensen
                            </Link>
                        </div>

                        {/* Strippenkaart */}
                        <div className="text-center">
                            <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5 text-gold-accent">
                                <Ticket size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-dark-contrast mb-2">Strippenkaart</h3>
                            <p className="text-dark-contrast/70 mb-6">
                                Voor regelmatige ondersteuning met korting. Koop 10 uur en bespaar op het uurtarief.
                            </p>
                            <Link to="/contact" className="btn-secondary">
                                Bestel een kaart
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-light-gray my-20"></div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <h4 className="text-xl font-serif text-dark-contrast mb-2">Reiskosten</h4>
                            <p className="text-dark-contrast/70">€0,23/km buiten een straal van 10km.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-dark-contrast mb-2">Minimale Afname</h4>
                            <p className="text-dark-contrast/70">Minimaal 2 uur per afspraak.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-dark-contrast mb-2">Annulering</h4>
                            <p className="text-dark-contrast/70">Kosteloos tot 24 uur van tevoren.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-dark-contrast mb-2">Betaling</h4>
                            <p className="text-dark-contrast/70">Per factuur of direct via PGB.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tarieven;
