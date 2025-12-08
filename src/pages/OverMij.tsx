import { Link } from 'react-router-dom';
import { Heart, Handshake, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/hero-photo.jpg';

const OverMij = () => {
    return (
        <div className="bg-cream-bg">
            {/* Header Section */}
            <header className="pt-40 pb-20 text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif text-dark-contrast">
                        Mijn Belofte aan U
                    </h1>
                </div>
            </header>

            {/* Intro Section with Image */}
            <section className="pb-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="rounded-xl overflow-hidden shadow-soft">
                            <img
                                src={heroImage}
                                alt="Portretfoto voor Zorgzaam Geregeld"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="prose prose-xl max-w-none">
                            <h2 className="text-4xl font-serif text-dark-contrast">
                                Gedreven door ervaring, met een hart voor zorg.
                            </h2>
                            <p className="text-dark-contrast/80">
                                Hoi, ik ben [Naam]. Mijn reis begon als mantelzorger, waar ik leerde hoe essentieel betrouwbare, warme en discrete hulp is. Die ervaring is de fundering van Zorgzaam Geregeld.
                            </p>
                            <p className="text-dark-contrast/80">
                                Ik ben geen anonieme dienstverlener; ik ben uw persoonlijke aanspreekpunt. Mijn missie is om u de rust en ondersteuning te bieden die u verdient, met de professionaliteit en het respect die u verwacht.
                            </p>
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
                            <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5">
                                <Heart size={32} className="text-gold-accent" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-dark-contrast mb-2">Warmte</h3>
                            <p className="text-dark-contrast/70">Oprechte aandacht en een luisterend oor staan centraal.</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5">
                                <Handshake size={32} className="text-gold-accent" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-serif text-dark-contrast mb-2">Betrouwbaarheid</h3>
                            <p className="text-dark-contrast/70">Afspraak is afspraak. U kunt op mij rekenen.</p>
                        </div>
                         <div className="text-center">
                            <div className="inline-block p-5 bg-white rounded-full shadow-sm mb-5">
                                <ShieldCheck size={32} className="text-gold-accent" strokeWidth={1.5} />
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
