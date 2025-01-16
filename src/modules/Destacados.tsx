'use client'
import Carrousel from "@/components/Carrousel";
import SimpleCard from "@/components/SimpleCard";
import Items from "@/data/items.json";

const Destacados = () => {

    return (
        <div className="flex flex-col relative w-full bg-gray-200 py-10">

            <h1 className="text-xl font-bold mb-4 text-secondary text-center">Productos Destacados</h1>

            {/* <Carrousel itemsPerPage={5}>
                {
                    // desordenar aleatoreamente y mostrar los 15 primeros
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
            </Carrousel> */}
            <div className="flex flex-wrap justify-center">
                {
                    // desordenar aleatoreamente y mostrar los 15 primeros
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
            </div>
        </div>
    )
}

export default Destacados;