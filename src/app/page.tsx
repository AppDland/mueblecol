
import React from 'react';
import Card from "@/components/Card";
import Finder from "@/components/Finder";
import Items from "@/data/items.json";
import Intro from "@/modules/Intro";
import { ItemInt } from '@/interfaces/item';
import Categories from '@/modules/Categories';
import ModernCard from '@/components/ModernCard';
import SimpleCard from '@/components/SimpleCard';

const Home = () => {

    const typedItems = Items as unknown as { items: ItemInt[] };
    const allItems = typedItems.items.slice(0, 6);

    return (
        <>
            <Intro />
            <div className='-mt-6'>
                <Finder isDark={true} />
            </div>
            <Categories />
            <div className="flex flex-col relative w-full max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold my-4">Productos Destacados</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        allItems.map((item, index) => (
                            <SimpleCard
                                title={item.publicName}
                                url={item.name}
                                color={item.media[0].colorName}
                                image={item.media[0].photos[0]}
                                price={item.price}
                                offer={item.offer}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Home;
