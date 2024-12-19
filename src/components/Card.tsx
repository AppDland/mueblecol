import React from 'react';
import Link from 'next/link';
import { ItemInt } from '@/interfaces/item';
import Image from 'next/image';
import { money } from '@/functions/money';

interface CardProps {
    item: ItemInt;
}

const Card: React.FC<CardProps> = ({ item }) => {
    const itemSlug = item.name.replaceAll(' ', '-');
    const mainImage = item.media[0]?.photos[0];
    const isS3Image = mainImage?.startsWith('https://');
    const availableColors = item.media.length;

    if (!mainImage) return null;

    return (
        <Link
            href={`/articulos/${itemSlug}`}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow relative border border-[#272727] w-60 mx-6 my-4"
        >

            {/* Product Name Header */}
            <div className="bg-gray-900 text-white p-3">
                <h3 className="font-medium text-sm truncate">
                    {item.publicName}
                </h3>
            </div>

            {/* Product Image */}
            <div className="relative pb-[100%]">
                {isS3Image && (
                    <Image
                        src={mainImage}
                        alt={item.publicName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
            </div>
            <div className='p-2'>
                <div className="w-full border border-[#272727] opacity-15" />
            </div>
            {/* Price and Colors Section */}
            <div className="p-4 space-y-2">
                <div className="mt-2">
                    {/* {item.offer && (
                        <p className="text-sm text-[#272727] line-through opacity-70 -mb-1">
                            {money(item.price)}
                        </p>
                    )} */}
                    <p className="text-2xl text-[#272727]">
                        {money(item.offer ? item.offer : item.price)}
                    </p>
                </div>
                {/* <div className="text-sm text-gray-600">
                    {availableColors} {availableColors === 1 ? 'Color Disponible' : 'Colores Disponibles'}
                </div> */}
            </div>
        </Link>
    );
};

export default Card;