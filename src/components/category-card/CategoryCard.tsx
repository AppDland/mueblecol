
import Link from 'next/link';
import { upperFirst } from '@/functions/upperFirst';
import Image from 'next/image';
import { Navigate } from '@/components';

interface CategoryButtonProps {
    name: string;
    imagePath: string;
}

const CategoryCard = ({ name, imagePath }: CategoryButtonProps) => {


    return (
        <Navigate
            href={`/zonas/${name}?page=1`}
            className='relative flex justify-center items-center m-2 sm:m-3 cursor-pointer select-none w-24 sm:w-40 h-32 sm:h-48 rounded-lg overflow-hidden group bg-accent'
        >
            <Image
                src={imagePath}
                alt={name}
                className="absolute inset-0 duration-200 sm:group-hover:scale-150 object-cover"
                sizes='100%'
                style={{ filter: 'blur(0.5px)' }}
                fill
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 mix-blend-multiply backdrop-blur-sm sm:group-hover:backdrop-blur-0"></div>
            <h3 className="relative z-10 text-center text-white text-2xl sm:text-3xl font-cookie font-extralight">
                {upperFirst(name)}
            </h3>
        </Navigate>
    );
};

export { CategoryCard };