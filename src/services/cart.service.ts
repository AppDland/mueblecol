import axios from 'axios';
import { CartProps } from '@/interfaces/cart';
export async function getCart() {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
            withCredentials: true
        });
        console.log(data);
        return data as CartProps;
    } catch (error: any) {
        console.error('Error fetching cart:', error.message);
        throw new Error(error.response?.data?.message || 'Error al cargar el carrito');
    }
}

export async function addProductToCart(productId: string, quantity: number) {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cart/add-product`, { productId, quantity }, {
            withCredentials: true
        });
        return data;
    } catch (error: any) {
        throw error.response.data.message || "";
    }
};

export const useCartService = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;


    const removeProductFromCart = async (productId: string) => {
        try {
            const { data } = await axios.delete(`${apiUrl}/removecart`, {
                data: { productId },
                withCredentials: true
            });
            return data;
        } catch (error: any) {
            throw error.response.data.message || "";
        }
    };

    return {
        getCart,
        addProductToCart,
        removeProductFromCart,
    };
}