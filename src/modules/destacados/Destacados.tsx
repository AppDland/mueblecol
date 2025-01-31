import { Carrousel, SimpleCard } from "@/components";
import Items from "@/data/items.json";

export function Destacados() {

    return (
        <section className="section bg-gray-200 px-1 sm:px-2">
            <h2 className="h2 mb-3">Productos Destacados</h2>
            <div className="px-1 sm:px-2">
                <Carrousel>
                    {
                        Items.items.sort(() => Math.random() - 0.5).slice(0, 15).map((item, index) => (
                            <SimpleCard
                                title={item.publicName}
                                url={item.name}
                                color={item.media[0].colorName}
                                image={item.media[0].photos[0]}
                                price={item.price}
                                offer={item.offer}
                                finan={item.finan}
                                key={index}
                            />
                        ))
                    }
                </Carrousel>
            </div>
        </section>
    )
}