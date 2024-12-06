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
        <div className="flex  w-11/12 justify-center h-full">
            <div className='flex flex-col w-full  my-5 mx-5 items-center'>
                <h2 className='text-red-500 text-3xl font-bold mt-4 mb-4'>Tu Carrito</h2>
                <div className='border-2 shadow-lg w-11/12 h-96 rounded-xl'>
                    <ul>
                        {cart.map(product => (
                            <li key={product.id} className="border-b-2 border-gray-300 py-2 flex justify-between items-center w-9/12">
                                {product.name} - ${product.price} x {product.quantity}
                                <button onClick={() => handleIncrement(product.id)}>+</button>
                                <button onClick={() => handleRemove(product.id)}>-</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex text-3xl my-4 text-green-600 space-x-56  align-text-bottom' > <p>Total</p> <p>$ {total}</p> </div>
                <div className='flex border-t-2 w-11/12 border-gray-300 justify-center'>
                    <Button

                        text='Confimar Compra'
                        className='bg-red-800 text-white min-w-56 h-8 px-4 rounded-md justify-center mt-6 mb-4 '

                    />
                </div>
            </div>
        </div>
    );
};

export default Kart;

// border border-black