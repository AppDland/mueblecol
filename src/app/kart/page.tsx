'use client';

import { useEffect, useState } from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useKart } from "../context/KartContext";
import Link from "next/link";

const kartBuy = () => {
    const { kart, setKart } = useKart();
    const [localKart, setLocalKart] = useState(kart);

    useEffect(() => {
        const storedKart = localStorage.getItem('kart');
        if (storedKart) {
            setLocalKart(JSON.parse(storedKart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('kart', JSON.stringify(localKart));
        setKart(localKart);
    }, [localKart, setKart]);

    const calculateTotal = () => {
        return localKart.reduce((sum, item) => sum + item.price * item.stock, 0);
    };

    const total = calculateTotal();

    const clearKart = () => {
        setLocalKart([]);
        localStorage.removeItem('kart');
    };

    const removeItem = (index: number) => {
        const newKart = localKart.filter((_, i) => i !== index);
        setLocalKart(newKart);
        localStorage.setItem('kart', JSON.stringify(newKart));
    };

    return (
        <div className="container justify-center mt-5 mx-auto text-center border bg-neutral-100 rounded-lg select-none">
            <h1 className="my-4 sm:my-10 font-bold text-3xl">{localKart.length === 0 ? 'Agrega Articulos' : 'Tus Articulos'}</h1>
            <div>
                {
                    localKart.map((product, index) => (
                        <KartInventary
                            key={index}
                            name={product.publicName}
                            price={product.price}
                            amount={product.stock}
                            photos={product.media[0].photos[0]}
                            onRemove={() => removeItem(index)}
                        />
                    ))
                }
                {
                    localKart.length === 0 ? (
                        <div className="my-10">
                            <p className="text-xl">No hay articulos en el carrito</p>
                            <Link href={"/"}>
                                <button
                                    className="bg-primary-dark hover:bg-primary text-white font-bold mt-8 py-3 px-4 rounded"
                                    aria-label="Ver Articulos"
                                >Ver Articulos
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="my-10">
                            <p className="text-xl text-center font-semibold">Total: ${total.toFixed(2)}</p>
                            <button
                                className="bg-primary-dark hover:bg-primary-light text-white font-bold mt-8 mx-6 py-3 px-4 rounded"
                                onClick={clearKart}
                                aria-label="Limpiar Carrito"
                            >Limpiar Carrito
                            </button>
                            <button
                                className="bg-primary-dark hover:bg-primary-light text-white font-bold mt-8 mx-6 py-3 px-4 rounded"
                                onClick={() => alert('Pago Realizado')}
                                aria-label="Realizar Pago"
                            >Realizar Pago
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

interface KartInventary {
    name: string;
    price: number;
    amount: number;
    photos: string;
    onRemove: () => void;
}

const KartInventary = ({ name, price, amount, photos, onRemove }: KartInventary) => {
    return (
        <div className="flex w-11/12 mx-4 sm:mx-10 justify-between border-b border-gray-400 py-3 sm:py-8 my-3 sm:my-8 rounded-lg">
            <div className="flex overflow-hidden object-cover w-36 h-28 sm:w-1/3 sm:h-36 sm:ml-5 ml-2 rounded-lg ">
                <img
                    src={photos}
                    alt="Visualizacion previa"
                    className="objet-cover w-full h-full"
                />
            </div>
            <div className="w-full sm:mx-5 mx-2">
                <p className="text-sm sm:text-lg text-start ml-2 mt-2 font-semibold">{name}</p>
                <p className="text-base sm:text-2xl font-semibold text-right mt-14 sm:mr-5 mr-2">$ {price}</p>
            </div>
            <button
                className=" text-primary-dark hover:text-primary sm:p-2 my-auto sm:mr-5 mr-2 h-2/4 text-3xl rounded"
                onClick={onRemove}
            >
                <BiSolidTrashAlt />
            </button>
        </div>
    )
}

export default kartBuy;
