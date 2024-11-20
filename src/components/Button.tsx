import React from 'react';
import Image from 'next/image';

interface ButtonProps {
    text?: string;
    iconSrc?: string;
    iconAlt?: string;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    iconSrc,
    iconAlt = 'icon',
    iconPosition = 'left',
    onClick,
    className = '',
}) => {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <button onClick={handleClick} className={`flex items-center ${className}`}>
            {iconSrc && iconPosition === 'left' && (
                <Image src={iconSrc} alt={iconAlt} width={20} height={20} className="mr-2" />
            )}
            <span>{text}</span>
            {iconSrc && iconPosition === 'right' && (
                <Image src={iconSrc} alt={iconAlt} width={20} height={20} className="ml-2" />
            )}
        </button>
    );
};

export default Button;