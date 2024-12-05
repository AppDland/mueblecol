'use client';
import Items from '@/data/items.json';
import { ItemInt } from '@/interfaces/item';
import Card from '@/components/Card';
import Finder from '@/components/Finder';
import Intro from '@/modules/Intro';

export default function Home() {
    const typedItems = Items as unknown as { items: ItemInt[] };
    const allItems = typedItems.items.slice(0, 6);

    return (
        <main>
            <Intro />
            <div className="flex flex-col relative w-full max-w-7xl mx-auto px-4">
                <Finder isDark={true} />
                
                <h2 className="text-2xl font-bold my-4">Productos Destacados</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {allItems.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
            </div>
        </main>
    );
}
