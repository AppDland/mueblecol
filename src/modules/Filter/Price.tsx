'use client';
import InputNumber from "@/components/InputNumber";
import { ItemInt } from "@/interfaces/item";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

interface PriceInt {
    setFilteredItems: Dispatch<SetStateAction<ItemInt[]>>;
    initialItems: ItemInt[];
}

const Price = ({ setFilteredItems, initialItems }: PriceInt) => {

    const [min, setMin] = useState<number>();
    const [max, setMax] = useState<number>();
    const [originalItems, setOriginalItems] = useState<ItemInt[]>(initialItems);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        setOriginalItems(initialItems);
    }, [initialItems]);

    useEffect(() => {
        if (!isTyping) {
            if (min !== undefined || max !== undefined) {
                setFilteredItems(() => originalItems.filter(item => {
                    const itemPrice = item.price; // Asumiendo que los items tienen una propiedad 'price'
                    const minCondition = min !== undefined ? itemPrice >= min : true;
                    const maxCondition = max !== undefined ? itemPrice <= max : true;
                    return minCondition && maxCondition;
                }));
            }
        }
    }, [min, max, originalItems, isTyping]);

    const handleChange = () => {
        setIsTyping(false);
        setFilteredItems(() => {
            if (min === undefined && max === undefined) {
                return originalItems; // Si ambos valores son indefinidos, se restablecen los artículos originales
            }
            return originalItems.filter(item => {
                const itemPrice = item.price; // Asumiendo que los items tienen una propiedad 'price'
                const minCondition = min !== undefined ? itemPrice >= min : true;
                const maxCondition = max !== undefined ? itemPrice <= max : true;
                return minCondition && maxCondition;
            });
        });
    }

    return (
        <div>
            <InputNumber
                value={min}
                onChange={setMin}
                placeholder="Mínimo"
                onFocus={() => setIsTyping(true)}
                onBlur={handleChange}
            />
            <InputNumber
                value={max}
                onChange={setMax}
                placeholder="Máximo"
                onFocus={() => setIsTyping(true)}
                onBlur={handleChange}
            />
        </div>
    )
}

export default Price;