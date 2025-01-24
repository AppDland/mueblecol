import { ItemInt } from '@/interfaces/item';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface KartContextType {
    kart: ItemInt[];
    setKart: React.Dispatch<React.SetStateAction<ItemInt[]>>;
}

const CartContext = createContext<KartContextType | undefined>(undefined);

export const KartProvider = ({ children }: { children: ReactNode }) => {
    const [kart, setKart] = useState<ItemInt[]>([]);
    return (
        <CartContext.Provider value={{ kart, setKart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useKart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};