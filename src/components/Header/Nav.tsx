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

// const BurgerNav = () => {

//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }
//     }, [isOpen]);

//     useEffect(() => {
//         const handleClose = (e: any) => {
//             if (navRef.current && !navRef.current.contains(e.target)) {
//                 setIsOpen(false);
//             }
//         }

//         document.addEventListener('click', handleClose);

//         return () => {
//             document.removeEventListener('click', handleClose);
//         }
//     }, []);

//     return (
//         <>
//             <div className='absolute z-40 left-0 h-full' ref={navRef}>
//                 <Burger isOpen={isOpen} setIsopen={setIsOpen} />
//             </div>
//             <nav className={classNames('z-30 pt-16 sm:pt-20 absolute top-0 mr-2 duration-200 w-2/5 min-w-60 p-4 bg-secondary shadow-2xl', isOpen ? 'left-0' : '-left-96')} style={{ height: '100vh' }}>
//                 <ul>
//                     {
//                         routes.map(({ title, href }, index) => (
//                             <li key={index} className='text-white border-b border-gray-400 py-2'>
//                                 <Link href={href}>
//                                     {title}
//                                 </Link>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </nav>
//             <div
//                 className={classNames('absolute bg-black bg-opacity-30 z-20 top-0 left-0 backdrop-blur-sm duration-100', isOpen ? 'block' : 'hidden')}
//                 style={{ height: '100vh', width: '100vw' }}
//             />
//         </>
//     )
// }

// const NormalNav = () => {


//     return (
//         <nav>
//             <ul className="flex space-x-4">
//                 {
//                     routes.map(({ title, href }, index) => (
//                         <li key={index} className='text-white'>
//                             <Link href={href}>
//                                 {title}
//                             </Link>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </nav>
//     )
// }

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    // }, [isOpen]);

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
        <>
            <div
                className='z-40 left-0 h-full block md:hidden -order-1 -m-3 md:m-0'
                ref={navRef}
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
                            <li key={index} className={classNames(
                                'text-white',
                                'border-b border-gray-400 md:border-none',
                                'py-2 md:py-0'
                            )}>
                                <Link href={href}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div
                className={classNames(
                    'absolute bg-black bg-opacity-30 z-20 top-0 left-0 backdrop-blur-sm duration-100',
                    isOpen ? 'block md:hidden' : 'hidden',
                )}
                style={{ height: '100vh', width: '100vw' }}
            />
        </>
    )
}

export default Nav;