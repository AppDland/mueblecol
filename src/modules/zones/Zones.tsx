import { Carrousel, Navigate, SimpleCard } from "@/components";
import { getProductsByZone } from "@/services/zones.service";

interface ZonesProps {
    defaultZone?: string;
}

export async function Zones({ defaultZone = 'negocio' }: ZonesProps) {

    const response = await getProductsByZone(defaultZone, { limit: 5 });

    if (!response || response.data.length === 0) return null;

    const { data: products } = response;

    return (
        <section className="section bg-gray-200 px-1 sm:px-2">
            <h2 className="h2">Todo para tu {defaultZone}</h2>
            <div className="px-1 sm:px-2">
                <Carrousel>
                    {
                        products.map(product => (
                            <SimpleCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    }
                </Carrousel>
            </div>
            <Navigate href={`/zonas/${defaultZone}`}>
                <p className="text-center sm:hover:opacity-50 mt-3">Ver todo</p>
            </Navigate>
        </section>
    )
}