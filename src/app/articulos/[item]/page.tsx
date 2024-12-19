"use client";
import { useParams } from 'next/navigation';
import Items from '@/data/items.json';
import ImageViewer from '@/components/ImageViewer';
import { money } from '@/functions/money';
import { ItemInt, ItemMedia } from '@/interfaces/item';
import AmountSelector from '@/components/AmountSelector';
import { useEffect, useState } from 'react';
import { findSimilarItems } from '@/functions/search';
import Card from '@/components/Card';
import ColorPicker from '@/components/ColorPicker';
import { useRouter } from 'next/navigation';
import Finder from '@/components/Finder';

const Item = () => {
    const params = useParams();
    const { item } = params;

    const [selectedColor, setSelectedColor] = useState<ItemMedia>();
    const typedItems = Items as unknown as { items: ItemInt[] };
    const currentItem = item && typeof item === "string"
        ? typedItems.items.find(i => i.name.replaceAll(' ', '-') === item)
        : undefined;

    useEffect(() => {
        if (currentItem) {
            setSelectedColor(currentItem.media[0]);
        }
    }, [currentItem]);

    if (!currentItem) {
        return <p>No se ha encontrado el artículo</p>;
    }

    const similarItems = findSimilarItems(currentItem);
    const photos = selectedColor?.photos.filter(photo => photo.startsWith('https://'));


    return (
        <div className='flex flex-col max-w-7xl mx-auto px-4 py-8'>
            {/* Contenedor para el título o encabezado */}
            <div className='flex justify-end items-center mb-8'>
                <div>
                    <Finder />
                </div>
            </div>
    
            {/* Contenido principal */}
            <div className='flex gap-8'>
                <div className='w-2/3'>
                    {photos && photos.length > 0 && (
                        <ImageViewer images={photos} />
                    )}
                </div>
                <div className='w-1/3'>
                    {selectedColor && (
                        <ItemInfo
                            item={currentItem}
                            selectedColor={selectedColor}
                            onColorSelect={setSelectedColor}
                        />
                    )}
                </div>
            </div>
    
            {/* Descripción del artículo */}
            <div className='my-2 p-2'>
                <p className='font-bold mb-2'>Acerca de este artículo</p>
                <p className='text-gray-600'>{currentItem.description}</p>
            </div>
    
            {/* Items similares */}
            {similarItems.length > 0 && (
                <div className='mt-16'>
                    <h2 className='text-2xl font-bold mb-8'>Similares</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {similarItems.map((item) => (
                            <Card key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
    
};

const ItemInfo = ({ item, selectedColor, onColorSelect }: { item: ItemInt, selectedColor: ItemMedia, onColorSelect: (color: ItemMedia) => void }) => {
    const [amount, setAmount] = useState(1);
    const router = useRouter();
    const handlePurchase = () => {
        router.push('/gracias');
    };

    return (
        <div className='space-y-4'>
            <h1 className='text-2xl font-bold'>{item.publicName}</h1>
            <p className='text-3xl font-bold text-primary'>{money(item.price)}</p>

            {item.media.length > 1 && (
                <div>
                    <p className='text-gray-600 mb-2'>Color</p>
                    <ColorPicker
                        colors={item.media}
                        onColorSelect={onColorSelect}
                        selectedColor={selectedColor}
                        layout='vertical'
                    />
                </div>
            )}

            {/* <div className='py-4'>
                <p className='text-gray-600 mb-2'>Cantidad:</p>
                <AmountSelector
                    value={amount}
                    onChange={setAmount}
                />
            </div> */}
            <div>
                <button
                    onClick={handlePurchase}
                    className="w-full bg-secondary hover:bg-secondary-focus text-secondary-content font-bold py-4 rounded-lg transition-all duration-200"
                >
                    Comprar
                </button>
            </div>
        </div>
    );
}

export default Item;