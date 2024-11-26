import Image from 'next/image';
import { money } from '../functions/money';
import Link from 'next/link';
import { ItemInt } from '@/interfaces/item';

export interface ItemInt {
    id: string;
    name: string;
    price: number;
    images: string[];
    specifications: {
        material?: string;
        height?: number;
        width?: number;
        depth?: number;
        colors: string[];
        features: string[];
        pieces?: string[];
    };
    detail: string;
    specificSynonyms?: {
        type?: string[];
        style?: string[];
        features?: string[];
        size?: string[];
        pieces?: string[];
    };
}
const Card = ({ item }: { item: ItemInt }) => {

    return (
        <Link href={`/${item.name.replaceAll(' ', '-')}`}>
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <h2 className="text-center bg-[#535353] text-white py-3 px-4 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.name}
                </h2>
                <div className="p-4">
                    <Image
                        src={item.images?.[0] || '/no-image.png'}
                        alt={item.name}
                        width={300}
                        height={300}
                        className='w-full aspect-square object-contain'
                    />
                    <div className="border-t my-4" />
                    <p className="font-bold text-2xl text-center mb-2">
                        {money(item.price)}
                    </p>
                    <p className='text-center text-sm text-gray-500'>
                        {item.specifications.colors.length} 
                        {item.specifications.colors.length > 1 ? " colores disponibles" : " color disponible"}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card;