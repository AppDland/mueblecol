import Head from "next/head";
import Items from "@/data/items.json";
import { notFound } from "next/navigation";

interface ItemLayoutProps {
    children: React.ReactNode;
    params: Promise<{ item: string }>;
}

export default async function Layout({ children, params }: ItemLayoutProps) {

    const itemSlug = (await params).item;
    const product = Items.items.find(item => item.name === itemSlug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Head>
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
            </Head>
            {children}
        </>
    )
}
