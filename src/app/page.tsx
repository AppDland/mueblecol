'use client';

import Intro from '@/modules/Intro';
import Finder from '@/components/Finder';
import Items from '@/data/items.json';
import Card from '@/components/Card';
import { ItemInt } from '@/interfaces/item';

export default function Home() {
    const allItems = Object.values(Items.rooms)
        .flatMap(room => room.items as ItemInt[])
        .slice(0, 6);

    return (
        <main>
            <Intro />
            <div className="flex flex-col relative w-full max-w-7xl mx-auto px-4">
                <Finder isDark={true} />
                
                <h2 className="text-2xl font-bold my-4">Productos Destacados</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allItems.map((item, index) => (
                        <Card item={item} key={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
