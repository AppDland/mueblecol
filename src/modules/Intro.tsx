import Image from 'next/image';
import React from 'react';

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
}) => {
    return (
        <div className={`w-full ${bgColor} ${textColor} flex flex-col items-center select-none ${className}`} style={{ height: containerHeight }}>

            <header className={`w-full justify-evenly flex ${headerBgColor}`}>
                <div className='flex  w-full max-w-7xl justify-between items-center p-4'>
                    <div className="flex relative text-2xl font-bold">
                        {headerTitle.map((part, index) => (
                            <span key={index} className={headerTitleColors[index]}>
                                {part}
                            </span>
                        ))}
                    </div>
                    <nav>
                        <ul className="flex space-x-4 ">
                            {headerButtons.map((button, index) => (
                                <li key={index}>
                                    {button}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="flex flex-col md:flex-row justify-evenly items-center w-full flex-grow relative overflow-hidden z-40">
                <div className='flex w-full max-w-screen-2xl h-full justify-center py-32'>
                    <div className="text-center w-full md:w-1/2 mt-4 md:mt-0 m-5">
                        <h1 className={`text-2xl md:text-4xl font-bold ${titleColor}`}>{title}</h1>
                        <p className={`mt-2 md:mt-4 ${subtitleColor}`}>{subtitle}</p>
                    </div>
                    <div className="text-center w-full md:w-1/2 mt-4 md:mt-0 m-5">
                        <h1 className={`text-2xl md:text-4xl font-bold ${title2Color}`}>{title2}</h1>
                        <p className={`mt-2 md:mt-4 ${subtitle2Color}`}>{subtitle2}</p>
                        <div
                            className="relative right-0 -top-96 -translate-y-40 translate-x-56 bg-gradient-to-tr from-[#1E5D5D] to-transparent rotate-45 opacity-10"
                            style={{ width: '1000px', height: '1000px' }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;

// border border-black`