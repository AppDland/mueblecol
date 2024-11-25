'use client';
import { commas } from "@/functions/commas";
import OrderBy from "./OrderBy";
import Price from "./Price";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ItemInt } from "@/interfaces/item";

interface FilterInt {
    searchWord: string;
    items: ItemInt[];
    filteredItems: ItemInt[];
    setFilteredItems: Dispatch<SetStateAction<ItemInt[]>>;
}

const Filter = ({ searchWord, items, filteredItems, setFilteredItems }: FilterInt) => {

    //Se decide manejar un estado aparte para el ordenamiento de los items
    //Esto permite que se puedan combninar los filtros con el ordenamiento
    //El funcionamiento es asi:
    //
    //SI SE EMPIEZA ORDENANDO
    // 1. Se toma el array original y se ordena segun el criterio seleccionado
    // 2. Se actualiza el estado de los items ordenados
    // 3. Se actualiza el estado de los items filtrados
    //
    //SI SE USA PRIMERO ALGUN FILTRO
    // 1. Se toma el array ordenado, que ha sido inicializado con el array original
    // 2. Se actualiza el estado de los items filtrados
    //
    // Se recomienda usar un estado que impida el disparo de los efectos constantemente
    // En Price se usa un estado para saber si el usuario esta escribiendo o no
    const [sortedItems, setSortedItems] = useState<ItemInt[]>(items);
    useEffect(() => setFilteredItems(sortedItems), [sortedItems]);

    return (
        <div>
            <p>{searchWord} {commas(filteredItems.length)} resultados</p>
            <OrderBy
                initialItems={items}
                setSortedItems={setSortedItems}
                setFilteredItems={setFilteredItems}
            />
            <Price
                setFilteredItems={setFilteredItems}
                initialItems={sortedItems}
            />
        </div>
    )
}

export default Filter;