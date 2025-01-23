import Finder from '../Finder';
import Nav from './Nav';
import Title from './Title';

const Header = () => {

    return (
        <header className={'w-full bg-third select-none'}>
            <div className='max-w-7xl w-full flex justify-between items-center p-3 sm:p-4 place-self-center relative'>
                <Title />
                <Finder />
                <Nav />
            </div>
        </header>
    );
};




export default Header;