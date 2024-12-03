'use client';

import React, { useState } from 'react';
import Button from "@/components/Button";
import Card, { ItemInt } from "@/components/Card";
import CategoryButton from "@/components/CategoryButton";
import Finder from "@/components/Finder";
import Kart from "@/components/kart";
import Items from "@/data/items.json";
import Intro from "@/modules/Intro";

const Home = () => {
    const [text, setText] = useState('');
    const [found, setFound] = useState<ItemInt[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleFind = () => {
        console.log(Items.filter(({ name }) => name.includes(text)));
        setFound(Items.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase())));
    };

    const categories = [
        { imageUrl: '/images/categories/sala.jpg', category: 'Sala' },
        { imageUrl: '/images/categories/dormitorio.png', category: 'Dormitorio' },
        { imageUrl: '/images/categories/cocina.jpeg', category: 'Cocina' },
        { imageUrl: '/images/categories/baño.jpg', category: 'Baño' },
        // Agrega más categorías según sea necesario
    ];

    return (
        <>
            <Intro
                className='flex flex-col items-center w-full'
                headerTitle={["Mueble", "Col"]}
                headerTitleColors={['text-[#177675]', 'text-[#2E9896]']}
                title="Muebles Para El Hogar"
                subtitle="¡Gran Variedad!"
                title2="Envío Gratis"
                subtitle2="Llevamos A La Puerta De Tu Casa"
                title2Color="text-[#005353]"
                subtitle2Color="text-[#005353]"
                headerBgColor="bg-[#005353]"
                backgroundImage="/images/Frame1.png"
                headerButtons={[
                    <Button
                        className="mx-2iokgvhb mt-1"
                        text="Inicio"
                    />,
                    <Button
                        className="mx-2iokgvhb mt-1"
                        text="Contacto"
                    />,
                    <Button
                        className="mx-2"
                        iconSrc="/images/kart.svg"
                        width="30px"
                        height="30px"
                        iconHeight={50}
                        iconWidth={50}
                    />
                ]}
            />
            <div className="flex flex-col relative items-center justify-center mt-0">
                <Finder value={text} setValue={setText} onFind={handleFind} />
                {found.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
                <div className="overflow-y-auto max-h-96 w-full">
                    <div className="flex flex-wrap justify-center space-x-4">
                        {categories.map((cat, index) => (
                            <CategoryButton
                                key={index}
                                imageUrl={cat.imageUrl}
                                category={cat.category}
                                onClick={setSelectedCategory}
                                width="w-32 sm:w-40 md:w-48 lg:w-56"
                                height="h-32 sm:h-40 md:h-48 lg:h-56"
                                hoverEffect="hover:opacity-80"
                                titleColor="text-black-500"
                                titleBgColor="bg-transparent"
                                titleBgOpacity="bg-opacity-75"
                                titlePadding="p-4"
                                titleRounded="rounded-full"
                                titleFontSize="text-xl"
                                titleFontWeight="font-bold"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Kart />
            </div>
        </>
    );
};

export default Home;
