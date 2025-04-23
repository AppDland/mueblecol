'use client';
import { useLayoutEffect, useRef } from 'react';
import Nav from './Nav';
import { Finder } from '../finder/Finder';
import { Title } from './Title';
import Kart from '../kart';

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
            className={'w-full select-none fixed z-40 top-0 bg-white transition-shadow duration-75 grid grid-cols-[1fr_4fr_1fr] items-center p-3 py-4 sm:p-4 xl:px-10'}
        >
            <div className='hidden md:block'>
                <Title />
            </div>
            <div className='flex justify-center md:justify-center'>
                <Finder />
            </div>
            <div className='flex md:justify-end -order-1 md:order-1 items-center gap-4'>
                <div className='hidden md:block'>
                    <Kart />
                </div>
                <Nav />
            </div>
            <div className='md:hidden flex justify-end'>
                <Kart />
            </div>
        </header>
    );
};