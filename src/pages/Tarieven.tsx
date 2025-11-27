import { Ticket, Sparkles, Check, Car, Clock, Calendar, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard';

const Tarieven = () => {
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
        <div>
            {/* Hero Section */}
            <section className="section-padding bg-sandstone">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-brown mb-6">
                        Tarieven
                    </h1>
                    <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto">
                        Transparante prijzen, geen verborgen kosten. Kies het pakket dat bij jou past,
                        of laten we samen een maatwerkoplossing maken.
                    </p>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="section-padding bg-beige-light">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {packages.map((pkg, index) => (
                            <PricingCard key={index} {...pkg} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Options */}
            <section className="section-padding bg-gradient-to-br from-card-bg to-sandstone">
                <div className="container-custom">
                    <h2 className="text-4xl font-serif font-bold text-dark-brown text-center mb-12">
                        Andere opties
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Strippenkaart */}
                        <div className="card">
                            <div className="flex items-center mb-4">
                                <Ticket size={32} className="text-dark-brown mr-3" />
                                <h3 className="text-2xl font-serif font-bold text-dark-brown">
                                    Strippenkaart
                                </h3>
                            </div>
                            <p className="text-dark-brown/80 mb-4">
                                Koop een strippenkaart van 10 uur en ontvang korting.
                            </p>
                            <div className="bg-sandstone p-4 rounded-lg mb-4 shadow-soft">
                                <p className="text-2xl font-bold text-dark-brown">€325</p>
                                <p className="text-dark-brown/80">10 uur à €32,50/uur</p>
                                <p className="text-sm text-dark-brown/60 mt-2">Bespaar €25 t.o.v. losse uren</p>
                            </div>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <Check size={20} className="text-dark-brown mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-dark-brown/80">Geldig 6 maanden</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text-dark-brown mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-dark-brown/80">Flexibel in te zetten</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text-dark-brown mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-dark-brown/80">Ideaal voor regelmatige hulp</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn-secondary w-full block">
                                Bestel strippenkaart
                            </Link>
                        </div>

                        {/* Maatwerk */}
                        <div className="card">
                            <div className="flex items-center mb-4">
                                <Sparkles size={32} className="text-dark-brown mr-3" />
                                <h3 className="text-2xl font-serif font-bold text-dark-brown">
                                    Maatwerkpakket
                                </h3>
                            </div>
                            <p className="text-dark-brown/80 mb-4">
                                Jouw situatie is uniek. Samen stellen we een pakket samen dat perfect bij je past.
                            </p>
                            <div className="bg-sandstone p-4 rounded-lg mb-4 shadow-soft">
                                <p className="text-xl font-bold text-dark-brown">Op maat gemaakt</p>
                                <p className="text-dark-brown/80">Prijs in overleg</p>
                            </div>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <Check size={20} className="text-dark-brown mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-dark-brown/80">Volledig op maat</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text-dark-brown mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-dark-brown/80">Combinatie van diensten mogelijk</span>
                                </li>
                                <li className="flex items-start">
                                    <Check size={20} className="text-dark-brown mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-dark-brown/80">Vaak via PGB declarabel</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn-secondary w-full block">
                                Bespreek mogelijkheden
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extra Information */}
            <section className="section-padding bg-gradient-to-br from-card-bg to-sandstone">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-dark-brown text-center mb-8">
                        Belangrijke informatie
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="card">
                            <div className="flex items-center mb-3">
                                <Car size={24} className="text-dark-brown mr-3" />
                                <h3 className="text-xl font-serif font-semibold text-dark-brown">
                                    Reiskosten
                                </h3>
                            </div>
                            <p className="text-dark-brown/80">
                                €0,23 per kilometer vanaf 10 km enkele reis. Binnen 10 km zijn de reiskosten gratis.
                            </p>
                        </div>

                        <div className="card">
                            <div className="flex items-center mb-3">
                                <Clock size={24} className="text-dark-brown mr-3" />
                                <h3 className="text-xl font-serif font-semibold text-dark-brown">
                                    Minimale afname
                                </h3>
                            </div>
                            <p className="text-dark-brown/80">
                                Minimaal 2 uur per afspraak voor huishoudelijke diensten. Voor intensieve zorg in overleg.
                            </p>
                        </div>

                        <div className="card">
                            <div className="flex items-center mb-3">
                                <Calendar size={24} className="text-dark-brown mr-3" />
                                <h3 className="text-xl font-serif font-semibold text-dark-brown">
                                    Annulering
                                </h3>
                            </div>
                            <p className="text-dark-brown/80">
                                Tot 24 uur van tevoren gratis annuleren. Bij latere annulering berekenen we 50% van het afgesproken tarief.
                            </p>
                        </div>

                        <div className="card">
                            <div className="flex items-center mb-3">
                                <CreditCard size={24} className="text-dark-brown mr-3" />
                                <h3 className="text-xl font-serif font-semibold text-dark-brown">
                                    Betaling
                                </h3>
                            </div>
                            <p className="text-dark-brown/80">
                                Betaling achteraf per factuur, of rechtstreeks via PGB. Betalingstermijn 14 dagen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tarieven;
