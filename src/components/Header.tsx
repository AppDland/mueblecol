import Link from 'next/link';
import Finder from './Finder';

const Header = () => {
    return (
        <header className={'w-full flex justify-between items-center p-4 bg-secondary select-none'}>
            <div className="text-2xl font-bold flex">
                {
                    [{ title: "Mueble", color: "text-accent" }, { title: "col", color: "text-primary" }].map(({ title, color }, index) => (
                        <span key={index} className={color}>
                            {title}
                        </span>
                    ))
                }
            </div>
            <Finder />
            <Nav />
        </header>
    );
};

const Nav = () => {

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

export default Header;