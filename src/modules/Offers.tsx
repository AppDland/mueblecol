"use client";
import { useEffect, useState } from "react";
import Items from "@/data/items.json";
// import { ItemInt } from "@/interfaces/item";
// import SimpleCard from "@/components/SimpleCard";

const Offers = () => {
    // const [offerItems, setOfferItems] = useState<ItemInt[]>([]);

    useEffect(() => {
        // Filtrar los artículos en oferta
        const itemsOnOffer = Items.items.filter((item) => item.price !== item.offer);

        // Desordenar aleatoriamente los artículos
        // const shuffledItems = itemsOnOffer.sort(() => 0.5 - Math.random());

        // Guardar un máximo de 10 artículos en el estado
        // setOfferItems(shuffledItems.slice(0, 10));
    }, []);

    return (
        <section className="p-5">
            <div className="bg-[#F8F8F8] rounded-xl p-5 w-full max-w-7xl box-border">
                <div className="flex flex-wrap">
                    {/* {offerItems.map((item, index) => (
                        <SimpleCard
                            key={index}
                            title={item.name}
                            color={item.media[0].colorName}
                            image={item.media[0].photos[0]}
                            price={item.price}
                            offer={item.offer}
                        />
                    ))} */}
                </div>
            </div>
        </section>
    );
};

export default Offers;
