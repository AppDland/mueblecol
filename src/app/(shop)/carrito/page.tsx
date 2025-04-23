'use client';

import { useEffect, useState } from 'react';
import { getCart } from "@/services/cart.service";
import { notFound } from 'next/navigation';
import { Loading } from '@/components';
import { CartItem } from '@/components/cart/CartItem';
import Link from 'next/link';
import { CartProps } from '@/interfaces/cart';

export default function Carrito() {
    const [cart, setCart] = useState<CartProps | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const cartData = await getCart();
                setCart(cartData);
            } catch (err: any) {
                notFound();
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Tu Carrito</h1>

            {cart?.CartItem.length === 0 ? (
                <div className="text-center py-12">
                    <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
                    <p className="text-gray-600 mb-6">Explora nuestros productos y encuentra algo que te guste</p>
                    <Link
                        href="/productos"
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        Ver Productos
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm">
                            {cart?.CartItem.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${cart?.total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Envío</span>
                                    <span>Gratis</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>${cart?.total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors">
                                    Proceder al Pago
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}