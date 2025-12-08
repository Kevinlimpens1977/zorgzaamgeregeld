import { Home as HomeIcon, Package, Truck, Sparkles, Heart, Check, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';

const Diensten = () => {
    const services = [
        {
            title: "Huishoudelijke ondersteuning",
            icon: <HomeIcon size={40} />,
            description: "Van stofzuigen tot boodschappen doen – ik neem de dagelijkse taken over zodat jij kunt uitrusten.",
            details: [
                "Schoonmaak en stofzuigen van alle ruimtes",
                "Was, strijk en opvouwen van kleding",
                "Boodschappen doen en maaltijden bereiden",
                "Afwassen en keuken opruimen",
                "Bedden verschonen",
                "Ramen lappen"
            ],
            targetGroup: "Perfect voor ouderen, mensen met een beperking, drukke gezinnen of iedereen die tijdelijk extra hulp nodig heeft.",
            pgb: "Deze dienst is declarabel via PGB (Persoonsgebonden Budget)."
        },
        {
            title: "Opruimen & structuur",
            icon: <Package size={40} />,
            description: "Chaos in huis? Ik help je met opruimen, sorteren en een systeem creëren dat bij jou past.",
            details: [
                "Kasten en ruimtes organiseren",
                "Spullen sorteren: bewaren, doneren of weggooien",
                "Praktische opbergsystemen creëren",
                "Overzicht en structuur aanbrengen",
                "Administratie ordenen",
                "Duurzame oplossingen voor langdurig overzicht"
            ],
            targetGroup: "Ideaal voor mensen die overweldigd zijn door rommel, verhuizen, of gewoon een frisse start willen.",
            pgb: "Opruimen en structuur kan onder bepaalde voorwaarden via PGB gedeclareerd worden."
        },
        {
            title: "Verhuisklaar maken",
            icon: <Truck size={40} />,
            description: "Een verhuizing kan overweldigend zijn. Ik pak in, regel en zorg dat alles soepel verloopt.",
            details: [
                "Inpakken van alle spullen met zorg",
                "Labelen van dozen voor overzicht",
                "Coördinatie met verhuisbedrijf",
                "Uitpakken op de nieuwe locatie",
                "Inrichten en organiseren van de nieuwe woning",
                "Afvoeren van overtollige spullen"
            ],
            targetGroup: "Voor ouderen die verhuizen naar een kleinere woning, gezinnen in transitie, of iedereen die verhuisstress wil vermijden.",
            pgb: "Verhuishulp kan in sommige gevallen via PGB vergoed worden, afhankelijk van je indicatie."
        },
        {
            title: "Vervuilde woningen reinigen",
            icon: <Sparkles size={40} />,
            description: "Ook bij ernstige vervuiling pak ik het aan – zonder oordeel, met respect en professionaliteit.",
            details: [
                "Grondige reiniging van alle ruimtes",
                "Desinfectie en sanitaire voorzieningen",
                "Afvalverwerking en opruimen",
                "Herstel van leefbaarheid",
                "Samenwerking met specialisten indien nodig",
                "Nazorg en onderhoud"
            ],
            targetGroup: "Voor mensen in een moeilijke levensfase, met psychische problemen, of naasten die ondersteuning zoeken.",
            pgb: "Deze intensieve zorg kan vaak via PGB gedeclareerd worden. Neem contact op voor meer informatie."
        },
        {
            title: "Mantelzorg-ondersteuning",
            icon: <Heart size={40} />,
            description: "Zorg jij voor een naaste? Ik ondersteun jou, zodat je even kunt ademhalen.",
            details: [
                "Respijtzorg: ik neem tijdelijk over",
                "Praktische ondersteuning in het huishouden",
                "Administratieve hulp (zorgaanvragen, declaraties)",
                "Begeleiding bij afspraken",
                "Emotionele steun en een luisterend oor",
                "Advies over beschikbare zorgvoorzieningen"
            ],
            targetGroup: "Voor mantelzorgers die overbelast zijn, even willen ontspannen, of praktische hulp nodig hebben.",
            pgb: "Respijtzorg en mantelzorgondersteuning zijn vaak via PGB te declareren."
        }
    ];

    return (
        <div className="bg-cream-bg">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-dark-contrast mb-4">
                        Mijn Diensten
                    </h1>
                    <p className="text-xl text-dark-contrast/80 max-w-3xl mx-auto">
                        Flexibele, professionele ondersteuning, volledig afgestemd op uw persoonlijke behoeften.
                    </p>
                </div>
            </header>

            {/* Services List Section */}
            <section className="section-padding bg-light-gray/30">
                <div className="container-custom">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                                <div className="md:col-span-1 text-center md:text-left">
                                    <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5 text-gold-accent">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-serif text-dark-contrast">
                                        {service.title}
                                    </h2>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-lg text-dark-contrast/80 mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.details.slice(0, 4).map((detail, idx) => ( // Show first 4
                                            <li key={idx} className="flex items-center">
                                                <Check size={18} className="text-gold-accent mr-3 flex-shrink-0" />
                                                <span className="text-dark-contrast/70">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* PGB Info Section */}
            <section className="section-padding bg-cream-bg">
                <div className="container-custom max-w-4xl text-center">
                     <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5 text-gold-accent">
                        <Euro size={40} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-contrast mb-6">
                        Financiering via PGB
                    </h2>
                    <div className="prose prose-lg mx-auto text-dark-contrast/80">
                        <p>
                            Veel van mijn diensten kunnen worden gefinancierd vanuit een Persoonsgebonden Budget (PGB). Dit biedt u de vrijheid om zelf uw zorgverlener te kiezen.
                        </p>
                        <p>
                            Heeft u vragen over de mogelijkheden of hulp nodig bij de administratie? Ik adviseer en ondersteun u graag.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-light-gray/30">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-contrast mb-6">
                        Welke dienst past bij u?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-contrast/80">
                        Iedere situatie is uniek. Laten we vrijblijvend uw wensen bespreken en de perfecte oplossing vinden.
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Start het gesprek
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Diensten;
