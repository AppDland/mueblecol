"use client";
import { useParams } from 'next/navigation';
import Items from '@/data/items.json';
import ImageViewer from '@/components/ImageViewer';
import { money } from '@/functions/money';
import { ItemInt, ItemMedia } from '@/interfaces/item';
import { useEffect, useState } from 'react';
import { findSimilarItems } from '@/functions/search';
import Card from '@/components/Card';
import ColorPicker from '@/components/ColorPicker';
import { useRouter } from 'next/navigation';
import FinancingInfo from '@/components/FinancingInfo';
import { KartProvider } from '@/context/kart.context';
import addToKart from '@/custom/useKart';


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
        <div className='flex flex-col max-w-7xl mx-auto px-4 py-8 bg-neutral-100 border border-neutral-200 rounded-lg'>
            {/* Contenido principal */}
            <div className='flex flex-col sm:flex-row h-full'>
                {photos && photos.length > 0 && (
                    <ImageViewer images={photos} />
                )}
                {selectedColor && (
                    <ItemInfo
                        item={currentItem}
                        selectedColor={selectedColor}
                        onColorSelect={setSelectedColor}
                    />
                )}
            </div>

            {/* Descripción del artículo */}
            <div className='my-2 p-2'>
                <p className='font-bold mb-2'>Acerca de este artículo</p>
                <p className='text-gray-600'>{currentItem.description}</p>
            </div>

            {/* Items similares */}
            {
                similarItems.length > 0 && (
                    <div className='mt-16'>
                        <h2 className='text-2xl font-bold mb-8'>Similares</h2>
                        <div className='flex flex-wrap'>
                            {
                                similarItems.map((item, id) => (
                                    <Card key={id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

const ItemInfo = ({ item, selectedColor, onColorSelect }: { item: ItemInt, selectedColor: ItemMedia, onColorSelect: (color: ItemMedia) => void }) => {
    // const [amount, setAmount] = useState(1);
    const router = useRouter();
    const handlePurchase = () => {
        router.push('/gracias');
        //abrir una nueva ventana que dirige a una ruta de whatsapp
        const Message = `Hola! Quiero comprar ${item.publicName}`;
        window.open('https://wa.me/' + process.env.NEXT_PUBLIC_WHATSAPP + '?text=' + Message, '_blank');
    };

    const handleAddToCart = () => {
        addToKart(item);
        console.log('Añadido al carrito');
    };

    return (
        <div className='flex flex-col flex-grow justify-between p-4 sm:w-1/2'>
            <h1 className='text-2xl font-bold'>{item.publicName}</h1>
            <div className='mb-8'>
                {
                    item.finan.valor ? (
                        <FinancingInfo
                            title='Financiamiento'
                            valor={item.finan.valor}
                            cuotas={item.finan.cuotas}
                            descrip='¿Qué estás esperando? Puedes obtener este artículo hasta en'
                            moneyFormatter={money}
                        />
                    ) : (
                        <FinancingInfo
                            title='Financiamiento'
                            cuotas={item.finan.cuotas}
                            descrip='¿Qué estás esperando? Puedes obtener este artículo hasta en'
                        />
                    )}
            </div>
            <div className='flex flex-col w-full space-y-8'>
                <p className='text-3xl font-bold text-primary'>{money(item.price)}</p>

                {/* {item.media.length > 1 && (
                    <div>
                        <p className='text-gray-600 mb-2'>Color</p>
                        <ColorPicker
                            colors={item.media}
                            onColorSelect={onColorSelect}
                            selectedColor={selectedColor}
                            layout='vertical'
                        />
                    </div>
                )} */}

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
                        className="w-full my-2 bg-secondary hover:bg-secondary-focus text-secondary-content font-bold py-4 rounded-lg transition-all duration-200"
                    >
                        Comprar
                    </button>
                    {/* agrega un articulo seleccionado al carrito */}
                    <button
                        onClick={() => handleAddToCart()}
                        className="w-full my-2 bg-secondary hover:bg-secondary-focus text-secondary-content font-bold py-4 rounded-lg transition-all duration-200"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Item;