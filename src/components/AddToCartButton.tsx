'use client';

import { useState } from "react";
import AmountSelector from "./AmountSelector";
import { addProductToCart } from "@/services/cart.service";

export default function AddToCartButton({ productId }: { productId: string }) {

    const [quantity, setQuantity] = useState(1);

    const handleAdd = async () => {
        try {
            await addProductToCart(productId, quantity);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <AmountSelector value={quantity} onChange={setQuantity} />
            <button
                className="btn-secondary w-full"
                onClick={handleAdd}
                type="button"
            >
                Añadir al carrito
            </button>
        </>
    )
}
