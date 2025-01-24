"use client";
import { useParams } from 'next/navigation';
import Items from '@/data/items.json';
import ImageViewer from '@/components/ImageViewer/ImageViewer';
import { money } from '@/functions/money';
import { ItemInt } from '@/interfaces/item';
import { useEffect, useState } from 'react';
import { findSimilarItems } from '@/functions/search';
// import ColorPicker from '@/components/ColorPicker';
import { useRouter } from 'next/navigation';
import FinancingInfo from '@/components/FinancingInfo';
import Carrousel from '@/components/Carrousel';
import SimpleCard from '@/components/SimpleCard';
import classNames from 'classnames';

const Item = () => {
    const params = useParams();
    const { item } = params;
    const [currentItem, setCurrentItem] = useState<ItemInt>();
    const [similarItems, setSimilarItems] = useState<ItemInt[]>([]);


    useEffect(() => {
        const foundItem = item && typeof item === "string"
            ? Items.items.find(i => i.name.replaceAll(' ', '-') === item)
            : undefined;

        setCurrentItem(foundItem);
        if (foundItem) setSimilarItems(findSimilarItems(foundItem));
        // if (currentItem) {
        //     setSelectedColor(currentItem.media[0]);
        // }
    }, [item]);

    return (
        currentItem ? (
            <div className='flex flex-col max-w-7xl mx-auto px-4 py-8 bg-neutral-100 rounded-lg'>
                {/* Contenido principal */}
                <div className='flex flex-col sm:flex-row h-full'>
                    {/* {photos && photos.length > 0 && ( */}
                    <ImageViewer images={currentItem.media[0].photos} />
                    {/* )} */}
                    {/* {selectedColor && ( */}
                    <ItemInfo
                        item={currentItem}
                    // selectedColor={selectedColor}
                    // onColorSelect={setSelectedColor}
                    />
                    {/* )} */}
                </div>

                {/* Descripción del artículo */}
                <div className='my-2 p-2'>
                    <p className='font-bold mb-2'>Acerca de este artículo</p>
                    <p className='text-gray-600'>{currentItem.description}</p>
                </div>

                {/* ATRIBUTOS */}
                {currentItem.attributes && <Attributes attributes={currentItem.attributes} />}

                {/* Items similares */}
                {
                    similarItems.length > 0 && (
                        <div className='mt-16'>
                            <h2 className='text-2xl font-bold mb-8'>Similares</h2>
                            <Carrousel>
                                {
                                    similarItems.map((item, id) => (
                                        <SimpleCard
                                            key={id}
                                            color='white'
                                            finan={item.finan}
                                            image={item.media[0].photos[0]}
                                            price={item.price}
                                            title={item.publicName}
                                            url={item.name}
                                        />
                                    ))
                                }
                            </Carrousel>
                        </div>
                    )
                }
            </div>

        ) : (
            <p>No se ha encontrado el artículo</p>
        )
    )
};

const ItemInfo = ({ item, }: { item: ItemInt }) => {
    // const [amount, setAmount] = useState(1);
    const router = useRouter();
    const handlePurchase = () => {
        router.push('/gracias');
        //abrir una nueva ventana que dirige a una ruta de whatsapp
        const Message = `Hola! Quiero comprar ${item.publicName}`;
        window.open('https://wa.me/' + process.env.NEXT_PUBLIC_WHATSAPP + '?text=' + Message, '_blank');
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
                        className="w-full bg-secondary hover:bg-secondary-focus text-secondary-content font-bold py-4 rounded-lg transition-all duration-200"
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}

interface attributesInt {
    attributeId: number;
    value: string;
}

const Attributes = ({ attributes }: { attributes: attributesInt[] }) => (
    <div className='my-2 p-2 w-full max-w-2xl'>
        <h4 className='font-bold'>Características</h4>
        <div className='border mt-3'>
            {
                attributes.map((attr, id) => (
                    <span key={id} className={classNames(
                        'grid grid-cols-2 gap-2 p-2',
                        id % 2 === 0 ? 'bg-neutral-200' : 'bg-neutral-100'
                    )}>
                        <p className='opacity-80'>{Items.attributes[attr.attributeId - 1].name}</p>
                        <p className='font-semibold'>{attr.value}</p>
                    </span>
                ))
            }
        </div>
    </div>
)

export default Item;