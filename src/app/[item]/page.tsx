"use client";
import { useParams } from 'next/navigation';
import Items from '@/data/items.json';
import ImageViewer from '@/components/ImageViewer';
import { money } from '@/functions/money';
import { ItemInt } from '@/components/Card';
import AmountSelector from '@/components/AmountSelector';
import { useState } from 'react';

const Item = () => {
    const params = useParams();
    const { item } = params;

    const currentItem = item && typeof item === "string"
        ? Items.find(i => i.name === item.replaceAll('-', ' '))
        : undefined;

    if (!currentItem) {
        return <p>No se ha encontrado el articulo</p>;
    }


    return (
        <div className='flex'>
            <ImageViewer images={currentItem.images} />
            <ItemInfo item={currentItem} />
            {/* Agrega más detalles del item aquí */}
        </div>
    );
};

const ItemInfo = ({ item }: { item: ItemInt }) => {
    const [amount, setAmount] = useState(1);
    return (
        <div>
            <h1>{item.name}</h1>
            <p>{money(item.price)}</p>
            <AmountSelector
                value={amount}
                onChange={setAmount}
            />
        </div>
    );
}

export default Item;