'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CategoriesInt } from '@/interfaces/categories';
import Link from 'next/link';

interface CategoryButtonProps {
    imageUrl: string;
    category: CategoriesInt;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
    imageUrl,
    category
}) => {
    const router = useRouter();

    const handleClick = () => {
        // onClick(category);
        router.push(`/category?category=${category}`);
    };

    return (
        <div
            onClick={handleClick}
            className="relative flex justify-center mx-1 md:mx-5 items-center cursor-pointer select-none w-20 sm:w-28 h-20 sm:h-28 rounded-full overflow-hidden group bg-accent"
            role="button"
            aria-label={`Select ${category.categoryName} category`}
        >
            <Link href={`/zonas/${category.categoryURLName}`}>
                <Squares />
                {/* <Image
                    src={imageUrl}
                    alt={category.categoryName}
                    objectFit="cover"
                    layout='fill'
                    className="absolute inset-0 duration-200 group-hover:scale-150 "
                    style={{ filter: 'blur(0.5px)' }}
                /> */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-40 mix-blend-multiply"></div> */}
                <h3 className="relative z-10 text-center text-white  sm:text-2xl font-cookie font-extralight">
                    {category.categoryName}
                </h3>
            </Link>
        </div>
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

export default CategoryButton; 3e4854667