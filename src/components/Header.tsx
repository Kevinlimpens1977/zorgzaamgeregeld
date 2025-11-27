import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Over mij', path: '/over-mij' },
        { name: 'Diensten', path: '/diensten' },
        { name: 'Aanpak', path: '/aanpak' },
        { name: 'Tarieven', path: '/tarieven' },
        { name: 'Vergoeding', path: '/vergoeding' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname === path;
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-cacao py-4 shadow-lg">
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-beige-light tracking-wide hover:opacity-90 transition-opacity">
                        Zorgzaam Geregeld
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-2 lg:space-x-3">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`px-5 py-2.5 rounded-lg text-sm uppercase tracking-wider font-medium transition-all duration-300 border border-transparent relative overflow-hidden group
                                        ${isActive(item.path)
                                            ? 'bg-white/10 text-white border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-sm'
                                            : 'text-beige-light/80 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {isActive(item.path) && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-shimmer"></div>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-beige-light focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-full left-0 right-0 bg-cacao border-t border-white/10 shadow-xl transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col p-6 space-y-2">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block w-full text-left text-lg font-serif py-4 px-4 rounded-lg transition-all duration-300
                                        ${isActive(item.path)
                                            ? 'bg-white/10 text-white pl-6 border-l-4 border-soft-gold shadow-inner'
                                            : 'text-beige-light/70 hover:text-white hover:bg-white/5'}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
