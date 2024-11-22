'use client';

import Button from "@/components/Button";
import Card, { ItemInt } from "@/components/Card";
import Finder from "@/components/Finder";
import Kart from "@/components/kart";
import Items from "@/data/items.json";
import Intro from "@/modules/Intro";
import { useState } from "react";

export default function Home() {
    const [text, setText] = useState('');
    const [found, setFound] = useState<ItemInt[]>([]);

    const handleFind = () => {
        console.log(Items.filter(({ name }) => name.includes(text)))
        setFound(Items.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase())));
    }

    return (
        <>
            <Intro />
            <div className="flex flex-wrap relative">
                <Finder value={text} setValue={setText} onFind={handleFind} />
                {
                    found.map((item, index) => (
                        <Card item={item} key={index} />
                    ))
                }
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
