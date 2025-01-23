'use client';

import { ItemInt } from '@/interfaces/item';
import { createContext, useContext, useState } from 'react';

interface KartContectType {
    kart: ItemInt[];
    setKart: (kart: []) => void;
    addToKart: (product: ItemInt) => void;
}

const kartContext = createContext<KartContectType | undefined>(undefined);

const useKart = () => {
    const context = useContext(kartContext);
    if (!context) {
        throw new Error("useKart must be used within a KartProvider");
    }
    return context;
}

const KartProvider = ({ children }: { children: React.ReactNode }) => {
    const [kart, setKart] = useState<ItemInt[]>([]);

    const addToKart = (product: ItemInt) => {
        setKart([...kart, product]);
    };


    return (
        <kartContext.Provider value={{ kart, setKart, addToKart }}>
            {children}
        </kartContext.Provider>
    )
}

export { useKart, KartProvider };





