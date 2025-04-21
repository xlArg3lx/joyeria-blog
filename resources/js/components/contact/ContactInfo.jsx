import React from 'react';

function ContactInfo() {
    return (
        <div className="lg:w-2/5">
            <h3 className="text-2xl font-normal text-gray-800 mb-4">Información de contacto</h3>
            <p className="text-gray-600 mb-6">
                Si tienes alguna pregunta sobre nuestras colecciones, servicios o cualquier otra consulta,
                no dudes en contactarnos. Estaremos encantados de atenderte.
            </p>

            <div className="flex mb-6">
                <div className="text-gold-600 text-xl mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                    <h4 className="font-medium text-gray-800 mb-1">Nuestra tienda</h4>
                    <p className="text-gray-600">Calle Principal 123, Ciudad</p>
                </div>
            </div>

            <div className="flex mb-6">
                <div className="text-gold-600 text-xl mr-4">
                    <i className="fas fa-phone"></i>
                </div>
                <div>
                    <h4 className="font-medium text-gray-800 mb-1">Teléfono</h4>
                    <p className="text-gray-600">+123 456 7890</p>
                </div>
            </div>

            <div className="flex mb-6">
                <div className="text-gold-600 text-xl mr-4">
                    <i className="fas fa-envelope"></i>
                </div>
                <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@joyeriaelegance.com</p>
                </div>
            </div>

            <div className="flex mb-6">
                <div className="text-gold-600 text-xl mr-4">
                    <i className="fas fa-clock"></i>
                </div>
                <div>
                    <h4 className="font-medium text-gray-800 mb-1">Horario</h4>
                    <p className="text-gray-600">Lunes a Viernes: 10:00 - 20:00</p>
                    <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
