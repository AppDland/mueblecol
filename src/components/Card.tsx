import Link from 'next/link';
import { ItemInt } from '@/interfaces/item';
import { money } from '@/functions/money';
import Image from 'next/image';

interface CardProps {
    item: ItemInt;
}

const Card: React.FC<CardProps> = ({ item }) => {
    const itemSlug = item.name.replaceAll(' ', '-');
    const mainImage = item.media[0]?.photos[0];
    const isS3Image = mainImage?.startsWith('https://');

    if (!mainImage) return null;

    return (
        <Link
            href={`/articulos/${itemSlug}`}
            className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
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
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.publicName}</h3>
                <p className="text-gray-600 text-sm mb-2">
                    {item.attributes.find(attr => attr.attributeId === 1)?.value}
                </p>
                <div>
                    {item.offer ? (
                        <>
                            <span className="text-gray-400 line-through">{money(item.price)}</span>
                            <span className="text-xl font-bold text-red-600 ml-2">{money(item.offer)}</span>
                        </>
                    ) : (
                        <span className="text-xl font-bold">{money(item.price)}</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default Card;