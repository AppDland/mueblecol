import BoxContent from "@/components/BoxContent";
import SimpleCard from "@/components/SimpleCard";
import Title from "@/components/Title";
import Items from "@/data/items.json";

const Destacados = () => {

    return (
        <div className="py-5 my-8 bg-gray-200">
            <Title>Productos Destacados</Title>
            <BoxContent>
                {
                    Items.items.sort(() => Math.random() - 0.5).slice(0, 20).map((item, index) => (
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
        </div>
    )
}

export default Destacados;