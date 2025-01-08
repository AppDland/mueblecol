// 'use client';
import Image from "next/image";
import { money } from "../functions/money";
import Link from "next/link";
// import { useEffect, useState } from "react";

interface SimpleCardProps {
    image: string;
    title: string;
    color: string;
    price: number;
    url: string;
    offer?: number | null;
    finan: FinanInt;
}

interface FinanInt {
    cuotas: number;
    valor?: number;
}

const SimpleCard = ({ image, title, color, price, url, offer, finan }: SimpleCardProps) => {

    return (
        <div className="bg-white w-44 md:w-52 h-80 md:h-96 m-2 md:m-3 group">
            <Link href={`/articulos/${url}`}>
                <div
                    className="flex justify-center items-center bg-accent-dark text-white"
                    style={{ height: '8%' }}
                >
                    {
                        finan.valor ? (
                            <p className='text-xs sm:text-sm'>{finan.cuotas} cuotas de {money(finan.valor)}</p>
                        ) : (
                            <p className='text-xs sm:text-sm'>Hasta en {finan.cuotas} cuotas</p>
                        )
                    }
                </div>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="object-cover object-center p-3 transition-transform duration-300 ease-in-out group-hover:scale-105"
                    style={{ height: '72%' }}
                />
                <div
                    className="border-t flex flex-col justify-evenly items-center"
                    style={{ height: '20%' }}
                >
                    <p className="text-center text-lg md:text-xl text-accent font-bold">
                        {money(price)}
                    </p>
                    <h2 className="px-2 text-center text-[#000000] text-sm md:text-base w-full truncate whitespace-nowrap">
                        {title}
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default SimpleCard;