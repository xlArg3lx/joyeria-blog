import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-serif text-gold-600 tracking-wider">
                        Joyería <span className="font-semibold">Elegance</span>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            }
                        </svg>
                    </button>

                    {/* Desktop navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li><Link to="/" className="text-lg text-gray-800 hover:text-gold-600 transition duration-300">Inicio</Link></li>
                            <li><Link to="/colecciones" className="text-lg text-gray-800 hover:text-gold-600 transition duration-300">Colecciones</Link></li>
                            <li><Link to="/blog" className="text-lg text-gray-800 hover:text-gold-600 transition duration-300">Blog</Link></li>
                            <li><Link to="/contacto" className="text-lg text-gray-800 hover:text-gold-600 transition duration-300">Contacto</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Mobile navigation */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <ul className="flex flex-col space-y-3">
                            <li><Link to="/" className="block text-lg text-gray-800 hover:text-gold-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
                            <li><Link to="/colecciones" className="block text-lg text-gray-800 hover:text-gold-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>Colecciones</Link></li>
                            <li><Link to="/blog" className="block text-lg text-gray-800 hover:text-gold-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                            <li><Link to="/contacto" className="block text-lg text-gray-800 hover:text-gold-600 transition duration-300" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
