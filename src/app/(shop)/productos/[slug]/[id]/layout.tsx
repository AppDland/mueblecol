import { Carrousel, ProductFallback, SimpleCard } from "@/components";
import { Suspense } from "react";
import { getSimilarProducts } from "@/services/product.service";

interface ItemLayoutProps {
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}

export default async function Layout({ children, params }: ItemLayoutProps) {

    const productId = (await params).id;

    const similarItems = await getSimilarProducts(productId);

    return (
        <>
            <Suspense fallback={<ProductFallback />}>
                {children}
            </Suspense>
            {/* Items similares */}
            {
                similarItems && similarItems.length > 0 && (
                    <div className='my-16 px-1 md:px-2'>
                        <h2 className='h2'>Similares</h2>
                        <Carrousel>
                            {
                                similarItems.map(product => (
                                    <SimpleCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            }
                        </Carrousel>
                    </div>
                )
            }
        </>
    )
}
