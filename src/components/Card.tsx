import React from 'react';
import Link from 'next/link';
import { ItemInt } from '@/interfaces/item';
import Image from 'next/image';
import { money } from '@/functions/money';
import classNames from 'classnames';

interface CardProps {
    item: ItemInt;
}

const Card: React.FC<CardProps> = ({ item }) => {
    const itemSlug = item.name.replaceAll(' ', '-');
    const mainImage = item.media[0]?.photos[0];
    // const availableColors = item.media.length;

    if (!mainImage) return null;

    return (
        <div className='border-b sm:border-none sm:rounded-lg border-gray-200'>
            <Link
                href={`/articulos/${itemSlug}`}
                className={classNames(
                    "bg-white flex px-5 sm:flex sm:flex-col py-6",
                    "w-full sm:w-48",
                    "h-40 sm:h-80",
                )}
            >
                <div className={classNames(
                    "overflow-hidden relative rounded-lg",
                    "w-2/5 sm:w-full",
                    "sm:h-3/5"
                )}>
                    <Image
                        src={mainImage}
                        alt={item.publicName}
                        fill
                        className="object-cover"
                        blurDataURL='/images/fallback.png'
                    />
                </div>
                <div className={classNames(
                    'px-3',
                    'w-3/5 sm:w-full',
                    'sm:h-2/5',
                )}>
                    <h3 className="font-medium text-sm truncate-2-lines mb-3 sm:mt-3">
                        {item.publicName}
                    </h3>
                    {
                        item.finan && (
                            item.finan.valor ? (
                                <p className='text-xs sm:text-sm italic truncate'>{item.finan.cuotas} cuotas de {money(item.finan.valor)}</p>
                            ) : (
                                <p className='text-xs sm:text-sm italic truncate'>Hasta en {item.finan.cuotas} cuotas</p>
                            )
                        )
                    }
                    <p className="text-lg sm:text-xl my-3">
                        {money(item.offer ? item.offer : item.price)}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Card;