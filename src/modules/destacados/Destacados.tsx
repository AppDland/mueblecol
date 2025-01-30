import BoxContent from "@/components/BoxContent";
import Section from "@/components/Section";
import SimpleCard from "@/components/SimpleCard";
import Items from "@/data/items.json";

export function Destacados() {

    return (
        <Section className="bg-gray-200">
            <h2 className="h2">Productos Destacados</h2>
            <BoxContent>
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
            </BoxContent>
        </Section>
    )
}