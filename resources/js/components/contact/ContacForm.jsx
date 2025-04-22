import React, { useState } from 'react';
import Button from '../common/Button';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

        try {
            // Axios config para enviar el formulario a Laravel
            await axios.post('/api/contact', formData, {
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            });

            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.' }
            });

            // Limpiar el formulario
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' }
            });
        }
    };

    return (
        <div className="lg:w-3/5 bg-gray-50 p-8 rounded-lg shadow-md ">
            <h3 className="text-2xl font-normal text-gray-800 mb-6">Envíanos un mensaje</h3>

            {status.info.msg && (
                <div className={`p-4 mb-6 rounded-md ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {status.info.msg}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400 "
                        placeholder="Nombre completo"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400"
                        placeholder="Correo electrónico"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400"
                        placeholder="Asunto"
                        required
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400 min-h-[150px] resize-y"
                        placeholder="Tu mensaje"
                        required
                    ></textarea>
                </div>
                <Button
                    type="submit"
                    disabled={status.submitting}
                >
                    {status.submitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
            </form>
        </div>
    );
}

export default ContactForm;
