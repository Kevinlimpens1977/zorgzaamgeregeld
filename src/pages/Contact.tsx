const Contact = () => {
    return (
        <div className="bg-base min-h-screen">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center bg-surface/30">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-title mb-4">
                        Neem Contact Op
                    </h1>
                    <p className="text-xl text-text/80 max-w-3xl mx-auto font-light leading-relaxed">
                        Ik sta klaar om jouw vragen te beantwoorden en met je mee te denken.
                    </p>
                </div>
            </header>

            {/* Contact Info Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
                        <div className="bg-white p-12 shadow-soft border border-surface group hover:border-gold transition-all duration-500">
                            <div className="flex justify-center mb-6">
                                <div className="w-3 h-3 rounded-full bg-gold transition-transform duration-500 group-hover:scale-125"></div>
                            </div>
                            <h3 className="text-2xl font-serif text-title mb-4">E-mail</h3>
                            <a href="mailto:info@zorgzaamgeregeld.nl" className="text-lg text-text hover:text-gold transition-colors block pb-2 border-b border-transparent hover:border-gold/30 w-fit mx-auto">
                                info@zorgzaamgeregeld.nl
                            </a>
                        </div>
                        <div className="bg-white p-12 shadow-soft border border-surface group hover:border-gold transition-all duration-500">
                            <div className="flex justify-center mb-6">
                                <div className="w-3 h-3 rounded-full bg-gold transition-transform duration-500 group-hover:scale-125"></div>
                            </div>
                            <h3 className="text-2xl font-serif text-title mb-4">Telefoon</h3>
                            <a href="tel:0612345678" className="text-lg text-text hover:text-gold transition-colors block pb-2 border-b border-transparent hover:border-gold/30 w-fit mx-auto">
                                06 - 12 34 56 78
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-surface/20">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif text-title">
                            Het Proces in Drie Stappen
                        </h2>
                        <div className="w-24 h-[1px] bg-gold mx-auto mt-6"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <div className="w-4 h-4 rounded-full border-2 border-gold flex items-center justify-center p-0.5">
                                    <div className="w-full h-full rounded-full bg-gold"></div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif text-title italic">1. Kennismaking</h3>
                            <p className="text-text/80 leading-relaxed font-light">
                                Je neemt contact op. We plannen een vrijblijvend gesprek om jouw wensen te bespreken.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <div className="w-4 h-4 rounded-full border-2 border-gold flex items-center justify-center p-0.5">
                                    <div className="w-full h-full rounded-full bg-gold"></div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif text-title italic">2. Plan op Maat</h3>
                            <p className="text-text/80 leading-relaxed font-light">
                                Op basis van ons gesprek stel ik een persoonlijk plan van aanpak voor.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <div className="w-4 h-4 rounded-full border-2 border-gold flex items-center justify-center p-0.5">
                                    <div className="w-full h-full rounded-full bg-gold"></div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-serif text-title italic">3. Start Ondersteuning</h3>
                            <p className="text-text/80 leading-relaxed font-light">
                                Na jouw akkoord starten we op de afgesproken tijd. Rust en overzicht, geregeld.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Message Section */}
            <section className="section-padding bg-white">
                <div className="container-custom text-center">
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div className="w-2 h-2 rounded-full bg-gold mx-auto"></div>
                        <p className="text-2xl md:text-3xl font-serif text-title italic leading-relaxed">
                            “Ik neem altijd zo snel mogelijk contact met je op — <br className="hidden md:block" />
                            vaak nog dezelfde dag, uiterlijk binnen 24 uur. <br />
                            Je staat er niet alleen voor. Ik help je graag.”
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
