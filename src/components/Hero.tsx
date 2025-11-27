import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-photo.jpg';

const Hero = () => {
    return (
        <section className="bg-sandstone pt-24 pb-20">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-dark-brown leading-tight">
                            Zorgzaam Geregeld
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-dark-brown/80 font-serif">
                            Jouw rust in de wirwar van zorg
                        </h2>
                        <p className="text-lg md:text-xl text-dark-brown/90 leading-relaxed mb-3">
                            Eerlijke ondersteuning, warme aandacht en professionele handen die het écht overnemen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/contact" className="btn-primary">
                                Plan een kennismaking
                            </Link>
                            <Link to="/aanpak" className="btn-secondary">
                                Doe de zorg-quiz
                            </Link>
                        </div>
                        <div className="pt-2">
                            <Link to="/diensten" className="text-dark-brown font-medium hover:underline flex items-center gap-2">
                                Of bekijk alle diensten
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden shadow-soft">
                            <img
                                src={heroImage}
                                alt="Zorgzaam Geregeld - Professionele zorgondersteuning"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-soft-gold/20 rounded-full -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-cacao/10 rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
