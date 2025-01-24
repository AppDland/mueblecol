import { useEffect, useRef, useState } from "react";
import Burger from "./Burger";
import classNames from "classnames";
import Link from "next/link";
import Backdrop from "../Backdrop";

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
    const [isOpen, setIsOpen] = useState(false);
    // const navRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleClose = (e: any) => {
    //         if (navRef.current && !navRef.current.contains(e.target)) {
    //             console.log('close');
    //             setIsOpen(false);
    //         } else {
    //             console.log('open');
    //         }
    //     }

    //     document.addEventListener('click', handleClose);

    //     return () => {
    //         document.removeEventListener('click', handleClose);
    //     }
    // }, []);

    const handleGesture = () => {
        setIsOpen(false);
        window.navigator.vibrate(10);
    }

    return (
        <>
            <div
                className='z-40 left-0 h-full block md:hidden -order-1 -m-3 md:m-0'
            >
                <Burger isOpen={isOpen} setIsopen={setIsOpen} />
            </div>
            <nav
                className={classNames(
                    'z-30 top-0 duration-200',
                    isOpen ? 'left-0 md:left-auto' : '-left-96 md:left-auto',
                    'pt-16 sm:pt-20 p-4 md:p-0',
                    'absolute md:relative',
                    'mr-2 md:mr-0',
                    'w-2/5 md:w-auto min-w-60 md:min-w-max',
                    'h-screen md:h-auto',
                    'bg-secondary md:bg-transparent',
                    'shadow-xl md:shadow-none'
                )}
            >
                <ul className={classNames(
                    'block md:flex',
                    'space-x-0 md:space-x-4'
                )}>
                    {
                        routes.map(({ title, href }, index) => (
                            <Link href={href} key={index} onClick={handleGesture}>
                                <li key={index} className={classNames(
                                    'text-white md:text-secondary md:hover:text-accent',
                                    'border-b border-gray-100 md:border-none',
                                    'py-2 md:py-0 pl-3 md:pl-0',
                                    'my-5 md:my-0',
                                )}>
                                    {title}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
            <Backdrop
                className={'md:hidden'}
                onClick={() => setIsOpen(false)}
                show={isOpen}
            />
        </>
    )
}

export default Nav;