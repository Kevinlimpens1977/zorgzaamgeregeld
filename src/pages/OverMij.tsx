import { Link } from 'react-router-dom';

const OverMij = () => {
    return (
        <div className="">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-dark-contrast">
                        Over Mij
                    </h1>
                </div>
            </header>

            {/* Intro Section - Clean Content covering the background */}
            <section className="pb-24 bg-base pt-16 rounded-t-3xl shadow-soft negative-margin-top">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-xl max-w-none">
                            <h2 className="text-4xl font-serif text-dark-contrast mb-6">
                                Gedreven door ervaring, met een hart voor zorg.
                            </h2>
                            <div className="text-dark-contrast/80 space-y-4">
                                <p>
                                    Mijn naam is Daniëlle Sleijser. Ik ben zelf 7 jaar lang mantelzorger geweest voor mijn vader. Een prachtige, maar soms ook overweldigende periode. Ik probeerde elke dag weer de balans te vinden tussen liefde, verantwoordelijkheid, vermoeidheid en de wens om alles zo goed mogelijk te doen.
                                </p>
                                <p>
                                    Ik wist altijd wel dat er veel mogelijk was qua ondersteuning vanuit de overheid, maar ik deed hier niet veel mee want: “Ik kan dat heus allemaal wel zelf joh!” Overprikkeld en vermoeid rende ik jarenlang heen en weer tussen mijn gezin, mijn werk en mijn vader. Vlak voordat mijn vader stierf, ontdekte ik eigenlijk pas de enorme hoeveelheid aan vergoedingen en regelingen zoals het PGB en de WMO en begon ik me af te vragen of ik dan de enige was die hier amper gebruik van had gemaakt. Want hoeveel eenzame ouderen en vermoeide mantelzorgers lopen er wellicht rond in Nederland?
                                </p>
                                <p>
                                    Zo ontstond het idee voor Zorgzaam Geregeld. Ik wilde op die manier gaan zorgen voor mijn vader! Maar helaas, vlak voordat ik wilde starten overleed mijn vader onverwachts…
                                </p>
                                <p className="font-medium italic">
                                    Dat zette mijn wereld even stil…
                                </p>
                                <p>
                                    Maar langzaamaan in die stilte, voelde ik een passie geboren worden en zag ik mijn missie helderder dan ooit: Ik ga dit bedrijf dóórzetten! Voor hem, voor mezelf én voor iedereen die dezelfde zorglast draagt.
                                </p>
                                <p>
                                    Ik weet uit eigen ervaring hoe het voelt als:
                                </p>
                                <ul className="list-none space-y-2 pl-4 border-l-2 border-gold/30">
                                    <li>– Je hoofd altijd vol zit</li>
                                    <li>– Het huishouden achterloopt</li>
                                    <li>– Je agenda geleefd wordt</li>
                                    <li>– De administratie zich opstapelt</li>
                                    <li>– En jij zelf eigenlijk nergens meer aan toe komt…</li>
                                </ul>
                                <p>
                                    En ook al doe je zo je best, het gevoel dat je tekort schiet knaagt. Want onze ouders verdienen onze aandacht! Maar helaas heeft een dag maar 24 uur…
                                </p>
                                <p>
                                    En daarom doe ik nu precies waar ik destijds zelf zo naar verlangde: Met aandacht en rust klaarstaan voor ouderen, hen helpen in het dagelijkse leven en tegelijkertijd mantelzorgers ontlasten die vaak veel meer dragen dan ze laten zien.
                                </p>
                                <p>
                                    Met mijn ervaring én mijn nuchtere, professionele aanpak kijken we samen wat er nodig is en gaan we het stap voor stap oplossen.
                                </p>
                                <p>
                                    Ik werk met humor, menselijkheid en een flinke dosis nuchterheid. Geen oordeel, geen ingewikkeld gedoe maar gewoon iemand die begrijpt waar je doorheen gaat en met je meedenkt.
                                </p>
                                <p className="font-medium">
                                    Omdat NIEMAND dit alleen hoeft te dragen!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-light-gray/30">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-dark-contrast">
                            Mijn Kernwaarden
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="mb-5">
                                <div className="w-3 h-3 rounded-full bg-gold inline-block"></div>
                            </div>
                            <h3 className="text-2xl font-serif text-dark-contrast mb-2">Warmte</h3>
                            <p className="text-dark-contrast/70">Oprechte aandacht en een luisterend oor staan centraal.</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-5">
                                <div className="w-3 h-3 rounded-full bg-gold inline-block"></div>
                            </div>
                            <h3 className="text-2xl font-serif text-dark-contrast mb-2">Betrouwbaarheid</h3>
                            <p className="text-dark-contrast/70">Afspraak is afspraak. U kunt op mij rekenen.</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-5">
                                <div className="w-3 h-3 rounded-full bg-gold inline-block"></div>
                            </div>
                            <h3 className="text-2xl font-serif text-dark-contrast mb-2">Professionaliteit</h3>
                            <p className="text-dark-contrast/70">Ervaren, kundig en altijd met het grootste respect voor uw privacy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-cream-bg">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-dark-contrast mb-6">
                        Bent u klaar voor rust en overzicht?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-dark-contrast/80">
                        Ik nodig u uit voor een vrijblijvend gesprek. Laten we samen ontdekken hoe ik u het beste kan ondersteunen.
                    </p>
                    <Link to="/contact" className="btn-primary">
                        Plan een kennismaking
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default OverMij;
