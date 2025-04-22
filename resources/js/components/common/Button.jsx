import React from 'react';
import { Link } from 'react-router-dom';

function Button({
    children,
    to,
    onClick,
    type = 'button',
    className = '',
    variant = 'primary', // primary, secondary, outline, ghost
    size = 'md', // sm, md, lg
    disabled = false,
    loading = false,
    icon = null,
    iconPosition = 'left' // left, right
}) {
    // Clases base
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Variantes de estilo
    const variantClasses = {
        primary: 'bg-gold-600 text-white hover:bg-gold-700 focus:ring-gold-500',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
        outline: 'border-2 border-gold-600 text-gold-600 hover:bg-gold-50 focus:ring-gold-500',
        ghost: 'text-gold-600 hover:bg-gold-50 focus:ring-gold-500'
    };

    // Tamaños
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2.5 text-base',
        lg: 'px-6 py-3.5 text-lg'
    };

    // Estados
    const stateClasses = disabled || loading
        ? 'opacity-60 cursor-not-allowed'
        : 'hover:transform hover:scale-[1.02] active:scale-[0.98]';

    // Combinación de todas las clases
    const buttonClasses = `
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${stateClasses}
        ${className}
    `.trim();

    // Contenido del botón
    const buttonContent = (
        <>
            {loading && (
                <svg
                    className={`animate-spin h-4 w-4 ${iconPosition === 'left' ? 'mr-2' : 'ml-2'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            {!loading && icon && iconPosition === 'left' && (
                <span className="mr-2">{icon}</span>
            )}

            {children}

            {!loading && icon && iconPosition === 'right' && (
                <span className="ml-2">{icon}</span>
            )}
        </>
    );

    // Si hay un enlace "to", crear un componente Link
    if (to) {
        return (
            <Link
                to={to}
                className={buttonClasses}
                tabIndex={disabled ? -1 : undefined}
                aria-disabled={disabled}
            >
                {buttonContent}
            </Link>
        );
    }

    // De lo contrario, crear un botón normal
    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {buttonContent}
        </button>
    );
}

export default Button;
