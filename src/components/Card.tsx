import Image from 'next/image';
import { money } from '../functions/money';
import Link from 'next/link';

export interface ItemInt {
    name: string;
    price: number;
    category: string;
    images: string[];
    colors: string[];
}

const Card = ({ item }: { item: ItemInt }) => {
    return (
        <Link href={`/${item.name.replaceAll(' ', '-')}`}>
            <div className="flex flex-col max-w-xs w-full bg-white border border-gray-300 rounded-xl overflow-hidden select-none cursor-pointer hover:opacity-80 m-5">
                <h2 className="text-center bg-gray-500 text-white p-4 mb-5 overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</h2>
                <div className="relative h-56 aspect-square place-self-center rounded-md m-5">
                    <Image
                        src={item.images[0]}
                        alt={item.name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <div className="border my-8 mx-3" />
                <p className="font-bold text-3xl text-center mb-2">{money(item.price)}</p>
                <p className="text-center mb-6 text-gray-500">{item.colors.length} {item.colors.length > 1 ? "colores disponibles" : "color disponible"}</p>
            </div>
        </Link>
    );
};

export default Card;