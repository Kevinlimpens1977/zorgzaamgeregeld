import { Link } from 'react-router-dom';

const Tarieven = () => {
    return (
        <div className="bg-base min-h-screen">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center bg-surface/30">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-title mb-4">
                        Tarieven & Vergoedingen
                    </h1>
                    <p className="text-xl text-text/80 max-w-3xl mx-auto font-light">
                        Heldere afspraken, zonder verrassingen achteraf.
                    </p>
                </div>
            </header>

            <section className="py-20">
                <div className="container-custom max-w-4xl">
                    <div className="space-y-24">

                        {/* 1. PARTICULIEREN */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-gold"></div>
                                <h2 className="text-3xl md:text-4xl font-serif text-title uppercase tracking-wider">1. Particulieren</h2>
                            </div>
                            <div className="bg-white p-8 md:p-12 shadow-soft border-l-4 border-gold">
                                <p className="text-lg text-text mb-6 leading-relaxed">
                                    Voor particuliere ondersteuning werk ik met een helder uurtarief. Perfect voor opruimen, structuur, huishouden, dagelijkse ondersteuning of een steuntje in de rug.
                                </p>
                                <div className="text-3xl md:text-4xl font-serif text-bronze mb-6">
                                    Uurtarief Particulieren: € 35,- <span className="text-lg text-text/60 font-sans uppercase tracking-tighter italic">per uur (btw-vrijgesteld)</span>
                                </div>
                                <p className="text-xl font-serif italic text-gold-dark">
                                    "Ik werk zorgvuldig, warm én met humor, zodat jouw huis én hoofd snel weer licht voelen."
                                </p>
                            </div>
                        </div>

                        {/* 2. STRIPPENKAARTEN & PAKKETTEN */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-gold"></div>
                                <h2 className="text-3xl md:text-4xl font-serif text-title uppercase tracking-wider">2. Strippenkaarten & Pakketten</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 shadow-soft border border-surface">
                                    <h3 className="text-2xl font-serif text-title mb-4">Strippenkaarten</h3>
                                    <p className="text-text/70 mb-6 italic">Wanneer je geen vaste momenten kunt of wilt afspreken. Een strippenkaart is 1 jaar geldig.</p>
                                    <ul className="space-y-4 text-lg">
                                        <li className="flex justify-between items-center border-b border-surface pb-2">
                                            <span>Strippenkaart 10 uur</span>
                                            <span className="font-bold text-bronze">€ 380,-</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-surface pb-2">
                                            <span>Strippenkaart 20 uur</span>
                                            <span className="font-bold text-bronze">€ 740,-</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4 text-sm text-text/60 uppercase tracking-widest">Flexibel inzetbaar voor alle diensten.</p>
                                </div>

                                <div className="bg-white p-8 shadow-soft border border-surface">
                                    <h3 className="text-2xl font-serif text-title mb-4">Wekelijkse Pakketten</h3>
                                    <ul className="space-y-4 text-lg">
                                        <li className="flex justify-between items-start border-b border-surface pb-2">
                                            <div>
                                                <span className="block font-medium">Rust in Huis</span>
                                                <span className="text-sm text-text/60">3 uur / week</span>
                                            </div>
                                            <span className="font-bold text-bronze">€ 110,-</span>
                                        </li>
                                        <li className="flex justify-between items-start border-b border-surface pb-2">
                                            <div>
                                                <span className="block font-medium">Volledige Ontzorging</span>
                                                <span className="text-sm text-text/60">6 uur / week</span>
                                            </div>
                                            <span className="font-bold text-bronze">€ 220,-</span>
                                        </li>
                                        <li className="flex justify-between items-start border-b border-surface pb-2">
                                            <div>
                                                <span className="block font-medium">Intensieve Ondersteuning</span>
                                                <span className="text-sm text-text/60">10 uur / week</span>
                                            </div>
                                            <span className="font-bold text-bronze">€ 375,-</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4 text-sm font-serif italic text-gold">Maatwerkpakket? Zelf samenstellen is altijd mogelijk.</p>
                                </div>
                            </div>
                        </div>

                        {/* 3. TOESLAGEN */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-gold"></div>
                                <h2 className="text-3xl md:text-4xl font-serif text-title uppercase tracking-wider">3. Toeslagen</h2>
                            </div>
                            <div className="bg-surface/20 p-8 rounded-none border border-gold/10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-xl font-serif text-title mb-4">Spoedopdrachten</h3>
                                        <p className="text-lg text-text">
                                            <span className="text-bronze font-bold">+ € 15,- per uur</span> extra voor opdrachten die binnen 48 uur moeten starten.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif text-title mb-4">Eventuele extra kosten</h3>
                                        <ul className="space-y-2 text-text/80">
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                                                Stort / containerkosten
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                                                Reiskosten (indien van toepassing)
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                                                Materiaalkosten bij schoonmaak
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. ZAKELIJK TARIEF */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-[1px] bg-gold"></div>
                                <h2 className="text-3xl md:text-4xl font-serif text-title uppercase tracking-wider text-right">4. Zakelijk Tarief</h2>
                            </div>
                            <div className="bg-chocolate text-white p-10 md:p-14 shadow-xl">
                                <h3 className="text-2xl md:text-3xl font-serif mb-6 italic opacity-90 text-champagne">Makelaars / Woningbouw</h3>
                                <p className="text-xl mb-8 font-light border-b border-white/10 pb-6 text-white/80">
                                    Zakelijke eindoplevering voor vastgoedprofessionals.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                                    <ul className="space-y-4 opacity-90">
                                        <li className="flex justify-between">
                                            <span>Uurtarief Zakelijk</span>
                                            <span className="font-bold">€ 45,- (excl. btw)</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Spoedtoeslag</span>
                                            <span className="font-bold">€ 15,- p/u</span>
                                        </li>
                                    </ul>
                                    <p className="text-champagne font-serif italic text-lg leading-relaxed md:pl-8 md:border-l md:border-white/10">
                                        Altijd vooraf een duidelijke offerte binnen twee werkdagen inclusief stort, container en vervoerskosten.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 5. VERGOEDING & FINANCIERING */}
                        <div className="space-y-12 pt-12 border-t border-gold/20">
                            <div className="text-center">
                                <h2 className="text-4xl md:text-5xl font-serif text-title mb-4">Vergoeding & Financiering</h2>
                                <div className="w-24 h-[1px] bg-gold mx-auto mb-12"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-title">WMO</h3>
                                    <p className="text-text/80 leading-relaxed font-light">
                                        Ondersteuning via de gemeente om zelfstandig thuis te blijven wonen. Bij een Wmo-indicatie kun je kiezen voor PGB, zodat je zelf je zorgverlener kiest.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-gold-dark">PGB</h3>
                                    <p className="text-text/80 leading-relaxed font-light">
                                        Met een PGB kies je wie jou helpt. Ik ondersteun bij de aanvraag, zorgovereenkomst en het contact met Gemeente / SVB. De SVB betaalt mij direct uit het budget.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-title">Particuliere inhuur</h3>
                                    <p className="text-text/80 leading-relaxed font-light">
                                        Geen indicatie? Spoed? Overbrugging nodig? Dan is particuliere inhuur ideaal voor directe ondersteuning zonder wachttijden.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif text-title">Fiscale aftrek</h3>
                                    <p className="text-text/80 leading-relaxed font-light">
                                        In sommige situaties zijn zorgkosten aftrekbaar. Advies: check dit altijd even bij een financieel adviseur voor jouw persoonlijke situatie.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Final CTA */}
                    <div className="mt-32 text-center bg-surface/30 p-12 border border-gold/10">
                        <h3 className="text-3xl font-serif text-title mb-6">Heb je vragen over de tarieven?</h3>
                        <p className="text-xl text-text/70 mb-10 max-w-2xl mx-auto font-light">
                            Ik denk graag met je mee over de beste oplossing die past binnen jouw budget.
                        </p>
                        <Link to="/contact" className="btn-primary bg-bronze text-white border-none hover:bg-gold py-5 px-12 text-lg lg:text-xl">
                            Neem vrijblijvend contact op
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tarieven;
