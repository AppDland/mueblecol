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

    // const [realTitle, setRealTitle] = useState('');
    // const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="cursor-pointer relative border border-[#c2c2c2] rounded-2xl w-40 md:w-52 h-64 md:h-80 m-4 md:m-5 group box-content transition-shadow duration-200 ease-in-out hover:shadow-lg select-none overflow-hidden">
            <Link href={`/articulos/${url}`}>

                {/* {
                    imageLoaded && (
                        <div className="w-full h-52 flex items-center justify-center border">
                            <p>Cargando...</p>
                        </div>
                    )
                } */}
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                // onLoad={() => setImageLoaded(true)}
                />
                {/* <div className="relative px-5 ">
                    <p className="relative bg-white px-4 w-fit z-10 text-sm">
                        {color}
                    </p>
                    <div className="absolute left-0 top-1/2 w-full border-b border-[#272727] z-0" />
                </div> */}
                {/* {offer && (
                        <p className="text-sm text-[#272727] line-through opacity-70 -mb-1">
                            {money(price)}
                        </p>
                    )} */}
                <div className="absolute bottom-0 w-full py-2 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg">
                    <p className="text-center text-lg md:text-xl text-[#000000]">
                        {money(offer ? offer : price)}
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