import { Link } from 'react-router-dom';

const Footer = () => {
    const footerNav = [
        { name: 'Home', path: '/' },
        { name: 'Diensten', path: '/diensten' },
        { name: 'Over Mij', path: '/over-mij' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className="bg-taupe text-white py-20 pb-10">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-white/20 pb-16">
                    <div className="basis-1/3">
                        <Link to="/" className="text-3xl lg:text-4xl font-serif tracking-wide hover:opacity-80 transition-opacity">
                            Zorgzaam Geregeld
                        </Link>
                        <p className="mt-4 text-white/80 font-light max-w-xs">
                            Persoonlijke ondersteuning met rust, aandacht en structuur.
                        </p>
                    </div>

                    <nav className="basis-1/3 flex flex-col md:flex-row gap-6 md:gap-8 text-lg font-light">
                        {footerNav.map(item => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="hover:text-champagne transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="basis-1/3 md:text-right text-lg font-light">
                        <a href="mailto:info@zorgzaamgeregeld.nl" className="hover:text-champagne transition-colors block mb-2">
                            info@zorgzaamgeregeld.nl
                        </a>
                        {/* Optional: Add phone number or address here if needed */}
                    </div>
                </div>

                <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm font-light">
                    <p>&copy; {new Date().getFullYear()} Zorgzaam Geregeld.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/voorwaarden" className="hover:text-white transition-colors">Algemene Voorwaarden</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

