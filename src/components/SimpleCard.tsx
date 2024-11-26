'use client';
import Image from "next/image";
import { money } from "../functions/money";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SimpleCardProps {
    image: string;
    title: string;
    color: string;
    price: number;
    offer?: number;
}

const SimpleCard = ({ image, title, color, price, offer }: SimpleCardProps) => {
    
    const [realTitle, setRealTitle] = useState('');

    useEffect(() => {    
        const [first, second, third] = title.split(" ");
        const real = `${first} ${second.length > 1 ? second : second} ${second.length > 1 ? '' : third}`;
        setRealTitle(real);
    }, []);

    return (
        <Link href={`/${title.replaceAll(' ', '-')}`}>
            <div className="cursor-pointer relative border-2 border-[#272727] p-4 rounded-2xl rounded-tl-none w-52 mx-8 my-6 group">
                <h2 className="absolute -left-6 bg-[#272727] rounded-lg rounded-tr-none py-2 px-4 text-white">
                    {realTitle}
                </h2>
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="my-10 rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
                <div className="relative px-5 ">
                    <p className="relative bg-white px-4 w-fit z-10 text-sm">
                        {color}
                    </p>
                    <div className="absolute left-0 top-1/2 w-full border border-[#272727] z-0" />
                </div>
                <div className="mt-2">
                    {offer && (
                        <p className="text-sm text-[#272727] line-through opacity-70 -mb-1">
                            {money(price)}
                        </p>
                    )}
                    <p className="text-2xl text-[#272727]">
                        {money(offer ? offer : price)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SimpleCard;