import { BigCard } from "@/components";
import { getBestSellersProducts } from "@/services/product.service";


export async function Best() {

    const products = await getBestSellersProducts();

    if (!products) return null;

    return (
        <div className="flex flex-wrap justify-center my-6">
            {
                products.map(product => (
                    <BigCard
                        product={product}
                        key={product.id}
                    />
                ))
            }
        </div>
    )
}