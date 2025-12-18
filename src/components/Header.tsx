import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const currentYear = new Date().getFullYear();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Over mij', path: '/over-mij' },
        { name: 'Diensten', path: '/diensten' },
        { name: 'Zorgcheck', path: '/zorgcheck' },
        { name: 'Tarieven', path: '/tarieven' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname === path;
    };

    return (
        <>
            {/* 1. Logo - Fixed Top Left */}

            {/* 2. Copyright - Fixed Bottom Left (Hidden on small mobile to save space) */}
            <div className="fixed bottom-6 left-6 md:bottom-10 md:left-12 z-40 hidden md:block">
                <span className="text-gold font-serif text-sm">©{currentYear}</span>
            </div>

            {/* 3. Navigation - Desktop: Bottom Right */}
            <nav className="fixed bottom-6 right-6 md:bottom-10 md:right-12 z-50 text-right hidden md:block">
                <ul className="flex flex-col space-y-1">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`uppercase tracking-widest text-sm font-bold transition-colors duration-300 flex items-center justify-end py-1
                                    ${isActive(item.path)
                                        ? 'text-title'
                                        : 'text-gold/80 hover:text-title'
                                    }`}
                            >
                                {isActive(item.path) && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></span>
                                )}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile: Hamburger Button at Top Left */}
            <div className="md:hidden fixed top-6 left-6 z-50">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="bg-base/90 p-3 rounded-full shadow-lg text-title border border-gold/20"
                    aria-label="Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-base z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden
                ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
            >
                <ul className="space-y-6 text-center">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-serif flex items-center justify-center transition-colors duration-300
                                    ${isActive(item.path) ? 'text-gold italic' : 'text-title'}`}
                            >
                                {isActive(item.path) && (
                                    <span className="w-2 h-2 rounded-full bg-gold mr-4"></span>
                                )}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="absolute bottom-10 text-gold font-serif text-sm">
                    ©{currentYear} Zorgzaam Geregeld
                </div>
            </div>
        </>
    );
};

export default Header;
