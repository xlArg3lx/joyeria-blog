import React from 'react';

function ContactHero() {
    return (
        <section className="h-64 md:h-80 bg-cover bg-center bg-no-repeat flex items-center relative text-white"
                 style={{ backgroundImage: 'url(/images/contact-bg.jpg)' }}>
            {/* Overlay para mejorar la legibilidad del texto */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 tracking-wide">
                        Contacto
                    </h1>
                    <p className="text-lg md:text-xl">
                        Estamos para ayudarte. No dudes en ponerte en contacto con nosotros.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactHero;
