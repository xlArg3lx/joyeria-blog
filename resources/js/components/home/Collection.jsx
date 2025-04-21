import React from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

function Collections() {
    const collections = [
        {
            id: 1,
            title: 'Colección Primavera',
            description: 'Piezas delicadas inspiradas en la frescura y los colores de la temporada.',
            image: '/images/collections/primavera.jpg',
            buttonText: 'Explorar',
            buttonLink: '/colecciones/primavera'
        },
        {
            id: 2,
            title: 'Colección Clásica',
            description: 'Joyas atemporales que nunca pasan de moda, para todos los días.',
            image: '/images/collections/clasica.jpg',
            buttonText: 'Explorar',
            buttonLink: '/colecciones/clasica'
        },
        {
            id: 3,
            title: 'Colección Exclusiva',
            description: 'Piezas únicas y ediciones limitadas para ocasiones especiales.',
            image: '/images/collections/exclusiva.jpg',
            buttonText: 'Explorar',
            buttonLink: '/colecciones/exclusiva'
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center mx-auto">Nuestras Colecciones</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {collections.map(collection => (
                        <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-2 duration-300">
                            <img
                                src={collection.image}
                                alt={collection.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-normal text-gray-800 mb-2">{collection.title}</h3>
                                <p className="text-gray-600 mb-4">{collection.description}</p>
                                <Button to={collection.buttonLink}>{collection.buttonText}</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Collections;
