'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCartService } from '@/services/cart.service';
import { CartItemProps } from '@/interfaces/cart';

interface CartItemComponentProps {
    item: CartItemProps;
}

export function CartItem({ item }: CartItemComponentProps) {
    const [quantity, setQuantity] = useState(item.quantity);
    const cartService = useCartService();

    const handleQuantityChange = async (newQuantity: number) => {
        if (newQuantity < 1) return;
        setQuantity(newQuantity);
        try {
            await cartService.addProductToCart(item.product.id, newQuantity);
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleRemove = async () => {
        try {
            await cartService.removeProductFromCart(item.product.id);
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    const price = item.priceSnapshot.offerPrice || item.priceSnapshot.onePaymentPrice || item.priceSnapshot.financialPrice;

    return (
        <div className="flex items-center gap-4 p-4 border-b border-gray-200">
            <div className="relative w-24 h-24">
                <Image
                    src={item.product.ProductPhotos[0].cloudUrl}
                    alt={item.product.productName}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.product.productName}</h3>
                <div className="space-y-1">
                    <p className="text-gray-600">Precio: ${price.toFixed(2)}</p>
                    {item.priceSnapshot.offerPrice && (
                        <p className="text-green-600">¡Oferta especial!</p>
                    )}
                    {item.priceSnapshot.financialPrice && (
                        <p className="text-sm text-gray-500">
                            {item.priceSnapshot.mountOfPayments} cuotas de ${item.priceSnapshot.monthPayment.toFixed(2)}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    +
                </button>
            </div>
            <button
                onClick={handleRemove}
                className="p-2 text-red-500 hover:text-red-700"
            >
                Eliminar
            </button>
        </div>
    );
} 