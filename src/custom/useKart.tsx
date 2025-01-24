import { ItemInt } from "@/interfaces/item";
import { useState } from "react";

const useCartHook = (item: ItemInt) => {

    const [kart, setKart] = useState<ItemInt[]>([]);

    const addItem = () => {

        const index = kart.findIndex((i) => i.id === item.id);

        if (index === -1) {
            setKart([...kart, item]);
        } else {
            const newKart = [...kart];
            newKart[index].stock += 1;
            setKart(newKart);
        }
    };

    return { kart, addItem };

};

export default useCartHook;