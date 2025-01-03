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
}

const SimpleCard = ({ image, title, color, price, url, offer }: SimpleCardProps) => {

    return (
        <div className="bg-white w-44 md:w-52 h-80 md:h-96 m-1 md:m-3 group">
            <Link href={`/articulos/${url}`}>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="h-3/4 object-cover object-center p-3 transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="border-t h-1/4 flex flex-col justify-center items-center">
                    <p className="text-center text-lg md:text-xl text-accent my-1 font-bold">
                        {money(price)}
                    </p>
                    <h2 className="px-2 mt-2 text-center text-[#000000] text-sm md:text-base w-full truncate whitespace-nowrap">
                        {title}
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default SimpleCard;