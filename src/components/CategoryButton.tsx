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
            className="relative flex justify-center md:mx-5 items-center cursor-pointer select-none w-full md:w-28 h-28 hover:opacity-90 md:rounded-full overflow-hidden group"
            role="button"
            aria-label={`Select ${category.categoryName} category`}
        >
            <Link href={`/zonas/${category.categoryURLName}`}>
                <Image
                    src={imageUrl}
                    alt={category.categoryName}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 duration-200 group-hover:scale-150 "
                    style={{ filter: 'blur(0.5px)' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 mix-blend-multiply"></div>
                <h3 className="relative z-10 text-center text-white text-3xl font-cookie font-extralight">
                    {category.categoryName}
                </h3>
            </Link>
        </div>
    );
};

export default CategoryButton;