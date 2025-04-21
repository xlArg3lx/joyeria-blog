import React from 'react';
import Button from './Button';

function Card({ image, title, description, buttonText, buttonLink }) {
    return (
        <div className="bg-white rounded-md shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg duration-300">
            {image && <img src={image} alt={title} className="w-full h-64 object-cover" />}
            <div className="p-5">
                {title && <h3 className="text-xl font-normal mb-2">{title}</h3>}
                {description && <p className="text-gray-600 mb-4">{description}</p>}
                {buttonText && buttonLink && (
                    <Button to={buttonLink}>{buttonText}</Button>
                )}
            </div>
        </div>
    );
}

export default Card;
