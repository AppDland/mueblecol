'use client'
import React from 'react';
import Image from 'next/image';

interface ButtonProps {
    text?: string;
    iconSrc?: string;
    iconAlt?: string;
    iconPosition?: 'left' | 'right';
    onClick?: () => void;
    className?: string;
    width?: string;
    height?: string;
    iconWidth?: number;
    iconHeight?: number;
    iconColor?: string;
}

const Button: React.FC<ButtonProps> = ({
    text,
    iconSrc,
    iconAlt = 'icon',
    iconPosition = 'left',
    onClick,
    className = '',
    width,
    height,
    iconWidth = 20,
    iconHeight = 20,
    iconColor = 'currentColor',
}) => {
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <button
            onClick={handleClick}
            className={`flex items-center ${className}`}
            style={{ width, height }}
        >
            {iconSrc && iconPosition === 'left' && (
                <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={iconWidth}
                    height={iconHeight}
                    className="mr-2"
                    style={{ filter: `invert(${iconColor})` }}
                />
            )}
            <p className='text-center w-full text-sm sm:text-base'>{text}</p>
            {iconSrc && iconPosition === 'right' && (
                <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={iconWidth}
                    height={iconHeight}
                    className="ml-4"
                    style={{ filter: `invert(${iconColor})` }}
                />
            )}
        </button>
    );
};

export default Button;