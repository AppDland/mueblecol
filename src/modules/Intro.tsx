import Image from 'next/image';
import React from 'react';

interface IntroProps {
    title: string;
    subtitle: string;
    bgColor?: string;
    textColor?: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    containerHeight?: string;
    className?: string;
    headerTitle: string;
    headerButtons?: React.ReactNode[];
    headerBgColor?: string;
}

const Intro: React.FC<IntroProps> = ({
    title,
    subtitle,
    bgColor = 'bg-[#A30000]',
    textColor = 'text-white',
    imageSrc,
    imageAlt,
    imageWidth = 250,
    imageHeight = 250,
    containerHeight = '35vh',
    className = '',
    headerTitle,
    headerButtons = [],
    headerBgColor = 'bg-transparent',
}) => {
    return (
        <div className={`w-full ${bgColor} ${textColor} flex flex-col items-center select-none ${className}`} style={{ height: containerHeight }}>
            <header className={`w-full flex justify-between items-center p-4 ${headerBgColor}`}>
                <div className="text-2xl font-bold">{headerTitle}</div>
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
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full flex-grow relative overflow-hidden z-40">
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-end ">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className="md:absolute left-36 top-1/2 transform md:-translate-y-1/2 filter brightness-0 invert"
                    />
                </div>
                <div className="text-center w-full md:w-1/2 mt-4 md:mt-0 m-5">
                    <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
                    <p className="mt-2 md:mt-4">{subtitle}</p>
                </div>
                {/* Adding shapes */}
                <div className="absolute w-11/12 h-96  right-5 top-10 bg-[#1E5D5D] translate-x-60 rotate-45 opacity-10"></div>
            </div>
        </div>
    );
};

export default Intro;
