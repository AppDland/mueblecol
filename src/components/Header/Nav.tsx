import { useEffect, useRef, useState } from "react";
import Burger from "./Burger";
import classNames from "classnames";
import useLargeScreen from "@/custom/useLargeScreen";
import Link from "next/link";

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
                            <li key={index} className='text-white border-b border-gray-400 py-2'>
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

const NormalNav = () => {


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

const Nav = () => {
    const isLargeScreen = useLargeScreen(768);
    return isLargeScreen ? <NormalNav /> : <BurgerNav />
}

export default Nav;