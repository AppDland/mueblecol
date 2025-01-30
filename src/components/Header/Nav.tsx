'use client'
import { useState } from "react";
import Burger from "./Burger";
import classNames from "classnames";
import Link from "next/link";
import { sideBarState } from "@/store";

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

    const { isOpen, close, animated } = sideBarState();

    const handleGesture = () => {
        close();

        // comentado por hydratation
        // falta logica para ios 
        // window.navigator.vibrate(10);
    }

    return (
        <div className='z-30 left-0 h-full -m-3'>
            <Burger />
            <div
                className={classNames("backdrop-custom",
                    isOpen ? 'block' : 'hidden',
                    animated ? 'opacity-100' : 'opacity-0',
                )}
                onClick={close}
            />
            <nav
                className={classNames(
                    'z-30 top-0 duration-200',
                    animated ? 'right-0' : '-right-96',
                    'pt-16 sm:pt-20 p-4',
                    'absolute',
                    'w-2/5 min-w-60',
                    'h-screen',
                    'bg-secondary',
                    'shadow-xl md:shadow-none'
                )}
            >
                <ul>
                    {
                        routes.map(({ title, href }, index) => (
                            <Link href={href} key={index} onClick={handleGesture}>
                                <li key={index} className={classNames(
                                    'text-white',
                                    'border-b border-gray-100',
                                    'py-2 pl-3',
                                    'my-5',
                                )}>
                                    {title}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Nav;