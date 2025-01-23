'use client';

import { ItemInt } from "@/interfaces/item";
import { useState } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";


const kartBuy = () => {

    const [kart, setKart] = useState<ItemInt[]>([]);

    // const handleRemove = (id: number) => {
    //     setKart(kart.filter(product => product.id !== id));
    // };

    // const handleIncrement = (id: number) => {
    //     setKart(kart.map(product =>
    //         product.id === id ? { ...product, quantity: product.stock + 1 } : product
    //     ));
    // };

    const total = kart.reduce((sum, product) => sum + product.price * product.stock, 0);

    return (
        <div className="container mt-5 mx-auto text-center border bg-neutral-100 rounded-lg select-none">
            <h1 className="my-10 font-extrabold text-3xl">Tus Articulos</h1>
            <div>
                {
                    kart.map((product, index) => (
                        <KartInventary
                            key={index}
                            name={product.name}
                            price={product.price}
                            mount={product.stock}
                            photos={product.media[0].photos[0]}
                        />
                    ))
                }
                <div className="flex justify-between border-b pb-8 mx-10 ">
                    <h2 className="text-2xl font-extrabold">Total</h2>
                    <h2 className="text-2xl font-extrabold">{total}</h2>
                </div>
                <div className="flex justify-between my-10 mx-10 ">
                    <button className="bg-primary-dark hover:bg-primary text-white font-bold py-2 px-4 rounded">Vaciar</button>
                    <button className="bg-primary-dark hover:bg-primary text-white font-bold py-2 px-4 rounded">Pagar</button>
                </div>
            </div>
        </div>
    );
}

interface KartInventary {
    name: string;
    price: number;
    mount: number;
    photos: string;
}

const KartInventary = ({ name, price, mount, photos }: KartInventary) => {

    return (
        <div className="flex justify-between border-b py-8 my-8 mx-10 border border-black">
            <div className="flex ml-5 border border-black rounded-lg">
                <img src={photos} alt="Visualizacion previa" />
            </div>
            <div className="border border-black w-full mx-5">
                <h2 className="text-2xl font-extrabold">{name}</h2>
                <h2 className="text-2xl font-extrabold">{mount}</h2>
                <h2 className="text-2xl font-extrabold">{price}</h2>
            </div>
            <button
                className="bg-primary-dark hover:bg-primary text-white p-2 my-auto mr-5 h-2/4 text-3xl rounded"
                onClick={() => { }}
            >
                <BiSolidTrashAlt />
            </button>
        </div>
    )
}

export default kartBuy;


// border border-black



