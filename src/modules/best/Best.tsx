import { BigCard } from "@/components";
import Items from "@/data/items.json";

const items = {
    items1: [Items.items[0], Items.items[4]],
    items2: [Items.items[3], Items.items[15]],
}

export function Best({ itemsKey = 'items1' }: { itemsKey?: 'items1' | 'items2' }) {

    return (
        <div className="flex flex-wrap justify-center my-6">
            {
                items[itemsKey].map((item, index) => (
                    <BigCard
                        {...item}
                        key={index}
                    />
                ))
            }
        </div>
    )
}