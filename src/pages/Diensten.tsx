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
        <div>
            {/* Hero Section */}
            <section className="section-padding bg-sandstone">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-brown mb-6">
                        Mijn Diensten
                    </h1>
                    <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto">
                        Professionele ondersteuning op maat. Van huishoudelijke hulp tot intensieve zorg –
                        ik ben er voor jou.
                    </p>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="section-padding bg-beige-light">
                <div className="container-custom">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Service Info */}
                                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="flex items-center mb-4">
                                        <span className="text-dark-brown mr-4">{service.icon}</span>
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-brown">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-lg text-dark-brown/80 mb-6">
                                        {service.description}
                                    </p>

                                    <div className="bg-card-bg p-6 rounded-lg mb-4 shadow-soft">
                                        <h3 className="text-xl font-serif font-semibold text-dark-brown mb-3">
                                            Voor wie?
                                        </h3>
                                        <p className="text-dark-brown/80">{service.targetGroup}</p>
                                    </div>

                                    <div className="bg-sandstone p-6 rounded-lg shadow-soft">
                                        <div className="flex items-center mb-3">
                                            <Euro size={20} className="text-dark-brown mr-2" />
                                            <h3 className="text-xl font-serif font-semibold text-dark-brown">
                                                PGB-mogelijkheden
                                            </h3>
                                        </div>
                                        <p className="text-dark-brown/80">{service.pgb}</p>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="card">
                                        <h3 className="text-2xl font-serif font-semibold text-dark-brown mb-4">
                                            Wat ik voor je doe:
                                        </h3>
                                        <ul className="space-y-3">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <Check size={20} className="text-dark-brown mr-3 mt-1 flex-shrink-0" />
                                                    <span className="text-dark-brown/80">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PGB Info Section */}
            <section className="section-padding bg-gradient-to-br from-card-bg to-sandstone">
                <div className="container-custom max-w-4xl">
                    <div className="card">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-brown mb-6 text-center">
                            Werken met PGB (Persoonsgebonden Budget)
                        </h2>
                        <div className="space-y-4 text-dark-brown/80">
                            <p className="text-lg">
                                Veel van mijn diensten zijn declarabel via PGB. Dit betekent dat je de kosten
                                (gedeeltelijk) vergoed kunt krijgen vanuit je zorgbudget.
                            </p>
                            <p>
                                <strong className="text-dark-brown">Hoe werkt het?</strong><br />
                                Als je een PGB hebt, kun je mij inhuren als zorgverlener. Ik help je graag met
                                de administratie en declaraties, zodat het voor jou zo makkelijk mogelijk is.
                            </p>
                            <p>
                                <strong className="text-dark-brown">Nog geen PGB?</strong><br />
                                Ik kan je adviseren over de mogelijkheden en je helpen bij het aanvragen van
                                een PGB als dit voor jou geschikt is.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-dark-brown text-beige-light">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-beige-light">
                        Welke dienst past bij jou?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-beige-light/90">
                        Twijfel je welke ondersteuning je nodig hebt? Neem contact op voor een
                        vrijblijvend gesprek. Samen kijken we wat het beste bij jouw situatie past.
                    </p>
                    <Link to="/contact" className="btn-primary bg-beige-light text-dark-brown hover:bg-sandstone hover:text-dark-brown shadow-none">
                        Neem contact op
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Diensten;
