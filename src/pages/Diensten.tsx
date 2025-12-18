import { Link } from 'react-router-dom';

const Diensten = () => {
    const services = [
        {
            title: "Gezelschap & Aandacht",
            description: "Soms is er niet méér nodig dan iemand die er gewoon is. Een fijn praatje, een luisterend oor, samen een kopje koffie of een wandeling.",
            intro: "Ouderen missen vaak contact, en mantelzorgers kunnen niet altijd overal tegelijk zijn. Daarom bied ik gezelschap op een warme, rustige en persoonlijke manier. Zonder haast, zonder oordeel, zonder druk.",
            details: [
                "Gezellig Koffiedrinken",
                "Wandeling of Even Naar Buiten",
                "Samen Een Spelletje Doen",
                "Een Luisterend Oor, Verhalen Delen",
                "Rustige Aanwezigheid in Huis",
                "Tijd Tegen Eenzaamheid",
                "Aanwezigheid Wanneer Familie Er Even Niet Kan Zijn"
            ],
            footer: "Mijn doel: dat iemand zich gezien, gehoord en veilig voelt."
        },
        {
            title: "Huishoudelijke Ondersteuning",
            description: "Van basis opfrisbeurt tot een grondige schoonmaak.",
            intro: "Met aandacht voor ritme, wensen en energie van senioren en mantelzorgers zorg ik voor rust en een schone leefomgeving.",
            details: [
                "Stofzuigen en dweilen",
                "Sanitair en keuken reinigen",
                "Bedden verschonen",
                "Ramen lappen binnenzijde",
                "Afwassen en opruimen"
            ]
        },
        {
            title: "Mantelzorg Ondersteuning",
            description: "Ik weet hoe intens mantelzorg kan zijn, ik heb het jarenlang zelf gedaan.",
            intro: "Daarom bied ik praktische ondersteuning, luisterruimte en neem ik taken over wanneer dat nodig is. Zodat jij ook even kunt ademen.",
            details: [
                "Ondersteuning bij dagelijkse taken",
                "Respijtzorg (tijdelijke overname)",
                "Administratieve ondersteuning",
                "Begeleiding bij afspraken"
            ]
        },
        {
            title: "Opruimen & Structuur",
            description: "Rust in huis = rust in je hoofd.",
            intro: "Ik help met sorteren, ordenen, minimaliseren en het creëren van overzicht voor senioren en mantelzorgers.",
            details: [
                "Kasten en kamers uitzoeken",
                "Systemen creëren voor post en administratie",
                "Keuzes maken: bewaren, weggeven of wegdoen",
                "Overzicht terugbrengen in chaos"
            ]
        },
        {
            title: "Verhuisklaar Maken",
            description: "Voor ouderen die naar een zorginstelling verhuizen, of woningen die netjes moeten worden opgeleverd.",
            intro: "Ik regel alles: van opruimen tot schoonmaak.",
            details: [
                "Inpakken van eigendommen",
                "Sorteren voor verhuizing of afvoer",
                "Schoonmaak na ontruiming",
                "Coördinatie op de verhuisdag"
            ]
        },
        {
            title: "Vervuilde Woningen Reinigen",
            description: "(Particulier én voor makelaars/woningbouw)",
            intro: "Respectvol, discreet en professioneel. Ik pak ernstige vervuiling aan met structuur en kalmte en zonder oordeel.",
            details: [
                "Grondige dieptereiniging",
                "Afvalverwijdering",
                "Desinfectie van sanitaire ruimtes",
                "Leefbaar en toonbaar maken van de woning"
            ]
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
                        Flexibele, professionele ondersteuning, volledig afgestemd op jouw persoonlijke behoeften.
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
                                    <div className="mb-5">
                                        <div className="w-3 h-3 rounded-full bg-gold inline-block"></div>
                                    </div>
                                    <h2 className="text-3xl font-serif text-dark-contrast">
                                        {service.title}
                                    </h2>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-xl text-dark-contrast font-serif italic mb-4">
                                        {service.description}
                                    </p>
                                    <p className="text-lg text-dark-contrast/80 mb-6 leading-relaxed">
                                        {service.intro}
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="w-2 h-2 rounded-full bg-gold mr-4 flex-shrink-0 mt-2.5"></span>
                                                <span className="text-dark-contrast/70 text-lg">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {service.footer && (
                                        <p className="text-lg font-serif italic text-gold mt-6 border-t border-gold/20 pt-4">
                                            {service.footer}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PGB Info Section */}
            <section className="section-padding bg-cream-bg">
                <div className="container-custom max-w-4xl text-center">
                    <div className="mb-5">
                        <div className="w-4 h-4 rounded-full bg-gold inline-block"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-contrast mb-6">
                        Financiering via PGB
                    </h2>
                    <div className="prose prose-lg mx-auto text-dark-contrast/80">
                        <p>
                            Veel van mijn diensten kunnen worden gefinancierd vanuit een Persoonsgebonden Budget (PGB). Dit biedt je de vrijheid om zelf jouw zorgverlener te kiezen.
                        </p>
                        <p>
                            Heb je vragen over de mogelijkheden of hulp nodig bij de administratie? Ik adviseer en ondersteun je graag.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-light-gray/30">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-contrast mb-6">
                        Welke dienst past bij jou?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-contrast/80">
                        Iedere situatie is uniek. Laten we vrijblijvend jouw wensen bespreken en de perfecte oplossing vinden.
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
