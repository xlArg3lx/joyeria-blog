import React from "react";
import Button from "../common/Button";
import heroBg from "/public/images/hero-bg.jpg";

function Hero() {
    console.log("Ruta de imagen:", heroBg); // Debería mostrar la ruta correcta
    return (
        <div
            className="h-screen bg-cover bg-center bg-no-repeat flex items-center relative text-white"
            style={{ background: `url(${heroBg})` }}
        >
            {/* Overlay para mejorar la legibilidad del texto */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center pt-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-wide">
                        Descubre la elegancia en cada detalle
                    </h1>
                    <p className="text-lg md:text-xl mb-10">
                        Joyas únicas diseñadas con pasión, elegancia y los más
                        finos materiales para momentos especiales
                    </p>
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background:
                         `url(${heroBg}) center/cover no-repeat`,
                    zIndex: 0,
                }}
            />
        </div>
    );
}

export default Hero;
