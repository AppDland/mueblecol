import Image from 'next/image';
import React, { useState } from 'react';
import Button from './Button';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const Kart: React.FC = () => {
    const [cart, setCart] = useState<Product[]>([]);

    const handleRemove = (id: number) => {
        setCart(cart.filter(product => product.id !== id));
    };

    const handleIncrement = (id: number) => {
        setCart(cart.map(product =>
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        ));
    };

    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    return (
        <div className="flex border border-black ">
            <div className='flex flex-col w-11/12 border border-black'>
                <h2>Tu Carrito</h2>
                <ul>
                    {cart.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price} x {product.quantity}
                            <button onClick={() => handleIncrement(product.id)}>+</button>
                            <button onClick={() => handleRemove(product.id)}>-</button>
                        </li>
                    ))}
                </ul>
                <h3>Total: ${total}</h3>
                <div className='justify-center border-t-2 my-8 border border-black'>
                    <Button
                        text='Confimar compra'
                        className='bg-red-950 text-white min-w-56 h-8 px-4 rounded-md justify-center mt-4 '

                    />
                </div>
            </div>
        </div>
    );
};

export default Kart;