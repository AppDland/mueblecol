import Head from "next/head";
import Items from "@/data/items.json";
import { notFound } from "next/navigation";
import { findSimilarItems } from "@/functions/search";
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
            {/* <Head>
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            "name": "${product.publicName}",
                            "image": "${product.media[0].photos[0]}",
                            "description": "${product.description}",
                            "offers": {
                                "@type": "Offer",
                                "priceCurrency": "ARS",
                                "price": "${product.price}",
                                "url": "https://mueblecol.com/articulos/${product.name}",
                                "availability": "https://schema.org/InStock",
                                "itemCondition": "https://schema.org/NewCondition",
                                "seller": {
                                    "@type": "Organization",
                                    "name": "Mueblecol",
                                    "url": "https://mueblecol.com"
                                },
                                "priceSpecification": {
                                    "@type": "PriceSpecification",
                                    "priceCurrency": "ARS",
                                    "elegibleQuantity": {
                                        "@type": "QuantitativeValue",
                                        "value": ${product.finan.cuotas},
                                        "unitCode": "MON"
                                    },
                                }
                            }
                        }
                    `}
                </script>
            </Head> */}
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
