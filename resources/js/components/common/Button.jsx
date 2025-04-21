import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, to, onClick, type = 'button', className = '' }) {
    // Si hay un enlace "to", crear un componente Link
    if (to) {
        return (
            <Link to={to} className={`btn ${className}`}>
                {children}
            </Link>
        );
    }

    // De lo contrario, crear un botón normal
    return (
        <button
            type={type}
            className={`btn ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
