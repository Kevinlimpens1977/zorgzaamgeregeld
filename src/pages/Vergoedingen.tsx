import { Building2, Wallet, CreditCard, FileText, Compass, Phone, Mail } from 'lucide-react';

const Vergoedingen = () => {
    return (
        <div>
            <section className="section-padding bg-beige-light">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Kaart 1: Wmo */}
                        <div className="card bg-white shadow-soft p-8">
                            <div className="flex items-center mb-6">
                                <Building2 size={32} className="text-dark-brown mr-4" strokeWidth={1.5} />
                                <h3 className="text-2xl font-serif font-bold text-dark-brown">
                                    1. Wmo (Wet maatschappelijke ondersteuning) via de gemeente
                                </h3>
                            </div>
                            <div className="text-dark-brown/80 space-y-4 leading-relaxed">
                                <p>De Wmo is er voor iedereen die ondersteuning nodig heeft om zelfstandig en prettig thuis te kunnen blijven wonen.</p>

                                <p className="font-semibold text-dark-brown">Wat kan de Wmo vergoeden?</p>
                                <ul className="list-none space-y-1 pl-0">
                                    <li>Huishoudelijke hulp</li>
                                    <li>Begeleiding thuis</li>
                                    <li>Mantelzorgondersteuning</li>
                                    <li>Structuur aanbrengen, organiseren, plannen</li>
                                    <li>Hulp bij regeltaken of administratie</li>
                                    <li>Voorbereiding op verhuizing / opschonen van woning</li>
                                    <li>(Lichte) emotionele ondersteuning / een luisterend oor</li>
                                </ul>

                                <p className="font-semibold text-dark-brown">Hoe werkt het?</p>
                                <ul className="list-none space-y-1 pl-0">
                                    <li>Je neemt contact op met jouw gemeente.</li>
                                    <li>Je legt uit welke ondersteuning je nodig hebt.</li>
                                    <li>Er volgt een keukentafelgesprek.</li>
                                    <li>Wordt het goedgekeurd? Dan krijg je een toekenning (via Zorg in Natura of PGB).</li>
                                </ul>

                                <div className="mt-4 p-4 bg-sandstone/30 rounded-lg">
                                    <p className="font-semibold text-dark-brown">Belangrijk:</p>
                                    <p>Bij veel gemeenten kun je kiezen voor een PGB (Persoonsgebonden Budget).</p>
                                    <p>En met een PGB mag jij zelf kiezen wie jou helpt — dus ook mij.</p>
                                    <p>🎉 Lekker zelf de regie!</p>
                                </div>
                            </div>
                        </div>

                        {/* Kaart 2: PGB */}
                        <div className="card bg-white shadow-soft p-8">
                            <div className="flex items-center mb-6">
                                <Wallet size={32} className="text-dark-brown mr-4" strokeWidth={1.5} />
                                <h3 className="text-2xl font-serif font-bold text-dark-brown">
                                    2. PGB (Persoonsgebonden Budget)
                                </h3>
                            </div>
                            <div className="text-dark-brown/80 space-y-4 leading-relaxed">
                                <p>Met een PGB krijg je een budget van de gemeente, waarmee jij zélf je zorgverlener kiest en betaalt.</p>

                                <p className="font-semibold text-dark-brown">Wanneer kom je in aanmerking?</p>
                                <ul className="list-none space-y-1 pl-0">
                                    <li>Als je ondersteuning nodig hebt bij dagelijks functioneren</li>
                                    <li>Als je mantelzorg ontlast moet worden</li>
                                    <li>Als je een chronische beperking hebt</li>
                                    <li>Als je begeleiding of structuur nodig hebt</li>
                                </ul>

                                <p className="font-semibold text-dark-brown">Waarmee mag je mij via PGB betalen?</p>
                                <ul className="list-none space-y-1 pl-0">
                                    <li>✔ Huishoudelijke hulp</li>
                                    <li>✔ Opruimen / schoonmaken / leeghalen woning bij verhuizing of zorgsituaties</li>
                                    <li>✔ Mantelzorgondersteuning</li>
                                    <li>✔ Begeleiding (individueel)</li>
                                    <li>✔ Structuur & planning</li>
                                    <li>✔ Hulp bij regeltaken, administratie, zorgcoördinatie</li>
                                    <li>✔ Comfortdiensten in en om het huis</li>
                                </ul>

                                <p className="font-semibold text-dark-brown">Hoe werkt het praktisch?</p>
                                <ul className="list-none space-y-1 pl-0">
                                    <li>Aanvraag doe je bij je gemeente.</li>
                                    <li>Je krijgt een indicatie (uren + soort hulp).</li>
                                    <li>We maken samen een zorgovereenkomst (model van de SVB).</li>
                                    <li>Jij keurt mijn facturen goed via het PGB-portaal.</li>
                                    <li>De SVB betaalt mij rechtstreeks uit jouw budget.</li>
                                </ul>

                                <div className="mt-4">
                                    <p>Jij hoeft dus geen geld voor te schieten.</p>
                                    <p>Hoe chill is dat? 😍</p>
                                </div>
                            </div>
                        </div>

                        {/* Kaart 3: Particulier */}
                        <div className="card bg-white shadow-soft p-8">
                            <div className="flex items-center mb-6">
                                <CreditCard size={32} className="text-dark-brown mr-4" strokeWidth={1.5} />
                                <h3 className="text-2xl font-serif font-bold text-dark-brown">
                                    3. Particulier (zelf betalen) — flexibel en zonder wachttijden
                                </h3>
                            </div>
                            <div className="text-dark-brown/80 space-y-4 leading-relaxed">
                                <p>Wil je snel starten, of is er nog geen PGB toegekend?</p>
                                <p>Dan kun je mij altijd particulier inhuren.</p>

                                <p className="font-semibold text-dark-brown">Voordelen van particulier:</p>
                                <ul className="list-none space-y-1 pl-0">
                                    <li>Geen wachtrij</li>
                                    <li>Geen keukentafelgesprek</li>
                                    <li>Je bepaalt zelf het aantal uren</li>
                                    <li>Ideaal als tijdelijke oplossing terwijl de PGB-aanvraag loopt</li>
                                    <li>Handig voor spoedsituaties (bijv. woning leeghalen, verhuisklaar maken of overzicht creëren)</li>
                                </ul>

                                <p>Particuliere facturen kun je — als je daarna nog PGB krijgt — soms alsnog declareren of meenemen in je dossier.</p>
                            </div>
                        </div>

                        {/* Kaart 4: Kostenaftrek */}
                        <div className="card bg-white shadow-soft p-8">
                            <div className="flex items-center mb-6">
                                <FileText size={32} className="text-dark-brown mr-4" strokeWidth={1.5} />
                                <h3 className="text-2xl font-serif font-bold text-dark-brown">
                                    4. Kostenaftrek bij de Belastingdienst (soms mogelijk)
                                </h3>
                            </div>
                            <div className="text-dark-brown/80 space-y-4 leading-relaxed">
                                <p>In sommige situaties zijn kosten aftrekbaar als specifieke zorgkosten (bijvoorbeeld bij ziekte of beperking).</p>
                                <p>Dit verschilt per situatie, maar kan de netto kosten flink verlagen.</p>
                                <p>Een belastingadviseur of de BelastingTelefoon kan dit bevestigen.</p>
                            </div>
                        </div>

                        {/* Kaart 5: Hoe weet ik... */}
                        <div className="card bg-sandstone/20 shadow-soft p-8 border border-sandstone/30">
                            <div className="flex items-center mb-6">
                                <Compass size={32} className="text-dark-brown mr-4" strokeWidth={1.5} />
                                <h3 className="text-2xl font-serif font-bold text-dark-brown">
                                    Hoe weet ik wat voor mij werkt?
                                </h3>
                            </div>
                            <div className="text-dark-brown/80 space-y-4 leading-relaxed">
                                <p>Geen zorgen.</p>
                                <p>Je hoeft dit allemaal niet alleen uit te pluizen.</p>

                                <ul className="list-none space-y-2 pl-0">
                                    <li>👉 Ik denk met je mee en leg je precies uit welke route bij jou past.</li>
                                    <li>👉 Ik kan je helpen met het voorbereiden van de Wmo- of PGB-aanvraag.</li>
                                    <li>👉 En ik maak alle administratie lekker helder en eenvoudig.</li>
                                </ul>

                                <p className="font-medium text-dark-brown text-lg pt-2">Samen regelen we het. Zonder gedoe. ❤️</p>
                            </div>
                        </div>

                        {/* Contactblok */}
                        <div className="text-center bg-dark-brown text-beige-light p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-serif font-bold mb-4">Wil je weten of jij in aanmerking komt?</h3>
                            <p className="mb-6 text-beige-light/90 text-lg">
                                Stuur me een berichtje of plan vrijblijvend een kennismaking.<br />
                                Ik kijk met je mee — eerlijk, helder en menselijk.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg font-medium">
                                <a href="tel:0612345678" className="flex items-center hover:text-white transition-colors">
                                    <Phone size={24} className="mr-2" />
                                    06 12 34 56 78
                                </a>
                                <a href="mailto:info@zorgzaamgeregeld.nl" className="flex items-center hover:text-white transition-colors">
                                    <Mail size={24} className="mr-2" />
                                    info@zorgzaamgeregeld.nl
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/20">
                                <p className="font-serif italic text-xl">🧡 Zorgzaam Geregeld – Rust in de wirwar van zorg</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vergoedingen;
