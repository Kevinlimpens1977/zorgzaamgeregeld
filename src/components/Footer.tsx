import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-taupe pt-[60px] pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="block">
                            <h2 className="text-3xl font-serif text-title">Zorgzaam Geregeld</h2>
                        </Link>
                        <p className="font-sans text-title text-lg font-light">
                            Jouw rust in de wirwar van zorg
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="flex flex-col space-y-3">
                        {[
                            { name: 'HOME', path: '/' },
                            { name: 'OVER MIJ', path: '/over-mij' },
                            { name: 'DIENSTEN', path: '/diensten' },
                            { name: 'ZORGCHECK', path: '/zorgcheck' },
                            { name: 'TARIEVEN', path: '/tarieven' },
                            { name: 'VERGOEDINGEN', path: '/vergoedingen' },
                            { name: 'CONTACT', path: '/contact' },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="font-btn font-semibold text-text tracking-wider hover:text-gold transition-colors text-sm uppercase"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-4">
                        <a href="mailto:info@zorgzaamgeregeld.nl" className="flex items-center group">
                            <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
                            <span className="font-sans text-title group-hover:text-gold transition-colors">
                                info@zorgzaamgeregeld.nl
                            </span>
                        </a>
                        <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
                            <span className="font-sans text-title">
                                +31 (0)6 12345678
                            </span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-gold mr-3"></div>
                            <span className="font-sans text-title">
                                Regio Limburg en Brabant
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-taupe/30 pt-10 text-center">
                    <p className="font-sans text-title/70 text-sm">
                        &copy; {new Date().getFullYear()} Zorgzaam Geregeld · <Link to="/privacy" className="hover:text-title">Privacybeleid</Link> · <Link to="/voorwaarden" className="hover:text-title">Algemene Voorwaarden</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

