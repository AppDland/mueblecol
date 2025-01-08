'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ItemInt } from '@/interfaces/item';
import Card from '@/components/Card';
import Items from '@/data/items.json';

const titles = [
    "Todo lo que necesitas para tu",
    "Encuentra el mueble ideal para tu",
    "Descubre los mejores muebles para tu",
    "Los mejores muebles para tu",
    "Encuentra los mejores muebles para tu"
]

const Zones = () => {
    const params = useParams();
    const { zone } = params;
    const [filteredItems, setFilteredItems] = useState<ItemInt[]>([]);
    const [customTitle, setCustomeTitle] = useState<string>('');

    useEffect(() => {

        if (zone && typeof zone === "string") {
            //obtengo los items que esten en la misma zona 
            const filteredItems = Items.items.filter(item => item.zones.map(zone => zone.toLowerCase()).includes(zone.toLowerCase()));
            setFilteredItems(filteredItems);
            if (zone === "exteriores") {
                setCustomeTitle("Muebles para Exteriores");
            } else {
                const randomTitle = titles[Math.floor(Math.random() * titles.length)];
                setCustomeTitle(randomTitle + " " + zone);
            }
        }
    }, [zone]);

    return (
        <div>
            <h1 className="text-xl sm:text-2xl font-bold text-center my-8">{customTitle}</h1>
            <div className="flex flex-wrap justify-center">
                {
                    filteredItems.map((item) => (
                        <Card key={item.name} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default Zones;