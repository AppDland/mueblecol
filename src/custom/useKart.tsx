import { ItemInt } from "@/interfaces/item";
import { useState } from "react";

const addToKart = (product: ItemInt) => {

    const [kart, setKart] = useState<ItemInt[]>([]);

    setKart([...kart, product]);
};

export default addToKart;