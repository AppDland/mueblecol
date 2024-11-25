'use client';
import Select from "@/components/Select";
import { ItemInt } from "@/interfaces/item";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface OrderByInt {
    initialItems: ItemInt[];
    setSortedItems: Dispatch<SetStateAction<ItemInt[]>>;
    setFilteredItems: Dispatch<SetStateAction<ItemInt[]>>;
}

const OrderBy = ({ initialItems, setSortedItems }: OrderByInt) => {

    const [option, setOption] = useState('random');

    useEffect(() => {
        setSortedItems(() => {
            if (option === "random") {
                return initialItems;
            }
            const sorted = [...initialItems].sort((a, b) => {
                switch (option) {
                    case 'minor':
                        return a.price - b.price;
                    case 'major':
                        return b.price - a.price;
                    default:
                        return 0;
                }
            });
            return sorted;
        });
    }, [initialItems, option]);

    const handleChange = (value: string) => {
        setOption(value);
    }

    return (
        <div>
            <p>Ordenar</p>
            <Select
                options={[
                    { value: 'random', label: 'Destacados' },
                    { value: 'minor', label: 'Menor precio' },
                    { value: 'major', label: 'Mayor precio' }
                ]}
                onChange={handleChange}
                value={option}
            />
        </div>
    )
}

export default OrderBy;