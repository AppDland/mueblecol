import Link from 'next/link';
import Finder from '../Finder';
import useLargeScreen from '@/custom/useLargeScreen';
import Nav from './Nav';

const Header = () => {

    const isLargeScreen = useLargeScreen(768);

    return (
        <header className={'w-full flex justify-between items-center p-3 sm:p-4 bg-third select-none relative'}>
            <Link href="/">
                <div className="text-2xl font-bold flex">
                    {
                        isLargeScreen &&
                        [{ title: "Mueble", color: "text-secondary" }, { title: "col", color: "text-primary" }].map(({ title, color }, index) => (
                            <span key={index} className={color}>
                                {title}
                            </span>
                        ))
                    }
                </div>
            </Link>
            <Finder />
            <Nav />
        </header>
    );
};




export default Header;