import Link from 'next/link';
import Finder from '../Finder';
import useLargeScreen from '@/custom/useLargeScreen';
import Nav from './Nav';
import Title from './Title';

const Header = () => {

    return (
        <header className={'w-full flex justify-between items-center p-3 sm:p-4 bg-third select-none relative'}>
            <Title />
            <Finder />
            <Nav />
        </header>
    );
};




export default Header;