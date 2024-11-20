import Image from 'next/image';
import { money } from '../functions/money';

export interface ItemInt {
    name: string;
    price: number;
    image: string;
    colors: string[];
}
const Card = ({ item }: { item: ItemInt }) => {

    return (
        <div className="flex flex-col max-w-72 w-full bg-white border border-[#535353] rounded-xl overflow-hidden select-none cursor-pointer hover:opacity-80 m-5">
            <h2 className="text-center bg-[#535353] text-white p-4 mb-5 overflow-hidden text-nowrap text-ellipsis">{item.name}</h2>
            <Image
                src={`/${item.image}`}
                alt={item.name}
                width={300}
                height={600}
                className='h-56 aspect-square place-self-center rounded-md m-5 object-contain'
            />
            <div className="border my-8 mx-3" />
            <p className="font-bold text-3xl text-center mb-2">{money(item.price)}</p>
            <p className='text-center mb-6 text-gray-500'>{item.colors.length} {item.colors.length > 1 ? "colores disponibles" : "color disponible"} </p>
        </div>
    )
}

export default Card;