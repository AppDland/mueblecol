'use client';
import Button from "@/components/Button";
import Finder from "@/components/Finder";
import Items from "@/data/items.json";
import { ItemInt } from "@/interfaces/item";
import Imperdible from "@/modules/Imperdible";
import Intro from "@/modules/Intro";
import Offers from "@/modules/Offers";
import { useState } from "react";

export default function Home() {
    const [text, setText] = useState('');
    const [found, setFound] = useState<ItemInt[]>([]);

    const handleFind = () => {
        const tempFound = Items.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase()));
        setFound(tempFound);
    }

    return (
        <div className="flex flex-col w-full box-border">
            <Intro />
            <div className="flex flex-wrap relative">
                <Finder value={text} setValue={setText} onFind={handleFind} />
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
            <Offers />
            <Imperdible /> 
        </div>
    );
}
