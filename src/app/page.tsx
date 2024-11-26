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

    const handleFind = () => {
        console.log(Items.filter(({ name }) => name.includes(text)));
        setFound(Items.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase())));
    };

    const categories = [
        { imageUrl: '', category: 'Sala' },
        { imageUrl: '', category: 'Dormitorio' },
        { imageUrl: '', category: 'Cocina' },
        { imageUrl: '', category: 'Baño' },
        { imageUrl: '', category: 'Oficina' },
        { imageUrl: '', category: 'Jardín' },
        // Agrega más categorías según sea necesario
    ];

    return (
        <>
            <Intro
                headerTitle={["Mueble", "Col"]}
                headerTitleColors={['text-[#177675]', 'text-[#2E9896]']}
                title="Muebles Para El Hogar"
                subtitle="¡Gran Variedad!"
                title2="Envío Gratis"
                subtitle2="Llevamos A La Puerta De Tu Casa"
                title2Color="text-[#005353]"
                subtitle2Color="text-[#005353]"
                bgColor="bg-[#2E9896]"
                headerBgColor="bg-[#005353]"
                headerButtons={[
                    <Button
                        className="mx-4 mt-1"
                        text="Inicio"
                    />,
                    <Button
                        className="mx-4 mt-1"
                        text="Contacto"
                    />,
                    <Button
                        className="mx-4"
                        iconSrc="kart.svg"
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
                <div className="overflow-x-auto">
                    <div className="flex space-x-4">
                        {categories.map((cat, index) => (
                            <CategoryButton
                                key={index}
                                imageUrl={cat.imageUrl}
                                category={cat.category}
                                onClick={() => {}}
                                width="w-32 sm:w-40 md:w-48 lg:w-56"
                                height="h-32 sm:h-40 md:h-48 lg:h-56"
                                hoverEffect="hover:opacity-80"
                                titleColor="text-yellow-500"
                                titleBgColor="bg-blue-500"
                                titleBgOpacity="bg-opacity-75"
                                titlePadding="p-4"
                                titleRounded="rounded-full"
                                titleFontSize="text-sm sm:text-base md:text-lg lg:text-xl"
                                titleFontWeight="font-semibold"
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
