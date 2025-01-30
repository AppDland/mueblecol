'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Nav from './Nav';
import Title from './Title';
import { Finder } from '../finder/Finder';

export function Header() {
    const headerRef = useRef<HTMLDivElement>(null);

    // comentado para verificar el hydratation

    // useLayoutEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;

    //         // Ajusta la intensidad de la sombra según la posición
    //         if (headerRef.current) {
    //             const shadowLevel = Math.min(scrollY / 100, 2) * 2; // Máximo de 4 niveles
    //             headerRef.current.style.boxShadow = `0 2px ${shadowLevel}px rgba(0, 0, 0, ${shadowLevel / 30})`;
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
        <header
            ref={headerRef}
            className={'w-full select-none fixed md:relative z-40 top-0 bg-white transition-shadow duration-75'}
        >
            <div className='max-w-7xl w-full flex justify-between items-center p-3 sm:p-4 place-self-center relative'>
                <Title />
                <Finder />
                <Nav />
            </div>
        </header>
    );
};