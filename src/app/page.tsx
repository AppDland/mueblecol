'use client';

import Button from "@/components/Button";
import Card, { ItemInt } from "@/components/Card";
import CategoryButton from "@/components/CategoryButton";
import CategoryPage from "@/components/CategoryPage";
import Finder from "@/components/Finder";
import Kart from "@/components/kart";
import Items from "@/data/items.json";
import Intro from "@/modules/Intro";
import { useState } from "react";

export default function Home() {
    const [text, setText] = useState('');
    const [found, setFound] = useState<ItemInt[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


    const handleFind = () => {
        console.log(Items.filter(({ name }) => name.includes(text)))
        setFound(Items.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase())));
    }

    return (
        <>
            <Intro
                headerTitle={["Mueble", "Col"]}
                headerTitleColors={['text-[#177675]', 'text-[#2E9896]']}
                title="Muebles Para El Hogar"
                subtitle="!Gran Variedad!"
                title2="Envio Gratis"
                title2Color="text-[#005353]"
                subtitle2="Llevamos A La Puerta De Tu Casa"
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
            <div className="flex flex-wrap relative">
                <Finder value={text} setValue={setText} onFind={handleFind} />
                {
                    found.map((item, index) => (
                        <Card item={item} key={index} />
                    ))
                }
                <div className="p-4">
                    {!selectedCategory ? (
                        <div>
                            <h1 className="text-3xl font-bold mb-4">Select a Category</h1>
                            <div className="flex space-x-4">
                                <CategoryButton
                                    imageUrl="https://example.com/image1.jpg"
                                    category="White"
                                    onClick={setSelectedCategory}
                                />
                                <CategoryButton
                                    imageUrl="https://example.com/image2.jpg"
                                    category="Brown"
                                    onClick={setSelectedCategory}
                                />
                            </div>
                        </div>
                    ) : (
                        <CategoryPage category={selectedCategory} />
                    )}
                </div>
                <Button
                    className="absolute right-5 mt-4 "
                    iconSrc="kart.svg"
                    width="60px"
                    height="60px"
                    iconHeight={50}
                    iconWidth={50}
                    iconColor="red-500"
                />
            </div>
            <div className="mt-24 ">
                <Kart />
            </div>


        </>
    );
}
