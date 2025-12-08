import { Mail, Phone, CheckCircle, Calendar, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-background">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-highlight mb-4">
                        Neem Contact Op
                    </h1>
                    <p className="text-xl text-nav-text max-w-3xl mx-auto">
                        Ik sta klaar om uw vragen te beantwoorden en met u mee te denken.
                    </p>
                </div>
            </header>

            {/* Contact Info Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
                        <div className="bg-white p-8 rounded-xl">
                            <div className="inline-block p-5 bg-tile/10 rounded-full mb-5 text-nav-text">
                                <Mail size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-highlight mb-2">E-mail</h3>
                            <a href="mailto:info@zorgzaamgeregeld.nl" className="text-lg text-nav-text hover:text-highlight transition-colors">
                                info@zorgzaamgeregeld.nl
                            </a>
                        </div>
                        <div className="bg-white p-8 rounded-xl">
                            <div className="inline-block p-5 bg-tile/10 rounded-full mb-5 text-nav-text">
                                <Phone size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-highlight mb-2">Telefoon</h3>
                            <a href="tel:0612345678" className="text-lg text-nav-text hover:text-highlight transition-colors">
                                06 12 34 56 78
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-tile/10">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-highlight">
                            Het Proces in Drie Stappen
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                        <div>
                            <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5 text-nav-text">
                                <Clock size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-highlight mb-2">1. Kennismaking</h3>
                            <p className="text-nav-text/80">
                                U neemt contact op. We plannen een vrijblijvend gesprek om uw wensen te bespreken.
                            </p>
                        </div>
                        <div>
                            <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5 text-nav-text">
                                <CheckCircle size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-highlight mb-2">2. Plan op Maat</h3>
                            <p className="text-nav-text/80">
                                Op basis van ons gesprek stel ik een persoonlijk plan van aanpak voor.
                            </p>
                        </div>
                        <div>
                            <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5 text-nav-text">
                                <Calendar size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-highlight mb-2">3. Start Ondersteuning</h3>
                            <p className="text-nav-text/80">
                                Na uw akkoord starten we op de afgesproken tijd. Rust en overzicht, geregeld.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
