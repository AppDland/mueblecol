import React from 'react';
import Link from 'next/link';
import { upperFirst } from '@/functions/upperFirst';

interface CategoryButtonProps {
    name: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
    name
}) => {

    return (
        <Link
            href={`/zonas/${name}`}
            className='relative flex justify-center m-1 md:m-5 items-center cursor-pointer select-none w-20 sm:w-28 h-20 sm:h-28 rounded-full overflow-hidden group bg-accent'
        >
            <Squares />
            <h3 className="relative z-10 text-center text-white  sm:text-2xl font-cookie font-extralight">
                {upperFirst(name)}
            </h3>
        </Link>
    );
};


const Squares = () => (
    <>
        <div className='absolute bg-primary w-12 sm:w-16 h-12 sm:h-16 -top-1 -right-3 group-hover:-top-3 group-hover:-right-5 duration-200 opacity-20' />
        <div className='absolute bg-primary w-12 sm:w-16 h-12 sm:h-16 -top-5 -left-3 group-hover:-top-7 group-hover:-left-5 duration-200 opacity-15' />
        <div className='absolute bg-primary w-12 sm:w-16 h-12 sm:h-16 -bottom-5 -right-3 group-hover:-bottom-7 group-hover:-right-5 duration-200 opacity-10' />
        <div className='absolute bg-primary w-12 sm:w-16 h-12 sm:h-16 -bottom-1 -left-3 group-hover:-bottom-3 group-hover:-left-5 duration-200 opacity-5' />
    </>
)

export default CategoryButton;