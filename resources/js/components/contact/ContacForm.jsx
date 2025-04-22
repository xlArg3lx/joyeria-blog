import React, { useState } from "react";
import Button from "../common/Button";
import axios from "axios";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

        try {
            // Axios config para enviar el formulario a Laravel
            await axios.post("/api/contact", formData, {
                headers: {
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
            });

            setStatus({
                submitted: true,
                submitting: false,
                info: {
                    error: false,
                    msg: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
                },
            });

            // Limpiar el formulario
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                submitted: false,
                submitting: false,
                info: {
                    error: true,
                    msg: "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
                },
            });
        }
    };

    return (
        <div className="lg:w-3/5 bg-gray-50 p-8 rounded-lg shadow-md ">
            <h3 className="text-2xl font-normal text-gray-800 mb-6">Envíanos un mensaje</h3>

            {status.info.msg && (
                <div
                    className={`p-4 mb-8 rounded-lg flex items-center gap-3 ${
                        status.info.error
                            ? "bg-red-50 text-red-800 border border-red-200"
                            : "bg-green-50 text-green-800 border border-green-200"
                    }`}
                >
                    {status.info.error ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                    <span className="font-medium">{status.info.msg}</span>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4 ">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400 "
                        placeholder="Nombre completo"
                        required
                    />
                </div>

                <div className="group">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400"
                        placeholder="Correo electrónico"
                        required
                    />
                </div>

                <div className="group">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Asunto
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400"
                        placeholder="Asunto"
                        required
                    />
                </div>

                <div className="group">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-200 ease-in-out placeholder-gray-400 min-h-[150px] resize-y"
                        placeholder="Tu mensaje"
                        required
                    ></textarea>
                </div>

                <Button
                    variant="secondary"
                    type="submit"
                    size="lg"
                    loading={status.submitting}
                    className="w-full"
                >
                    {status.submitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
            </form>
        </div>
    );
}

export default ContactForm;
