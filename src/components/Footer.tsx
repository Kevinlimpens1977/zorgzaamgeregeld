import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-brown text-beige-light mt-0">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4 text-beige-light">Zorgzaam Geregeld</h3>
                        <p className="text-beige-light/80">
                            Jouw rust in de wirwar van zorg. Eerlijke ondersteuning, warme aandacht en professionele handen die het écht overnemen.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-serif font-semibold mb-4 text-beige-light">Contact</h4>
                        <ul className="space-y-3 text-beige-light/80">
                            <li className="flex items-center gap-3">
                                <Mail size={18} />
                                <a href="mailto:info@zorgzaamgeregeld.nl" className="hover:text-white transition-colors">info@zorgzaamgeregeld.nl</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} />
                                <a href="tel:0612345678" className="hover:text-white transition-colors">06 12 34 56 78</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={18} />
                                <span>Nederland</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-serif font-semibold mb-4 text-beige-light">Diensten</h4>
                        <ul className="space-y-2 text-beige-light/80">
                            <li><Link to="/diensten" className="hover:text-white transition-colors">Huishoudelijke ondersteuning</Link></li>
                            <li><Link to="/diensten" className="hover:text-white transition-colors">Opruimen & structuur</Link></li>
                            <li><Link to="/diensten" className="hover:text-white transition-colors">Verhuisklaar maken</Link></li>
                            <li><Link to="/diensten" className="hover:text-white transition-colors">Vervuilde woningen reinigen</Link></li>
                            <li><Link to="/diensten" className="hover:text-white transition-colors">Mantelzorg-ondersteuning</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-beige-light/20 mt-12 pt-8 text-center text-beige-light/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} Zorgzaam Geregeld. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
