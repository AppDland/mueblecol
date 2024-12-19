"use client";
import Link from 'next/link';
import Finder from './Finder';
import { useEffect, useRef, useState } from 'react';
import Burger from './Burger';
import classNames from 'classnames';

const Header = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={'w-full flex justify-between items-center p-4 bg-secondary select-none relative'}>
            <div className="text-2xl font-bold flex">
                {
                    isLargeScreen &&
                    [{ title: "Mueble", color: "text-accent" }, { title: "col", color: "text-primary" }].map(({ title, color }, index) => (
                        <span key={index} className={color}>
                            {title}
                        </span>
                    ))
                }
            </div>
            <Finder />
            {
                isLargeScreen ? <Nav /> : <BurgerNav />
            }
        </header>
    );
};


const routes = [
    {
        title: "Inicio",
        href: "/"
    },
    {
        title: "Contacto",
        href: "/contacto"
    }
];

const Nav = () => {


    return (
        <nav>
            <ul className="flex space-x-4">
                {
                    routes.map(({ title, href }, index) => (
                        <li key={index} className='text-white'>
                            <Link href={href}>
                                {title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClose = (e: any) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClose);

        return () => {
            document.removeEventListener('click', handleClose);
        }
    }, []);

    return (
        <div className='absolute z-50 left-0 h-full' ref={navRef}>
            <Burger isOpen={isOpen} setIsopen={setIsOpen} />
            <nav className={classNames('absolute top-full mr-2 duration-200 w-52 p-4 bg-secondary', isOpen ? 'left-0' : '-left-56')} style={{ height: '100vh' }}>
                <ul>
                    {
                        routes.map(({ title, href }, index) => (
                            <li key={index} className='text-white'>
                                <Link href={href}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Header;