import { Link } from 'react-router-dom';
import { Heart, Handshake, ShieldCheck } from 'lucide-react';
import heroImage from '../assets/hero-photo.jpg';

const OverMij = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="section-padding bg-sandstone">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-dark-brown text-center mb-16">
                        Over mij
                    </h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Photo */}
                        <div className="relative">
                            <div className="rounded-xl overflow-hidden shadow-soft">
                                <img
                                    src={heroImage}
                                    alt="Over mij - Zorgzaam Geregeld"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-soft-gold/20 rounded-full -z-10"></div>
                        </div>

                        {/* Core Values */}
                        <div className="space-y-8">
                            <div className="card">
                                <h3 className="text-3xl font-serif font-bold text-dark-brown mb-6">
                                    Mijn kernwaarden
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="mr-4 text-dark-brown">
                                            <Heart size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-dark-brown mb-1">Warmte</h4>
                                            <p className="text-dark-brown/80">Ik kom met oprechte aandacht en een luisterend oor.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-4 text-dark-brown">
                                            <Handshake size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-dark-brown mb-1">Betrouwbaarheid</h4>
                                            <p className="text-dark-brown/80">Wat ik beloof, maak ik waar. Altijd.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="mr-4 text-dark-brown">
                                            <ShieldCheck size={32} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-dark-brown mb-1">Professionaliteit</h4>
                                            <p className="text-dark-brown/80">Ervaren, kundig en altijd respectvol.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="section-padding bg-beige-light">
                <div className="container-custom max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-4xl font-serif font-bold text-dark-brown mb-6">
                            Mijn verhaal
                        </h2>

                        <p className="text-dark-brown/80 leading-relaxed mb-4">
                            Hoi, ik ben [Naam], en ik weet uit ervaring hoe het is om te zorgen voor een ander.
                            Jarenlang was ik mantelzorger voor mijn [familielid]. Ik zag hoe uitputtend het kan zijn,
                            hoe je jezelf wegcijfert, en hoe belangrijk het is om ook voor jezelf te zorgen.
                        </p>

                        <p className="text-dark-brown/80 leading-relaxed mb-4">
                            Die ervaring heeft me gevormd. Ik weet wat het betekent om hulp nodig te hebben,
                            maar ook hoe moeilijk het kan zijn om die hulp te vragen. Daarom doe ik wat ik doe:
                            ik wil anderen de ondersteuning bieden die ik zelf had willen hebben.
                        </p>

                        <p className="text-dark-brown/80 leading-relaxed mb-4">
                            Of het nu gaat om huishoudelijke taken, opruimen, een verhuizing of mantelzorgondersteuning –
                            ik pak het aan met dezelfde toewijding waarmee ik voor mijn eigen naasten heb gezorgd.
                            Met warmte, zonder oordeel, en altijd met respect voor jouw situatie.
                        </p>

                        <p className="text-dark-brown/80 leading-relaxed mb-4">
                            Ik werk graag persoonlijk en kleinschalig. Geen grote organisatie met wisselende gezichten,
                            maar één aanspreekpunt: ik. Zo kan ik echt een band opbouwen en precies die zorg leveren
                            die bij jou past.
                        </p>

                        <p className="text-dark-brown/80 leading-relaxed">
                            Mijn missie? Jou rust geven. Zodat je weer kunt ademhalen, even kunt ontspannen,
                            en weet dat alles goed geregeld is.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-gradient-to-br from-card-bg to-sandstone">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold text-dark-brown text-center mb-12">
                        Van mantelzorg naar missie
                    </h2>

                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-dark-brown rounded-full flex items-center justify-center text-beige-light font-bold text-xl shadow-soft">
                                1
                            </div>
                            <div className="card flex-grow">
                                <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                    Mantelzorger
                                </h3>
                                <p className="text-dark-brown/80">
                                    Jarenlange ervaring als mantelzorger heeft me geleerd wat écht belangrijk is:
                                    aandacht, betrouwbaarheid en praktische hulp.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-dark-brown rounded-full flex items-center justify-center text-beige-light font-bold text-xl shadow-soft">
                                2
                            </div>
                            <div className="card flex-grow">
                                <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                    Professionalisering
                                </h3>
                                <p className="text-dark-brown/80">
                                    Ik heb mijn ervaring omgezet in professionele dienstverlening, met alle
                                    benodigde kennis en vaardigheden.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-dark-brown rounded-full flex items-center justify-center text-beige-light font-bold text-xl shadow-soft">
                                3
                            </div>
                            <div className="card flex-grow">
                                <h3 className="text-xl font-serif font-semibold text-dark-brown mb-2">
                                    Zorgzaam Geregeld
                                </h3>
                                <p className="text-dark-brown/80">
                                    Nu help ik anderen met dezelfde warmte en toewijding waarmee ik voor mijn
                                    eigen naasten heb gezorgd.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-dark-brown text-beige-light">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-beige-light">
                        Laten we kennismaken
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto text-beige-light/90">
                        Wil je meer weten over hoe ik je kan helpen? Neem vrijblijvend contact op
                        voor een kennismakingsgesprek.
                    </p>
                    <Link to="/contact" className="btn-primary bg-beige-light text-dark-brown hover:bg-sandstone hover:text-dark-brown shadow-none">
                        Neem contact op
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default OverMij;
