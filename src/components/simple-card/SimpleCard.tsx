// 'use client';
import Image from "next/image";
import { money } from "../../functions/money";
import Link from "next/link";
import classNames from "classnames";
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
        <div className={classNames(
            "bg-white group border",
            "w-36 sm:w-48 md:w-52",
            "h-64 sm:h-72 md:h-96",
            "md:m-3"
        )}
        >
            <Link href={`/articulos/${url}`} className={classNames(
                "grid  grid-cols-1 h-full",
                "grid-rows-[1fr_auto_auto] md:grid-rows-[auto_1fr_auto_auto]"
            )}
            >
                <div
                    className={classNames(
                        "flex justify-center items-center",
                        "md:bg-accent-dark md:group-hover:bg-primary md:text-white",
                        "order-1 md:order-none",
                        "py-1 md:py-2"
                    )}
                >
                    {
                        finan.valor ? (
                            <p className='text-xs sm:text-sm'>{finan.cuotas} cuotas de {money(finan.valor)}</p>
                        ) : (
                            <p className='text-xs sm:text-sm'>Hasta en {finan.cuotas} cuotas</p>
                        )
                    }
                </div>
                <div className={classNames(
                    "relative",
                    "md:order-none"
                )}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-center p-0"
                    />
                </div>
                <p className={classNames(
                    "px-2 py-1 md:py-2 text-center truncate whitespace-nowrap md:group-hover:text-primary",
                    "md:border-t",
                    "text-sm md:text-base"
                )}>
                    {title}
                </p>
                <p className={classNames(
                    "text-center py-1 md:py-2 text-accent font-bold md:group-hover:text-primary",
                    "text-base md:text-xl"
                )}
                >
                    {money(price)}
                </p>
            </Link>
        </div>
    );
};

export { SimpleCard };