import { Mail, Phone, MapPin, CheckCircle, Calendar, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="section-padding bg-sandstone">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-brown mb-6">
                        Contact
                    </h1>
                    <p className="text-xl text-dark-brown/80 max-w-3xl mx-auto">
                        Heb je vragen of wil je kennismaken? Neem gerust contact op.
                        Ik sta je graag te woord om te kijken wat ik voor je kan betekenen.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="section-padding bg-beige-light">
                <div className="container-custom max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="card text-center">
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                Email
                            </h3>
                            <a href="mailto:info@zorgzaamgeregeld.nl" className="text-dark-brown/80 hover:text-dark-brown">
                                info@zorgzaamgeregeld.nl
                            </a>
                        </div>

                        <div className="card text-center">
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <Phone size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                Telefoon
                            </h3>
                            <a href="tel:0612345678" className="text-dark-brown/80 hover:text-dark-brown">
                                06 12 34 56 78
                            </a>
                        </div>

                        <div className="card text-center">
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <MapPin size={32} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                Werkgebied
                            </h3>
                            <p className="text-dark-brown/80">
                                Nederland
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="section-padding bg-gradient-to-br from-card-bg to-sandstone">
                <div className="container-custom max-w-4xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-dark-brown mb-6">
                        Hoe nu verder?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <Clock size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                Contact opnemen
                            </h3>
                            <p className="text-dark-brown/80">
                                Bel of mail mij met je hulpvraag. Ik probeer altijd binnen 24 uur te reageren.
                            </p>
                        </div>
                        <div>
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <CheckCircle size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                Vrijblijvend gesprek
                            </h3>
                            <p className="text-dark-brown/80">
                                We bespreken jouw situatie en kijken samen wat de beste aanpak is.
                            </p>
                        </div>
                        <div>
                            <div className="text-dark-brown mb-4 flex justify-center">
                                <Calendar size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                Direct aan de slag
                            </h3>
                            <p className="text-dark-brown/80">
                                Als we een match zijn, kunnen we vaak binnen een week starten met de ondersteuning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
