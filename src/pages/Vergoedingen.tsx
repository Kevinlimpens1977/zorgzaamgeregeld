import { Phone, Mail } from 'lucide-react';

const Vergoedingen = () => {
    return (
        <div className="bg-background">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-highlight mb-4">
                        Vergoedingen & Mogelijkheden
                    </h1>
                    <p className="text-xl text-nav-text max-w-3xl mx-auto">
                        Ontdek hoe uw zorg en ondersteuning gefinancierd kunnen worden.
                    </p>
                </div>
            </header>

            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Kaart 1: Wmo */}
                        <div className="card bg-white p-8">
                            <h3 className="text-3xl font-serif font-medium text-highlight mb-4">
                                Wmo (Wet maatschappelijke ondersteuning)
                            </h3>
                            <div className="prose prose-lg max-w-none text-nav-text">
                                <p>De Wmo, uitgevoerd door uw gemeente, helpt u om zelfstandig te blijven wonen. Dit omvat diensten zoals huishoudelijke hulp, begeleiding en mantelzorgondersteuning, vaak te financieren via een PGB.</p>
                            </div>
                        </div>

                        {/* Kaart 2: PGB */}
                        <div className="card bg-white p-8">
                            <h3 className="text-3xl font-serif font-medium text-highlight mb-4">
                                PGB (Persoonsgebonden Budget)
                            </h3>
                            <div className="prose prose-lg max-w-none text-nav-text">
                                <p>Met een PGB kiest u zelf uw zorgverlener. Ik help u met de aanvraag en zorgovereenkomst, waarna de SVB mij rechtstreeks uit uw budget betaalt. U heeft volledige regie, zonder financieel voorschieten.</p>
                            </div>
                        </div>

                        {/* Kaart 3: Particulier */}
                        <div className="card bg-white p-8">
                            <h3 className="text-3xl font-serif font-medium text-highlight mb-4">
                                Particuliere Inhuur
                            </h3>
                            <div className="prose prose-lg max-w-none text-nav-text">
                                <p>Wilt u direct starten zonder wachttijden of indicatieproces? Particuliere inhuur biedt maximale flexibiliteit en is ideaal voor spoed of als overbrugging. Facturen kunnen soms later alsnog gedeclareerd worden.</p>
                            </div>
                        </div>

                        {/* Kaart 4: Kostenaftrek */}
                        <div className="card bg-white p-8">
                            <h3 className="text-3xl font-serif font-medium text-highlight mb-4">
                                Fiscale Aftrek
                            </h3>
                            <div className="prose prose-lg max-w-none text-nav-text">
                                <p>Afhankelijk van uw situatie, kunnen de kosten voor zorg aftrekbaar zijn bij de Belastingdienst als 'specifieke zorgkosten'. Dit kan uw netto uitgaven aanzienlijk verlagen. Raadpleeg een adviseur voor details.</p>
                            </div>
                        </div>

                        {/* Advies Kaart */}
                        <div className="bg-tile/20 p-10 rounded-xl text-center">
                            <h3 className="text-3xl font-serif text-highlight mb-4">
                                Samen vinden we de juiste weg.
                            </h3>
                            <p className="text-xl text-nav-text max-w-2xl mx-auto mb-6">
                                Het zorglandschap kan complex zijn. Ik help u kosteloos met het uitzoeken van de beste financieringsroute voor uw situatie en ondersteun u bij de aanvraag.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg font-medium text-nav-text">
                                <a href="tel:0612345678" className="flex items-center hover:text-highlight transition-colors">
                                    <Phone size={24} className="mr-2" />
                                    06 12 34 56 78
                                </a>
                                <a href="mailto:info@zorgzaamgeregeld.nl" className="flex items-center hover:text-highlight transition-colors">
                                    <Mail size={24} className="mr-2" />
                                    info@zorgzaamgeregeld.nl
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vergoedingen;
