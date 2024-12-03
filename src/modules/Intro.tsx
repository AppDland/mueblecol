import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

interface IntroProps {
    title: string;
    subtitle: string;
    titleColor?: string;
    subtitleColor?: string;
    bgColor?: string;
    textColor?: string;
    title2: string;
    subtitle2: string;
    title2Color?: string;
    subtitle2Color?: string;
    containerHeight?: string;
    className?: string;
    headerTitle?: string[];
    headerTitleColors?: string[];
    headerButtons?: React.ReactNode[];
    headerBgColor?: string;
    backgroundImage?: string; // Nueva propiedad para la imagen de fondo
}

const Intro: React.FC<IntroProps> = ({
    title,
    subtitle,
    titleColor = 'text-white',
    subtitleColor = 'text-white',
    bgColor = 'bg-[#A30000]',
    textColor = 'text-white',
    title2,
    subtitle2,
    title2Color = 'text-white',
    subtitle2Color = 'text-white',
    containerHeight = '35vh',
    className = '',
    headerTitle = [],
    headerTitleColors = [],
    headerButtons = [],
    headerBgColor = 'bg-transparent',
    backgroundImage, // Nueva propiedad para la imagen de fondo
}) => {
    return (
        <div
            className={classNames('w-full flex flex-col items-center select-none', bgColor, textColor, className)}
            style={{
                height: containerHeight,
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <header className={classNames('w-full flex justify-between items-center p-4', headerBgColor)}>
                <div className="text-2xl font-bold flex">
                    {headerTitle.map((part, index) => (
                        <span key={index} className={headerTitleColors[index]}>
                            {part}
                        </span>
                    ))}
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        {headerButtons.map((button, index) => (
                            <li key={index}>
                                {button}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div className="flex items-center justify-evenly flex-grow w-full">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className={classNames('text-4xl font-bold', titleColor)}>{title}</h1>
                    <p className={classNames('text-xl', subtitleColor)}>{subtitle}</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className={classNames('text-3xl font-bold mt-4', title2Color)}>{title2}</h2>
                    <p className={classNames('text-lg', subtitle2Color)}>{subtitle2}</p>
                </div>
            </div>
        </div>
    );
};

export default Intro;