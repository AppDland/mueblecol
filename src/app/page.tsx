'use client';

import Card, { ItemInt } from "@/components/Card";
import Finder from "@/components/Finder";
import Kart from "@/components/kart";
import Items from "@/data/items.json";
import { useState } from "react";

export default function Home() {
    const [text, setText] = useState('');
    const [found, setFound] = useState<ItemInt[]>([]);

    const handleFind = () => {
        console.log(Items.filter(({ name }) => name.includes(text)))
        setFound(Items.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase())));
    }

    return (
        <div className="flex flex-wrap flex-col">
            <Finder value={text} setValue={setText} onFind={handleFind} />
            {
                found.map((item, index) => (
                    <Card item={item} key={index} />
                ))
            }
            <div className="mt-24 ">
                <Kart/>
            </div>
        </div>
    );
}
