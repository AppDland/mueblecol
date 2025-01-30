import BigCard from "@/components/BigCard";
import Items from "@/data/items.json";

const items = [Items.items[0], Items.items[4]];

export function Best() {

    return (
        <div className="flex flex-wrap justify-center">
            {
                items.map((item, index) => (
                    <BigCard
                        {...item}
                        key={index}
                    />
                ))
            }
        </div>
    )
}