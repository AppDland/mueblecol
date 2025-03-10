import { Carrousel, SimpleCard } from "@/components";
import { getHighlightsProducts } from "@/services/product.service";

export async function Destacados() {

    const products = await getHighlightsProducts();

    if (!products) return null;

    return (
        <section className="section bg-gray-100 px-1 sm:px-2">
            <h2 className="h2 mb-3">Productos Destacados</h2>
            <div>
                <Carrousel>
                    {
                        products.sort(() => Math.random() - 0.5).map(product => (
                            <SimpleCard
                                product={product}
                                key={product.id}
                            />
                        ))
                    }
                </Carrousel>
            </div>
        </section>
    )
}