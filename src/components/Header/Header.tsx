'use client';
import { useLayoutEffect, useRef } from 'react';
import Nav from './Nav';
import { Finder } from '../finder/Finder';
import { Title } from './Title';

export function Header() {
    const headerRef = useRef<HTMLDivElement>(null);


    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Ajusta la intensidad de la sombra según la posición
            if (headerRef.current) {
                const shadowLevel = Math.min(scrollY / 100, 2) * 2; // Máximo de 4 niveles
                headerRef.current.style.boxShadow = `0 2px ${shadowLevel}px rgba(0, 0, 0, ${shadowLevel / 20})`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            ref={headerRef}
            className={'w-full select-none fixed z-40 top-0 bg-white transition-shadow duration-75 flex justify-between items-center p-3 py-4 sm:p-4 xl:px-10'}
        >
            <div className='w-1/5 hidden md:block'>
                <Title />
            </div>
            <div className='w-4/5 flex justify-end md:justify-center'>
                <Finder />
            </div>
            <div className='w-fit md:w-1/5 flex sm:justify-end -order-1 md:order-1'>
                <Nav />
            </div>
        </header>
    );
};