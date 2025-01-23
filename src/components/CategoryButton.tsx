import React from 'react';
import Link from 'next/link';
import { upperFirst } from '@/functions/upperFirst';
import Image from 'next/image';

interface CategoryButtonProps {
    name: string;
    imagePath: string;
}

const CategoryButton = ({ name, imagePath }: CategoryButtonProps) => {

    return (
        <Link
            href={`/zonas/${name}`}
            className='relative place-self-center flex justify-center m-2 sm:m-5 items-center cursor-pointer select-none w-28 sm:w-48 h-36 sm:h-52 rounded-xl overflow-hidden group bg-accent'
        >
            <Image
                src={imagePath}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 duration-200 group-hover:scale-150 "
                style={{ filter: 'blur(0.5px)' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 mix-blend-multiply"></div>
            <h3 className="relative z-10 text-center text-white  sm:text-3xl font-cookie font-extralight">
                {upperFirst(name)}
            </h3>
        </Link>
    );
};

export default CategoryButton;