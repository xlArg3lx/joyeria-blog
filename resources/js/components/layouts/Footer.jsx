import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    <div>
                        <h3 className="text-xl mb-5 font-normal relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-600">Joyería Elegance</h3>
                        <p className="text-gray-400 mb-4">Creando piezas únicas desde 2010, con la pasión y dedicación que cada joya merece.</p>
                        <div className="flex space-x-3 mt-5">
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gold-600 transition duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gold-600 transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gold-600 transition duration-300">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gold-600 transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl mb-5 font-normal relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-600">Enlaces rápidos</h3>
                        <ul className="space-y-2.5">
                            <li><Link to="/" className="text-gray-400 hover:text-gold-500 transition duration-300">Inicio</Link></li>
                            <li><Link to="/colecciones" className="text-gray-400 hover:text-gold-500 transition duration-300">Colecciones</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-gold-500 transition duration-300">Blog</Link></li>
                            <li><Link to="/contacto" className="text-gray-400 hover:text-gold-500 transition duration-300">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl mb-5 font-normal relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-600">Contacto</h3>
                        <p className="text-gray-400 mb-3"><i className="fas fa-map-marker-alt mr-3"></i> Calle Principal 123, Ciudad</p>
                        <p className="text-gray-400 mb-3"><i className="fas fa-phone mr-3"></i> +123 456 7890</p>
                        <p className="text-gray-400 mb-3"><i className="fas fa-envelope mr-3"></i> info@joyeriaelegance.com</p>
                    </div>

                    <div>
                        <h3 className="text-xl mb-5 font-normal relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-600">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Suscríbete para recibir las últimas novedades y ofertas exclusivas.</p>
                        <form>
                            <div className="mb-3">
                                <input type="email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-gold-600" placeholder="Tu correo electrónico" />
                            </div>
                            <button type="submit" className="btn">Suscribirse</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Joyería Elegance. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
